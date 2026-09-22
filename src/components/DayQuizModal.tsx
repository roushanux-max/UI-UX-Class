import React, { useState, useEffect } from 'react';
import { DayQuiz, QuizQuestion, QuizResult } from '../types';
import { getDayQuiz, saveQuizResult, getQuizResultForDay } from '../data/quizData';
import {
  HelpCircle,
  CheckCircle2,
  XCircle,
  Sparkles,
  ArrowRight,
  RotateCcw,
  Trophy,
  BookOpen,
  Award,
  ChevronRight,
  X,
  Target,
  Check,
  Compass
} from 'lucide-react';

interface DayQuizModalProps {
  isOpen: boolean;
  dayNumber: number;
  onClose: () => void;
  onProceedToNextDay?: (nextDayNumber: number) => void;
}

export const DayQuizModal: React.FC<DayQuizModalProps> = ({
  isOpen,
  dayNumber,
  onClose,
  onProceedToNextDay
}) => {
  const quiz = getDayQuiz(dayNumber);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [questionId: string]: number }>({});
  const [showAnswerFeedback, setShowAnswerFeedback] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const [finalScore, setFinalScore] = useState(0);

  // Initialize or reset state when opening for a specific day
  useEffect(() => {
    if (isOpen && quiz) {
      const pastResult = getQuizResultForDay(dayNumber);
      if (pastResult) {
        setSelectedAnswers(pastResult.userAnswers || {});
        setFinalScore(pastResult.score);
        // Start fresh or show results
        setCurrentQuestionIndex(0);
        setShowAnswerFeedback(false);
        setIsCompleted(false);
      } else {
        setSelectedAnswers({});
        setCurrentQuestionIndex(0);
        setShowAnswerFeedback(false);
        setIsCompleted(false);
        setFinalScore(0);
      }
    }
  }, [isOpen, dayNumber, quiz]);

  if (!isOpen || !quiz) return null;

  const currentQ: QuizQuestion = quiz.questions[currentQuestionIndex];
  const totalQuestions = quiz.questions.length;
  const currentAnswer = selectedAnswers[currentQ.id];
  const hasAnsweredCurrent = currentAnswer !== undefined;

  const handleSelectOption = (index: number) => {
    if (showAnswerFeedback) return; // Prevent changing after revealing feedback
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQ.id]: index
    }));
    setShowAnswerFeedback(true);
  };

  const handleNext = () => {
    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setShowAnswerFeedback(selectedAnswers[quiz.questions[currentQuestionIndex + 1].id] !== undefined);
    } else {
      // Calculate final score
      let score = 0;
      quiz.questions.forEach((q) => {
        if (selectedAnswers[q.id] === q.correctAnswerIndex) {
          score += 1;
        }
      });
      setFinalScore(score);
      setIsCompleted(true);

      // Save to local storage
      const result: QuizResult = {
        dayNumber,
        score,
        totalQuestions,
        passed: score >= Math.ceil(totalQuestions * 0.75),
        completedAt: new Date().toISOString(),
        userAnswers: selectedAnswers
      };
      saveQuizResult(result);
    }
  };

  const handleRestartQuiz = () => {
    setSelectedAnswers({});
    setCurrentQuestionIndex(0);
    setShowAnswerFeedback(false);
    setIsCompleted(false);
    setFinalScore(0);
  };

  const isCorrect = currentAnswer === currentQ.correctAnswerIndex;
  const scorePercentage = Math.round((finalScore / totalQuestions) * 100);

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 animate-in fade-in duration-200"
      id="day-quiz-modal-backdrop"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl sm:rounded-3xl max-w-2xl w-full shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
        id="day-quiz-modal-container"
      >
        {/* Top Header Bar */}
        <div className="px-5 py-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50/80 dark:bg-slate-950/50">
          <div className="flex items-center gap-2.5">
            <span className="w-8 h-8 rounded-xl bg-sky-100 dark:bg-sky-950/80 border border-sky-300 dark:border-sky-800 flex items-center justify-center text-sky-600 dark:text-sky-300 font-bold text-xs font-mono">
              D{dayNumber}
            </span>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] uppercase font-bold tracking-wider text-sky-600 dark:text-sky-400">
                  Day Knowledge Check
                </span>
                <span className="text-[10px] text-slate-400 dark:text-slate-500">•</span>
                <span className="text-[10px] text-slate-500 dark:text-slate-400">
                  {totalQuestions} Questions
                </span>
              </div>
              <h2 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-tight">
                {quiz.dayTitle}
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-slate-200/80 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 flex items-center justify-center transition-colors cursor-pointer"
            id="close-day-quiz-modal-button"
            title="Close quiz"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Progress Bar (during quiz) */}
        {!isCompleted && (
          <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5">
            <div
              className="bg-sky-500 dark:bg-sky-400 h-1.5 transition-all duration-300 ease-out"
              style={{
                width: `${((currentQuestionIndex + 1) / totalQuestions) * 100}%`
              }}
            />
          </div>
        )}

        {/* Body Content */}
        <div className="p-5 sm:p-7 overflow-y-auto flex-1 space-y-5">
          {!isCompleted ? (
            /* Active Question State */
            <div className="space-y-5">
              {/* Question Index & Concept Tag */}
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                  Question <strong className="text-slate-900 dark:text-white font-mono">{currentQuestionIndex + 1}</strong> of {totalQuestions}
                </span>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200 dark:border-indigo-800 text-indigo-700 dark:text-indigo-300">
                  <Target className="w-3 h-3" />
                  {currentQ.coreConcept}
                </span>
              </div>

              {/* Scenario Context Box (if present) */}
              {currentQ.scenario && (
                <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800/80 text-xs text-slate-700 dark:text-slate-300 leading-relaxed flex items-start gap-2.5">
                  <Compass className="w-4 h-4 text-sky-600 dark:text-sky-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-slate-900 dark:text-white block text-[11px] uppercase tracking-wider mb-0.5">
                      Scenario Context:
                    </span>
                    <p>{currentQ.scenario}</p>
                  </div>
                </div>
              )}

              {/* Question Text */}
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-snug">
                {currentQ.question}
              </h3>

              {/* Options List */}
              <div className="space-y-2.5">
                {currentQ.options.map((option, optIdx) => {
                  const isSelected = currentAnswer === optIdx;
                  const isCorrectAnswer = optIdx === currentQ.correctAnswerIndex;
                  const optionLetters = ['A', 'B', 'C', 'D'];

                  let optionStyles = 'bg-white dark:bg-slate-800/80 border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:border-sky-400 dark:hover:border-sky-500';

                  if (showAnswerFeedback) {
                    if (isCorrectAnswer) {
                      optionStyles = 'bg-emerald-50 dark:bg-emerald-950/50 border-emerald-500 dark:border-emerald-500 text-emerald-900 dark:text-emerald-200 font-medium';
                    } else if (isSelected && !isCorrectAnswer) {
                      optionStyles = 'bg-rose-50 dark:bg-rose-950/50 border-rose-500 dark:border-rose-500 text-rose-900 dark:text-rose-200';
                    } else {
                      optionStyles = 'bg-slate-50/50 dark:bg-slate-900/40 border-slate-200 dark:border-slate-800 text-slate-400 dark:text-slate-500 opacity-60';
                    }
                  } else if (isSelected) {
                    optionStyles = 'bg-sky-50 dark:bg-sky-950/60 border-sky-500 dark:border-sky-500 text-sky-900 dark:text-sky-200 font-medium';
                  }

                  return (
                    <button
                      key={optIdx}
                      onClick={() => handleSelectOption(optIdx)}
                      disabled={showAnswerFeedback}
                      className={`w-full p-3.5 rounded-xl border text-left transition-all flex items-start gap-3 text-xs sm:text-sm cursor-pointer disabled:cursor-default ${optionStyles}`}
                      id={`quiz-option-${currentQ.id}-${optIdx}`}
                    >
                      <span
                        className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs font-mono font-bold shrink-0 mt-0.5 border ${
                          showAnswerFeedback && isCorrectAnswer
                            ? 'bg-emerald-600 border-emerald-600 text-white'
                            : showAnswerFeedback && isSelected && !isCorrectAnswer
                            ? 'bg-rose-600 border-rose-600 text-white'
                            : isSelected
                            ? 'bg-sky-600 border-sky-600 text-white'
                            : 'bg-slate-100 dark:bg-slate-700 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300'
                        }`}
                      >
                        {showAnswerFeedback && isCorrectAnswer ? (
                          <Check className="w-3.5 h-3.5" />
                        ) : showAnswerFeedback && isSelected && !isCorrectAnswer ? (
                          <X className="w-3.5 h-3.5" />
                        ) : (
                          optionLetters[optIdx]
                        )}
                      </span>
                      <span className="flex-1 leading-relaxed">{option}</span>
                    </button>
                  );
                })}
              </div>

              {/* Rationale & Feedback Card (appears immediately upon selecting an answer) */}
              {showAnswerFeedback && (
                <div
                  className={`p-4 rounded-xl border space-y-2 animate-in fade-in duration-200 ${
                    isCorrect
                      ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-200'
                      : 'bg-rose-50 dark:bg-rose-950/40 border-rose-300 dark:border-rose-800 text-rose-900 dark:text-rose-200'
                  }`}
                >
                  <div className="flex items-center gap-2 font-bold text-xs sm:text-sm">
                    {isCorrect ? (
                      <>
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                        <span>Correct! Great UX intuition.</span>
                      </>
                    ) : (
                      <>
                        <XCircle className="w-4 h-4 text-rose-600 dark:text-rose-400" />
                        <span>Not quite. Here is the industry UX rationale:</span>
                      </>
                    )}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    {currentQ.explanation}
                  </p>
                </div>
              )}
            </div>
          ) : (
            /* Quiz Completed State */
            <div className="py-4 text-center space-y-6 animate-in zoom-in-95 duration-200">
              <div className="inline-flex p-4 rounded-3xl bg-gradient-to-tr from-sky-500/20 via-indigo-500/20 to-emerald-500/20 border border-sky-300 dark:border-sky-500/30">
                <Trophy className="w-12 h-12 text-amber-500 dark:text-amber-400" />
              </div>

              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400">
                  Knowledge Check Complete!
                </span>
                <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                  Day {dayNumber} Quiz Results
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                  {scorePercentage >= 75
                    ? `Outstanding! You scored ${finalScore}/${totalQuestions} (${scorePercentage}%). You have mastered the core Day ${dayNumber} concepts!`
                    : `You scored ${finalScore}/${totalQuestions} (${scorePercentage}%). Good effort! Review the questions below or retake the check to lock in your learnings.`}
                </p>
              </div>

              {/* Score Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-md mx-auto text-left">
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 text-center">
                  <span className="text-[10px] uppercase font-bold text-slate-500 dark:text-slate-400 block">
                    Your Score
                  </span>
                  <strong className="text-xl font-mono text-slate-900 dark:text-white">
                    {finalScore} / {totalQuestions}
                  </strong>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 text-center">
                  <span className="text-[10px] uppercase font-bold text-slate-500 dark:text-slate-400 block">
                    Accuracy
                  </span>
                  <strong className="text-xl font-mono text-sky-600 dark:text-sky-400">
                    {scorePercentage}%
                  </strong>
                </div>

                <div className="col-span-2 sm:col-span-1 p-3 rounded-xl bg-slate-50 dark:bg-slate-950/80 border border-slate-200 dark:border-slate-800 text-center">
                  <span className="text-[10px] uppercase font-bold text-slate-500 dark:text-slate-400 block">
                    Mastery Status
                  </span>
                  <span
                    className={`inline-flex items-center gap-1 text-xs font-bold mt-1 ${
                      scorePercentage >= 75
                        ? 'text-emerald-600 dark:text-emerald-400'
                        : 'text-amber-600 dark:text-amber-400'
                    }`}
                  >
                    {scorePercentage >= 75 ? (
                      <>
                        <Award className="w-3.5 h-3.5" />
                        <span>Mastered</span>
                      </>
                    ) : (
                      <>
                        <BookOpen className="w-3.5 h-3.5" />
                        <span>In Review</span>
                      </>
                    )}
                  </span>
                </div>
              </div>

              {/* Questions Review List */}
              <div className="text-left space-y-3 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Concept Review:
                </h4>
                <div className="space-y-2">
                  {quiz.questions.map((q, idx) => {
                    const ans = selectedAnswers[q.id];
                    const wasCorrect = ans === q.correctAnswerIndex;
                    return (
                      <div
                        key={q.id}
                        className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/80 text-xs space-y-1"
                      >
                        <div className="flex items-center justify-between gap-2">
                          <span className="font-semibold text-slate-800 dark:text-slate-200">
                            Q{idx + 1}: {q.coreConcept}
                          </span>
                          <span
                            className={`inline-flex items-center gap-1 text-[11px] font-semibold ${
                              wasCorrect
                                ? 'text-emerald-600 dark:text-emerald-400'
                                : 'text-rose-600 dark:text-rose-400'
                            }`}
                          >
                            {wasCorrect ? (
                              <>
                                <Check className="w-3 h-3" /> Correct
                              </>
                            ) : (
                              <>
                                <X className="w-3 h-3" /> Missed
                              </>
                            )}
                          </span>
                        </div>
                        <p className="text-slate-500 dark:text-slate-400 text-[11px] line-clamp-2">
                          {q.question}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="px-5 py-4 border-t border-slate-200 dark:border-slate-800 bg-slate-50/80 dark:bg-slate-950/50 flex flex-wrap items-center justify-between gap-3">
          {!isCompleted ? (
            <>
              <button
                type="button"
                onClick={onClose}
                className="px-3.5 py-2 rounded-xl text-xs font-semibold text-slate-600 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors cursor-pointer"
                id="quit-quiz-button"
              >
                Exit Quiz
              </button>

              <button
                type="button"
                onClick={handleNext}
                disabled={!showAnswerFeedback}
                className="px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 disabled:opacity-40 disabled:cursor-not-allowed text-white text-xs font-semibold flex items-center gap-2 shadow-sm transition-all cursor-pointer"
                id="next-quiz-question-button"
              >
                <span>
                  {currentQuestionIndex < totalQuestions - 1 ? 'Next Question' : 'View Results'}
                </span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </>
          ) : (
            <>
              <button
                type="button"
                onClick={handleRestartQuiz}
                className="px-4 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 text-xs font-semibold flex items-center gap-1.5 cursor-pointer shadow-xs"
                id="retake-quiz-button"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Retake Quiz</span>
              </button>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 rounded-xl bg-slate-200 hover:bg-slate-300 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-semibold transition-colors cursor-pointer"
                  id="close-completed-quiz-button"
                >
                  Close
                </button>

                {dayNumber < 10 && onProceedToNextDay && (
                  <button
                    type="button"
                    onClick={() => {
                      onClose();
                      onProceedToNextDay(dayNumber + 1);
                    }}
                    className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold flex items-center gap-1.5 shadow-sm transition-all cursor-pointer"
                    id="proceed-to-next-day-quiz-button"
                  >
                    <span>Proceed to Day {dayNumber + 1}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

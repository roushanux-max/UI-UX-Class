create extension if not exists "pgcrypto";

create table if not exists public.profiles (
  id text primary key,
  email text not null unique,
  display_name text,
  photo_url text,
  role text not null default 'basic' check (role in ('admin', 'full_access', 'basic')),
  granted_at timestamptz,
  granted_by text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.access_requests (
  id uuid primary key default gen_random_uuid(),
  requester_id text,
  email text not null,
  name text not null,
  reason text not null,
  status text not null default 'pending' check (status in ('pending', 'approved', 'rejected')),
  requested_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.quiz_results (
  id uuid primary key default gen_random_uuid(),
  student_id text not null,
  day_number integer not null check (day_number between 1 and 10),
  score integer not null check (score >= 0),
  total_questions integer not null check (total_questions > 0),
  answers jsonb not null default '[]'::jsonb,
  completed_at timestamptz not null default now(),
  unique (student_id, day_number)
);

create table if not exists public.course_progress (
  student_id text primary key,
  completed_days integer[] not null default '{}',
  last_viewed_slide integer not null default 0,
  updated_at timestamptz not null default now()
);

create or replace function public.is_course_admin() returns boolean
language sql stable security definer set search_path = public
as $$
  select lower(coalesce(auth.jwt() ->> 'email', '')) in
    ('roushan.ux@gmail.com', 'roushankr.it@gmail.com');
$$;

create or replace function public.is_course_user(user_id text) returns boolean
language sql stable security definer set search_path = public
as $$
  select user_id = coalesce(auth.uid()::text, '');
$$;

alter table public.profiles enable row level security;
alter table public.access_requests enable row level security;
alter table public.quiz_results enable row level security;
alter table public.course_progress enable row level security;

drop policy if exists "profiles are readable by course admins" on public.profiles;
create policy "profiles are readable by course admins" on public.profiles
  for select to authenticated using (public.is_course_admin() or public.is_course_user(id));

drop policy if exists "profiles are readable by the signed-in student" on public.profiles;
create policy "profiles are readable by the signed-in student" on public.profiles
  for select to authenticated using (public.is_course_user(id));

drop policy if exists "profiles can be written by course admins" on public.profiles;
create policy "profiles can be written by course admins" on public.profiles
  for all to authenticated using (public.is_course_admin() or public.is_course_user(id))
  with check (public.is_course_admin() or public.is_course_user(id));

drop policy if exists "requests are readable by owner or admins" on public.access_requests;
create policy "requests are readable by owner or admins" on public.access_requests
  for select to authenticated using (public.is_course_admin() or public.is_course_user(requester_id));

drop policy if exists "students can create their own requests" on public.access_requests;
create policy "students can create their own requests" on public.access_requests
  for insert to authenticated with check (public.is_course_user(requester_id));

drop policy if exists "requests can be managed by admins" on public.access_requests;
create policy "requests can be managed by admins" on public.access_requests
  for update to authenticated using (public.is_course_admin()) with check (public.is_course_admin());

drop policy if exists "quiz results are readable by admins" on public.quiz_results;
create policy "quiz results are readable by admins" on public.quiz_results
  for select to authenticated using (public.is_course_admin() or public.is_course_user(student_id));

drop policy if exists "quiz results can be managed by admins" on public.quiz_results;
create policy "quiz results can be managed by admins" on public.quiz_results
  for all to authenticated using (public.is_course_admin() or public.is_course_user(student_id))
  with check (public.is_course_admin() or public.is_course_user(student_id));

drop policy if exists "progress is readable by admins" on public.course_progress;
create policy "progress is readable by admins" on public.course_progress
  for select to authenticated using (public.is_course_admin() or public.is_course_user(student_id));

drop policy if exists "progress can be managed by admins" on public.course_progress;
create policy "progress can be managed by admins" on public.course_progress
  for all to authenticated using (public.is_course_admin() or public.is_course_user(student_id))
  with check (public.is_course_admin() or public.is_course_user(student_id));

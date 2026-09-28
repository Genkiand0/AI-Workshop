# Project state
Last updated: 2026-09-27
## Works
A Next.js (App Router, TypeScript) site is live on Vercel at https://ai-workshop-flax-rho.vercel.app. The GitHub repo (Genkiand0/AI-Workshop) is connected to Vercel for deploys.
## Broken or flaky
Nothing built yet on top of the base site: there is no sign-up/login, no task storage, and no due-date sizing logic. A Supabase project exists and is linked to the repo but the site does not call it yet.
## Environment notes
Stack is Next.js (App Router) + TypeScript + plain CSS, with Supabase for auth/data, deployed on Vercel. Supabase project is created but has no tables and is not wired into the app's code yet.
## Next session
Start Slice 1: build sign-up, login, and log-out using Supabase auth, and verify the four done-criteria for that slice on the live deployed site before moving on.

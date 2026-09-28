# Roadmap
## What this is
A study task list for people learning a language or studying for class, built by Genki for the AIR workshop. It lets a signed-in user add everyday study tasks with due dates and see the ones due soonest grow larger and more visible on the page.
## What Done means
A stranger can open the live site, create an account, log in, add a study task with a due date, and see it listed. Tasks the person adds are still there, and still sized by how close their due date is, when the person comes back and logs in again later.
## Slices
1. Sign up and log in | done-criteria: [a new visitor can sign up with email and password and land on a signed-in page; a signed-in person can log out and reach the login page; a person can log back in with the same credentials and reach the signed-in page again; a person entering a wrong password sees an error and stays on the login page] | status: ACTIVE
2. Add tasks that persist | done-criteria: [a signed-in person can add a task with a title and due date and see it in a list; after reloading the page the task is still listed; the person can mark a task complete and see it change state; the person can delete a task and it stays gone after reload] | status: pending
3. Tasks grow as due date nears | done-criteria: [a task due sooner renders larger than a task due later on the same page load; a task past its due date renders in a distinct overdue style; editing a task's due date closer to today increases its rendered size on the next load] | status: pending
## Backlog
Reminders/notifications (email or push), recurring or repeating tasks, categories or tags, sharing or collaborating on a task list, a mobile app or PWA install, drag-to-reorder, search and filtering, dark mode, password reset flow, social login (Google/GitHub), task priority levels, subtasks, usage analytics dashboard.

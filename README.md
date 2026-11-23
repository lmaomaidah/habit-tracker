# Habit Tracker

**Group:** G__ · **Topic:** 42 — Habit tracker

| Name | Roll number |
|------|-------------|
| Maidah Bint E Junaid | 24I-2116 |
| Alisha Javed | 24I-2063 |
| Umm e Hani | 24I-2113 |

## About

Habit Tracker lets you browse a list of daily habits, search and filter them by category, and open each one to see its goal and streak. On the Today page you tick off the habits you did, which adds a day to their streak. It is frontend only; all data is mock data in `data/habits.ts`.

## How to run

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Routes

| Route | Shows |
|-------|-------|
| `/` | Home page with links and the three longest streaks |
| `/habits` | All 15 habits with search by name and category filter |
| `/habits/[id]` | One habit's details (unknown id shows the 404 page) |
| `/habits/new` | Form to add a habit, with validation errors |
| `/today` | Daily check-off list with streak counts |
| `/about` | What the app is and how to use it |

## Contribution

| Member | Pages | Components |
|--------|-------|------------|
| Maidah Bint E Junaid | `layout.tsx`, `/`, `/about`, `not-found.tsx` | Navbar, Footer, PageHeader, Button |
| Alisha Javed | `/habits`, `/habits/[id]`, `loading.tsx`, `data/habits.ts` | HabitList, HabitCard, SearchBar, Select, Badge |
| Umm e Hani | `/habits/new`, `/today` | HabitForm, FormField, TodayList |

## Links

- Repository: https://github.com/lmaomaidah/habit-tracker
- Video: _add Google Drive or YouTube link_
- Vercel: _add link if claiming the bonus_

## AI tools used

- Claude Code: project setup, code for the pages and components, UI styling, mock data, README and Git help

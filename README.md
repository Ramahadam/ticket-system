# React + Vite
This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.
To start run the below:
npm run dev
Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Colors

--color-text: #062b4b;
--color-primary: #5e5bff;
--color-secondary: #007ace;
--color-accent: #dff0ff;

--dark-green: #0a9965;
--light-lim: #d0fdc8;
--light-blue: #38b6ff;
--dark-red: #ff3306;
--light-red: #fdf1f1;
--dark-gray: #999999;
--light-gray: #D2D2D2;

--bg-gray: #e6e6e6;
--bg-light-gray: #efefef;

--button linear gradeint: #8664FC and #5ED9E7

Typography
**\*\***\*\*\*\***\*\***\_**\*\***\*\*\*\***\*\***-
font-szies
1.2 rem;
1.4 rem;
1.6 rem;
1.8 rem;
2 rem;

font-weight:
400 Regular
500 Meduim
600 Semibold

Border Raduis
5 px
10 px
15 px
20 px

//TODO: Project breakdown steps

1. Create fake json server and add data in json format you may refer to Udemy
2. Create login page and homepage
3. Create new incident component and add it to the route homepage/newTicket
   I. The upolad file can be a feature to be implemnted in future
4. Create a componet for displaying single incident and use the id to get the data you may also use the hook useParams check Udemy video on how to fetch data using useParams.
   Single incident has 3 internal pages (Tabs).
   i. Ticket.
   ii. Attachemnets.
   iii. Notes.

5. Create users component to dislay user details and also peform CRUD opetaions on users

## #Tools

1.React component
2.Props
3.Custom hooks.
4.useEffect, useState, useReucer, Context API, useMemo, useParams
5.Axios api and fetch.
6.Lazy loading.
7.Authentication.

TODO:
Add cancle incident, service request and change reqeust feature
once the ticket is canceled the status will change to cancel and ticket cannot be reopen again.

TODO:
Working on redux store specifically in ticketsSlice=> BUG resume
Display all tickets.
Display one ticket details.
Create ticket.
update ticket.

TODO:
Feature: Create users (Admin users are memebers) standard user won't be displayed in memebers group sidebar.

Create user.
Update user.
User must have a role.
Admin users have full rights and can view all tickets.
Standard user can view his/her ticket only.


---

## Features

1.  # Incidents
2.  # Service requests
3.  # Change requests
4.  # Users
5.  # Settings

## Pages

1.  # Dashboard
2.  # Incidents
3.  # Service requests
4.  # Change requests
5.  # Settings
6.  # Users
7.  # Login
8.  # Page not found

## Technologies

1.  # React Js
1.  # CSS modules
1.  # React Router
1.  # React Query
1.  # React Form Hook
1.  # React Toast notification
1.  # React date ns
1.  # Supabase


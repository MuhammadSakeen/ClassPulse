# Implementation Plan - Complete Student Dashboard Frontend

Complete the remaining sections of the ClassPulse Student Dashboard frontend using React and CSS, matching the existing minimal design system (white cards, subtle borders, navy text, blue accents).

## User Review Required

> [!IMPORTANT]
> - All components use static/mock data as requested (no backend changes).
> - Existing components (`DashboardNavbar`, `QuickActionCard`, `StatCard`) and authentication pages will remain untouched.

## Proposed Changes

### Dashboard Components

#### [MODIFY] [ActivityCard.jsx](file:///d:/Projects/ClassPulse/frontend/src/components/dashboards/ActivityCard.jsx)
Populate the currently empty `ActivityCard.jsx` component to render individual activity items with an icon, description, and relative timestamp.

#### [MODIFY] [activityCard.css](file:///d:/Projects/ClassPulse/frontend/src/styles/activityCard.css)
Populate the currently empty `activityCard.css` with styling consistent with `statCard.css` and `quickActionCard.css`.

#### [NEW] [UpcomingClassCard.jsx](file:///d:/Projects/ClassPulse/frontend/src/components/dashboards/UpcomingClassCard.jsx)
Create reusable card component to display subject name, class timing, and room number with appropriate icons.

#### [NEW] [upcomingClassCard.css](file:///d:/Projects/ClassPulse/frontend/src/styles/upcomingClassCard.css)
Add card styling for upcoming classes with subtle borders, hover states, and badge elements.

#### [NEW] [DashboardFooter.jsx](file:///d:/Projects/ClassPulse/frontend/src/components/dashboards/DashboardFooter.jsx)
Create minimal footer component displaying `© 2026 ClassPulse` and `Version 1.0`.

#### [NEW] [dashboardFooter.css](file:///d:/Projects/ClassPulse/frontend/src/styles/dashboardFooter.css)
Add subtle footer styling with top border and muted text.

### Pages & Layout

#### [MODIFY] [StudentDashboard.jsx](file:///d:/Projects/ClassPulse/frontend/src/pages/StudentDashboard.jsx)
- Integrate mock data for Recent Activity and Upcoming Classes.
- Render Recent Activity, Upcoming Classes, and DashboardFooter below Today's Overview.

#### [MODIFY] [dashboard.css](file:///d:/Projects/ClassPulse/frontend/src/styles/dashboard.css)
- Add grid/flex layout for Recent Activity and Upcoming Classes sections.
- Add responsive media queries (`@media (max-width: 900px)` and `@media (max-width: 640px)`) to handle mobile and tablet screens without horizontal overflow or desktop degradation.

#### [MODIFY] [dashboardNavbar.css](file:///d:/Projects/ClassPulse/frontend/src/styles/dashboardNavbar.css)
- Add media query for mobile viewport padding to prevent navbar clipping on small screens.

## Verification Plan

### Automated Tests
- Run `npm run build` in `frontend` to verify clean JSX syntax and build bundle compilation.
- Run `npm run lint` if available to ensure standard code formatting.

### Manual Verification
- Launch dev server (`npm run dev`) and inspect `/student` page in browser.
- Verify layout structure: Navbar -> Quick Actions -> Today's Overview -> Recent Activity -> Upcoming Classes -> Footer.
- Resize screen / test viewport sizes (Desktop 1200px+, Tablet 768px, Mobile 375px) to verify responsive stacking and lack of horizontal overflow.

# Semantic HTML5 & Accessible Component Architecture

A responsive, multi-page enterprise dashboard demonstrating semantic HTML5 structure and accessible interface components.

## Project structure

- `index.html` — dashboard overview, KPI cards, accessible activity table, feedback form, and report dialog.
- `pages/reports.html` — reports page with a semantic, responsive data table.
- `pages/settings.html` — notification settings with labelled checkbox controls.
- `components/navigation.js` — reusable accessible mobile navigation.
- `components/modal.js` — reusable native dialog interaction.
- `app.js` — page interactions and client-side demo form handling.
- `styles.css` — responsive layout, visible keyboard focus, and reduced-motion support.

## Run locally

1. Extract the ZIP file.
2. Open the extracted folder in Visual Studio Code.
3. Run `index.html` using the Live Server extension, or serve the folder with any local web server.
4. Navigate through Overview, Reports, and Settings.

## Accessibility features

- HTML5 landmarks: `header`, `nav`, `main`, `aside`, `section`, `article`, and `footer`.
- Skip-to-content link and descriptive page titles.
- Correct heading hierarchy and labelled navigation landmarks.
- `aria-current`, `aria-controls`, `aria-expanded`, and live status messages where appropriate.
- Native HTML dialog with an accessible name and description.
- Explicit form labels, required fields, fieldsets, legends, and browser validation.
- Data tables with captions and scoped row/column headers.
- Keyboard-visible focus indicators, responsive layouts, and reduced-motion preference support.

## Validation before submission

Validate each HTML page using the W3C Nu HTML Checker: https://validator.w3.org/nu/ . Also test keyboard navigation and mobile layout in a browser. This is a front-end demonstration; form submissions are not connected to a database or backend.

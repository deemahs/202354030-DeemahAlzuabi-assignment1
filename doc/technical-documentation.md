# Technical Documentation

## 1. Project Overview

This project is a responsive personal portfolio website developed using HTML, CSS, and JavaScript.

The website uses a single-page structure where users can scroll or use navigation links to move between different sections.

The main sections are:

* Home
* About Me
* Projects
* Contact

## 2. HTML Structure

HTML5 is used to define the structure and content of the website.

The website uses semantic HTML elements such as:

* `header`
* `nav`
* `main`
* `section`
* `article`
* `form`
* `footer`

Using separate sections makes the content easier to organize and navigate.

## 3. Home Section

The Home section is the landing area of the website.

It introduces me as Deemah Alzuabi, a Computer Science student.

It also includes buttons that allow visitors to navigate directly to the About Me and Projects sections.

## 4. About Me Section

The About Me section provides information about my academic background, interests, and technical skills.

The layout uses CSS Grid to organize the profile area and written information.

The skills are displayed as individual visual elements.

## 5. Projects Section

The Projects section contains project cards.

Each project includes:

* Project title
* Short description
* Visual placeholder
* Relevant technologies or skills

CSS Grid is used to display the projects in multiple columns on larger screens.

On smaller screens, the project cards change to a single-column layout.

## 6. Contact Section

The Contact section contains a form with:

* Name
* Email
* Message

A backend is not required for this assignment.

JavaScript uses `preventDefault()` to prevent a real form submission and provides feedback to the user instead.

## 7. CSS and Visual Design

CSS is used to control the visual appearance and layout of the portfolio.

The main color palette consists of:

* Pink
* Black
* White

Pink is used as the main accent color, while black and white provide contrast.

The website also uses:

* Borders
* Spacing
* Hover effects
* Transitions
* Responsive typography
* Cards
* Buttons

## 8. Responsive Design

The website was designed to work on desktop, tablet, and mobile screen sizes.

CSS Grid and Flexbox are used to create flexible layouts.

Media queries are used to modify the layout when the screen width becomes smaller.

For example, project cards are displayed next to each other on larger screens and vertically on smaller screens.

The About Me section also changes from a multi-column layout to a single-column layout on smaller devices.

The website was tested using browser resizing and browser Developer Tools.

## 9. JavaScript Functionality

### Dark/Light Mode

JavaScript listens for a click on the theme button.

When the button is clicked, JavaScript adds or removes a `dark-mode` class.

CSS uses this class to change the colors of the website.

### Contact Form Interaction

JavaScript listens for the contact form submission.

The default form submission is prevented because the assignment does not require a backend.

A confirmation message is displayed to the user.

### Automatic Current Year

JavaScript uses the `Date` object to retrieve the current year and display it automatically in the footer.

## 10. Testing

The website was tested on different screen sizes using browser Developer Tools.

The following layouts were checked:

* Desktop
* Tablet
* Mobile

The following features were also checked:

* Navigation links
* About Me button
* Projects button
* Smooth scrolling
* Dark/light mode
* Contact form
* Required form fields
* Responsive layout

## 11. Performance

The website is lightweight because it uses standard HTML, CSS, and JavaScript without large external frameworks.

The project separates HTML, CSS, and JavaScript into different files to keep the code organized and maintainable.

## 12. Browser Compatibility

The website uses standard web technologies and is intended to work on modern browsers such as:

* Google Chrome
* Microsoft Edge
* Mozilla Firefox
* Safari

## 13. Future Improvements

Possible future improvements include:

* Adding real project screenshots
* Adding additional projects
* Adding a real profile image
* Adding GitHub and LinkedIn links
* Adding a downloadable CV
* Connecting the contact form to a backend
* Saving the selected theme using localStorage


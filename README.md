# Aaron Withall | UI & Implementation Portfolio

A modern, responsive portfolio site designed to showcase professional experience in E-Recruitment UI delivery and .NET ecosystem integration.

## 🚀 Tech Stack
* **Frontend:** HTML5, CSS3 (using Native Nesting), JavaScript
* **Libraries:** [Bootstrap 5](https://getbootstrap.com/), [jQuery](https://jquery.com/)
* **Animations:** [AOS (Animate On Scroll)](https://michalsnik.github.io/aos/)
* **Icons:** [FontAwesome 6](https://fontawesome.com/)

## 🛠️ Key Technical Features

### 1. Native CSS Nesting
The stylesheet utilizes modern **Native CSS Nesting**, improving maintainability and readability by grouping component styles (like the animated Navbar and Project Cards) within their parent selectors without the need for a pre-processor like SASS.

### 2. Custom Mobile Navigation
* **Animated Toggler:** A custom-built CSS hamburger menu that transitions into an "X" state using transforms and the `:not(.collapsed)` pseudo-class logic.
* **UX Optimization:** Implemented jQuery logic to auto-close the mobile menu upon link selection, ensuring a seamless single-page navigation experience.

### 3. Case Study Architecture
Instead of simple external links, projects (such as **bp**, **LNER**, and **Mitie**) are presented via **Bootstrap Modals**. This allows for a "Case Study" narrative that highlights:
* **Product Augmentation:** Strategic use of `append()`, `prepend()`, and `clone()` to inject custom UI into vendor-locked product engines.
* **Accessibility:** Ensuring WCAG 2.1 compliance within enterprise frameworks.

### 4. Security & Inbox Management
* **Email Obfuscation:** To prevent bot-scraping, the contact email is reconstructed dynamically via jQuery using `data-` attributes.
* **Sub-addressing:** Utilizes email aliasing (`+portfolio`) to facilitate automated inbox filtering and source tracking.

## 📂 Project Highlights
The featured projects represent UI work delivered for global brands during my tenure at **PageUp** (formerly **eArcu**), specifically focusing on high-volume recruitment portals.

---
*Built by Aaron Withall - 2025*
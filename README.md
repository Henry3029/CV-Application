# CV Builder Application

A modern, interactive CV/Resume builder built with **React**, **JavaScript**, and custom **CSS**. This application allows users to dynamically input their personal details, educational history, and work experience, previewing their resume in real time.

---

##Overview

The CV Application is designed to demonstrate key React concepts including:
* **State Management:** Utilizing `useState` hooks to manage form data dynamically.
* **Component-Based Architecture:** Modular design dividing sections into reusable components (`GeneralInfo`, `Education`, `Experience`).
* **Conditional Rendering:** Toggling smoothly between input forms and styled HTML display views via an Edit/Submit system.
* **Props & Callbacks:** Passing state and update handlers across component boundaries.. 

---

## Built With

* **Frontend Framework:** [React.js](https://react.dev/)
* **Language:** JavaScript (ES6+)
* **Styling:** Custom Modular CSS3

---

## Project Structure

```text
src/
├── components/
│   ├── GeneralInfo.jsx   # Personal details section
│   ├── Education.jsx     # Academic experience section
│   ├── Experience.jsx    # Work and practical experience section
│   └── CVPreview.jsx     # Printable/formatted resume layout
├── styles/
│   ├── App.css           # Global app layout
│   ├── Section.css       # Form and card module styling
│   └── Preview.css       # Output display styling
├── App.jsx               # Root state and layout coordinator
├── main.jsx              # Application entry point
└── index.css             # Base CSS reset




w these steps to get a local copy up and running on your machine.

Prerequisites
Ensure you have Node.js (v16.0 or higher) installed on your system.

Installation
Clone the repository:

git clone [https://github.com/your-username/CV-Application.git](https://github.com/your-username/CV-Application.git)

Navigate to the project directory
cd CV-Application


Install dependencies:

Bash
npm install


Start the development server:

Bash
npm run dev


[x] General Information: Input name, email, and phone number.

[x] Educational Background: Add school, degree, and study duration.

[x] Practical Experience: Add company name, position, core responsibilities, and dates worked.

[x] Live Editing: Submit sections to view them as formatted text, or hit Edit to modify your entries instantly.


License
Distributed under the MIT License. See LICENSE for more information.


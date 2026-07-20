# Student Registration Form

A clean, interactive Student Registration Form web application built using HTML and Vanilla JavaScript. This project allows users to submit student details, validates input to ensure no empty fields are submitted, and dynamically adds records to a display table with options to remove individual entries.

## 🚀 Features

- **Input Validation:** Checks if required fields (Name, Age, Gender, Course, and Email) are filled before adding a record[cite: 2]. Shows an alert error if any field is missing[cite: 2].
- **Dynamic Table Display:** Automatically unhides and appends new student rows directly to the records table upon valid submission[cite: 2].
- **Form Reset:** Automatically clears the form fields after a student record is added[cite: 2].
- **Record Deletion:** Includes a dedicated "Delete" button on each table row to remove student entries dynamically[cite: 2].

## 🛠️ Built With

- **HTML5:** Page layout, form controls, radio buttons, dropdown selects, and dynamic display table.
- **JavaScript (Vanilla / ES6):** Event listeners (`onsubmit`, `onclick`), DOM manipulation, input trimming, and table row insertion[cite: 1, 2].

## 📂 Project Structure

```text
├── index.html   # Form inputs, radio buttons, select fields, and target table
└── emc.js       # Script file handling validation, dynamic rendering, and row deletion[cite: 1, 2]

# 🎓 React Beginner Student Dashboard

A simple React JS project created to understand the basics of React.

## 🚀 Concepts Used

This project demonstrates:

### 1. `useState`
Used in `Counter.jsx` to store and update the counter value.

### 2. `useContext`
Used in `UserCard.jsx` to access student information shared through `UserContext`.

### 3. `useEffect`
Used in `App.jsx` to run code when the dashboard loads.

### 4. Components
The application is divided into smaller reusable components:

- `Header`
- `Counter`
- `UserCard`

### 5. Context
`UserContext.jsx` demonstrates how information can be shared between components without passing props through every component.

## 📁 Project Structure

```text
src/
├── components/
│   ├── Header.jsx
│   ├── Counter.jsx
│   └── UserCard.jsx
│
├── context/
│   └── UserContext.jsx
│
├── App.jsx
├── App.css
└── main.jsx
```

## 🛠️ How to Run

Make sure Node.js is installed.

```bash
npm install
npm run dev
```

Then open the local URL shown in your terminal.

## 📚 Beginner Learning Path

Try changing the project yourself:

1. Change the student name.
2. Add a new student field.
3. Add an `Increase by 5` button.
4. Change the welcome message.
5. Add another component.
6. Create another piece of state.

Have fun learning React! 🚀
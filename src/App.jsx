import { useEffect, useState } from "react";
import Header from "./components/Header";
import Counter from "./components/Counter";
import UserCard from "./components/UserCard";
import { UserProvider } from "./context/UserContext";
import "./App.css";

function App() {
  const [message, setMessage] = useState("Welcome to your dashboard!");

  useEffect(() => {
    console.log("Student Dashboard loaded!");
    setMessage("You're ready to learn React!");
  }, []);

  return (
    <UserProvider>
      <div className="app">
        <Header />

        <main className="container">
          <section className="welcome">
            <h2>{message}</h2>
            <p>This project demonstrates basic React concepts.</p>
          </section>

          <div className="grid">
            <UserCard />
            <Counter />
          </div>
        </main>
      </div>
    </UserProvider>
  );
}

export default App;

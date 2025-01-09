import Nav from "./components/Nav";
import Tracker from "./components/Tracker";

import { useState } from "react";

function App() {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const currMonth = new Date().getMonth();
  const [activeMonth, setActiveMonth] = useState(months[currMonth]);

  const [days, setDays] = useState([]);
  const [habitTitles, setHabitTitles] = useState({
    habit1: "",
    habit2: "",
    habit3: "",
    numericalHabit: "",
  });

  const updateLocalStorage = () => {
    const monthData = {
      habitTitles: habitTitles,
      days: days,
    };
    localStorage.setItem(activeMonth, JSON.stringify(monthData));
  };

  return (
    <div className="min-h-screen w-full bg-neutral-100">
      <div className="flex">
        <Nav
          activeMonth={activeMonth}
          setActiveMonth={setActiveMonth}
          months={months}
          updateLocalStorage={updateLocalStorage}
        />
        <Tracker
          activeMonth={activeMonth}
          days={days}
          setDays={setDays}
          habitTitles={habitTitles}
          setHabitTitles={setHabitTitles}
        />
      </div>
    </div>
  );
}

export default App;

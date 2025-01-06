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
  return (
    <div className="min-h-screen w-full bg-neutral-100">
      <Nav
        activeMonth={activeMonth}
        setActiveMonth={setActiveMonth}
        months={months}
      />
      <Tracker activeMonth={activeMonth} />
    </div>
  );
}

export default App;

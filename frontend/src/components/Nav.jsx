import { useState } from "react";
import NavButton from "./NavButton";

const Nav = () => {
  const [activeMonth, setActiveMonth] = useState();

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

  return (
    <nav className="flex gap-4 justify-center items-center pt-4">
      {months.map((month) => (
        <NavButton
          key={month}
          month={month}
          isActive={activeMonth === month}
          onClick={() => setActiveMonth(month)}
        />
      ))}
    </nav>
  );
};

export default Nav;

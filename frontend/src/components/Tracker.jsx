import { useEffect, useState } from "react";
import checkAndInitialiseMonthsData from "../utils/dataPopulate";
import HabitButton from "./HabitButton";

const Tracker = ({ activeMonth }) => {
  const [days, setDays] = useState([]);
  const [habitTitles, setHabitTitles] = useState({
    habit1: "",
    habit2: "",
    habit3: "",
    numericalHabit: "",
  });

  useEffect(() => {
    checkAndInitialiseMonthsData();
  }, []);

  useEffect(() => {
    const retrieveMonthData = () => {
      const localStorageData = localStorage.getItem(activeMonth);
      const monthsData = JSON.parse(localStorageData);
      if (monthsData) {
        setDays(monthsData.days);
        setHabitTitles(monthsData.habitTitles);
      }
    };

    retrieveMonthData();
  }, [activeMonth]);

  const handleTitleInputChange = (e, property) => {
    const newTitleData = { ...habitTitles };
    newTitleData[property] = e.target.value;
    setHabitTitles(newTitleData);
  };

  const handleHabitInputChange = (e, dayIndex, property) => {
    const newDayData = [...days];
    newDayData[dayIndex][property] = e.target.value;
    setDays(newDayData);
  };

  const handleHabitToggleChange = (dayIndex, property) => {
    const newDayData = [...days];
    const habitState = newDayData[dayIndex][property];
    let newHabitState;

    if (habitState === "empty") {
      newHabitState = "completed";
    } else if (habitState === "completed") {
      newHabitState = "failed";
    } else {
      newHabitState = "empty";
    }
    newDayData[dayIndex][property] = newHabitState;
    setDays(newDayData);
  };

  const updateLocalStorage = () => {
    const monthData = {
      habitTitles: habitTitles,
      days: days,
    };
    localStorage.setItem(activeMonth, JSON.stringify(monthData));
  };

  return (
    <div className="p-5 mt-5 flex flex-col justify-center items-center">
      <table className="table-auto border-collapse border border-slate-400 bg-white">
        <thead>
          <tr>
            <th className="border border-slate-300 p-2 text-center">Day</th>
            <th className="border border-slate-300 p-2">Daily Achievement</th>
            <th className="border border-slate-300 p-2 text-slate-700">
              <input
                className="outline-none"
                type="text"
                value={habitTitles.habit1}
                onChange={(e) => handleTitleInputChange(e, "habit1")}
              />
            </th>
            <th className="border border-slate-300 p-2 text-slate-700">
              <input
                className="outline-none"
                type="text"
                value={habitTitles.habit2}
                onChange={(e) => handleTitleInputChange(e, "habit2")}
              />
            </th>
            <th className="border border-slate-300 p-2 text-slate-700">
              <input
                className="outline-none"
                type="text"
                value={habitTitles.habit3}
                onChange={(e) => handleTitleInputChange(e, "habit3")}
              />
            </th>
            <th className="border border-slate-300 p-2 text-slate-700">
              <input
                className="outline-none"
                type="text"
                value={habitTitles.numericalHabit}
                onChange={(e) => handleTitleInputChange(e, "numericalHabit")}
              />
            </th>
          </tr>
        </thead>
        <tbody>
          {days.map((day, index) => (
            <tr key={index}>
              <td className="border border-slate-300">{index + 1}</td>
              <td className="border border-slate-300">
                <input
                  className="outline-none"
                  type="text"
                  value={day.achievement}
                  onChange={(e) =>
                    handleHabitInputChange(e, index, "achievement")
                  }
                />
              </td>
              <td className="border border-slate-300">
                <HabitButton
                  habitValue={day.habit1}
                  handleHabitInputChange={() =>
                    handleHabitToggleChange(index, "habit1")
                  }
                />
              </td>
              <td className="border border-slate-300">
                <HabitButton
                  habitValue={day.habit2}
                  handleHabitInputChange={() =>
                    handleHabitToggleChange(index, "habit2")
                  }
                />
              </td>
              <td className="border border-slate-300">
                <HabitButton
                  habitValue={day.habit3}
                  handleHabitInputChange={() =>
                    handleHabitToggleChange(index, "habit3")
                  }
                />
              </td>
              <td className="border border-slate-300">
                <input
                  className="outline-none"
                  type="text"
                  value={day.numericalHabit}
                  onChange={(e) =>
                    handleHabitInputChange(e, index, "numericalHabit")
                  }
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <button
        className="bg-white w-40 py-1 mt-4 rounded border-slate-300"
        onClick={() => updateLocalStorage()}
      >
        Save
      </button>
    </div>
  );
};

export default Tracker;

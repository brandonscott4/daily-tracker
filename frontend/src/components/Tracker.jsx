import { useEffect, useState } from "react";
import checkAndInitialiseMonthsData from "../utils/dataPopulate";

const Tracker = ({ activeMonth }) => {
  const [days, setDays] = useState([]);
  const [habitTitles, setHabitTitles] = useState({
    habit1: "",
    habit2: "",
    habit3: "",
    habit4: "",
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

  const handleDayInputChange = (e, dayIndex, field) => {
    const newDayData = [...days];
    newDayData[dayIndex][field] = e.target.value;
    setDays(newDayData);

    updateLocalStorage();
  };

  const handleTitleInputChange = (e, property) => {
    const newTitleData = { ...habitTitles };
    newTitleData[property] = e.target.value;
    setHabitTitles(newTitleData);
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
      <table className="table-fixed border-collapse border border-slate-400 bg-white">
        <thead>
          <tr>
            <th className="border border-slate-300 p-2 text-center">Day</th>
            <th className="border border-slate-300 p-2">Daily Achievement</th>
            <th className="border border-slate-300 p-2 text-slate-700">
              <input
                type="text"
                value={habitTitles.habit1}
                onChange={(e) => handleTitleInputChange(e, "habit1")}
              />
            </th>
            <th className="border border-slate-300 p-2 text-slate-700">
              <input
                type="text"
                value={habitTitles.habit2}
                onChange={(e) => handleTitleInputChange(e, "habit2")}
              />
            </th>
            <th className="border border-slate-300 p-2 text-slate-700">
              <input
                type="text"
                value={habitTitles.habit3}
                onChange={(e) => handleTitleInputChange(e, "habit3")}
              />
            </th>
            <th className="border border-slate-300 p-2 text-slate-700">
              <input
                type="text"
                value={habitTitles.habit4}
                onChange={(e) => handleTitleInputChange(e, "habit4")}
              />
            </th>
          </tr>
        </thead>
        <tbody>
          {days.map((day, index) => (
            <tr key={index}>
              <td className="border border-slate-300 h-6">{index + 1}</td>
              <td className="border border-slate-300 h-6">
                <input
                  type="text"
                  value={day.achievement}
                  onChange={(e) =>
                    handleDayInputChange(e, index, "achievement")
                  }
                />
              </td>
              <td className="border border-slate-300 h-6">
                <input
                  type="text"
                  value={day.habit1}
                  onChange={(e) => handleDayInputChange(e, index, "habit1")}
                />
              </td>
              <td className="border border-slate-300 h-6">
                <input
                  type="text"
                  value={day.habit2}
                  onChange={(e) => handleDayInputChange(e, index, "habit2")}
                />
              </td>
              <td className="border border-slate-300 h-6">
                <input
                  type="text"
                  value={day.habit3}
                  onChange={(e) => handleDayInputChange(e, index, "habit3")}
                />
              </td>
              <td className="border border-slate-300 h-6 w-2">
                <input
                  type="text"
                  value={day.numericalHabit}
                  onChange={(e) =>
                    handleDayInputChange(e, index, "numericalHabit")
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

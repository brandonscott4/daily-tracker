import { useEffect } from "react";
import checkAndInitialiseMonthsData from "../utils/dataPopulate";
import HabitButton from "./HabitButton";

const Tracker = ({
  activeMonth,
  days,
  setDays,
  habitTitles,
  setHabitTitles,
}) => {
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
  }, [activeMonth, setDays, setHabitTitles]);

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

  return (
    <div className="flex flex-col justify-center items-center w-full ml-60 px-32 pt-8 pb-8">
      <div className="w-full rounded-lg border border-slate-300 overflow-hidden">
        <table className="table-auto bg-white w-full">
          <thead>
            <tr>
              <th className="border-b border-r border-slate-300 p-2 text-center w-12">
                Day
              </th>
              <th className="border-b border-x border-slate-300 p-2">
                Daily Achievement
              </th>
              <th className="border-b border-x border-slate-300 p-2 text-slate-700 w-12">
                <input
                  style={{ writingMode: "vertical-rl" }}
                  className="outline-none w-full"
                  type="text"
                  value={habitTitles.habit1}
                  onChange={(e) => handleTitleInputChange(e, "habit1")}
                />
              </th>
              <th className="border-b border-x border-slate-300 p-2 text-slate-700 w-12">
                <input
                  style={{ writingMode: "vertical-rl" }}
                  className="outline-none w-full"
                  type="text"
                  value={habitTitles.habit2}
                  onChange={(e) => handleTitleInputChange(e, "habit2")}
                />
              </th>
              <th className="border-b border-x border-slate-300 p-2 text-slate-700 w-12">
                <input
                  style={{ writingMode: "vertical-rl" }}
                  className="outline-none w-full"
                  type="text"
                  value={habitTitles.habit3}
                  onChange={(e) => handleTitleInputChange(e, "habit3")}
                />
              </th>
              <th className="border-b border-l border-slate-300 p-2 text-slate-700 w-20">
                <input
                  style={{ writingMode: "vertical-rl" }}
                  className="outline-none w-full"
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
                <td className="border-r border-t border-slate-300 text-center">
                  {index + 1}
                </td>
                <td className="border-x border-t border-slate-300">
                  <input
                    className="outline-none w-full px-2"
                    type="text"
                    value={day.achievement}
                    onChange={(e) =>
                      handleHabitInputChange(e, index, "achievement")
                    }
                  />
                </td>
                <td className="border-x border-t border-slate-300">
                  <HabitButton
                    habitValue={day.habit1}
                    handleHabitInputChange={() =>
                      handleHabitToggleChange(index, "habit1")
                    }
                  />
                </td>
                <td className="border-x border-t border-slate-300">
                  <HabitButton
                    habitValue={day.habit2}
                    handleHabitInputChange={() =>
                      handleHabitToggleChange(index, "habit2")
                    }
                  />
                </td>
                <td className="border-x border-t border-slate-300">
                  <HabitButton
                    habitValue={day.habit3}
                    handleHabitInputChange={() =>
                      handleHabitToggleChange(index, "habit3")
                    }
                  />
                </td>
                <td className="border-l border-t border-slate-300">
                  <input
                    className="outline-none w-full px-1 text-center"
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
      </div>
    </div>
  );
};

export default Tracker;

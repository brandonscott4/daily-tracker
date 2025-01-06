const day = {
  achievement: "",
  habit1: "empty",
  habit2: "empty",
  habit3: "empty",
  numericalHabit: "",
};

const titles = {
  habit1: "Enter Habit 1",
  habit2: "Enter Habit 2",
  habit3: "Enter Habit 3",
  numericalHabit: "Enter Habit 4",
};

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

const getDaysInMonth = (monthIndex, year = new Date().getFullYear()) => {
  return new Date(year, monthIndex + 1, 0).getDate();
};

const generateMonthData = (monthIndex, year) => {
  const daysInMonth = getDaysInMonth(monthIndex, year);
  const monthData = {
    habitTitles: titles,
    days: [],
  };

  for (let i = 0; i < daysInMonth; i++) {
    monthData.days.push({ ...day });
  }

  return monthData;
};

const initialiseMonthsData = () => {
  months.forEach((month, index) => {
    const monthData = generateMonthData(index, 2025);
    localStorage.setItem(month, JSON.stringify(monthData));
  });
};

const checkAndInitialiseMonthsData = () => {
  if (!localStorage.getItem("Jan")) {
    initialiseMonthsData();
  }
};

export default checkAndInitialiseMonthsData;

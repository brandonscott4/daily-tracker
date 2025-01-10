const HabitButton = ({ habitValue, handleHabitInputChange }) => {
  const getHabitStateIcon = () => {
    switch (habitValue) {
      case "completed":
        return "✔️";
      case "failed":
        return "❌";
      default:
        return "";
    }
  };

  const habitStateStyles = {
    completed: "hover:bg-green-50",
    failed: "hover:bg-red-50",
    empty: "hover:bg-gray-100",
  };

  return (
    <button
      className={`bg-white border-2 m-1 border-slate-300 w-10 h-10
      ${habitStateStyles[habitValue]}`}
      onClick={handleHabitInputChange}
    >
      {getHabitStateIcon()}
    </button>
  );
};

export default HabitButton;

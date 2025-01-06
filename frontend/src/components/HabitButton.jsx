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

  return (
    <button
      className="bg-white border-2 m-1 border-slate-300 w-10 h-10"
      onClick={handleHabitInputChange}
    >
      {getHabitStateIcon()}
    </button>
  );
};

export default HabitButton;

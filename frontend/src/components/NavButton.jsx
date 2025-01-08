const NavButton = ({ month, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-white px-6 py-1 rounded w-20 h-10 mb-10 border-2 ${
        isActive ? "border border-sky-200" : ""
      }`}
    >
      {month}
    </button>
  );
};

export default NavButton;

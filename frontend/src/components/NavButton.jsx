const NavButton = ({ month, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-white px-6 py-1 rounded ${
        isActive ? "border border-slate-400" : ""
      }`}
    >
      {month}
    </button>
  );
};

export default NavButton;

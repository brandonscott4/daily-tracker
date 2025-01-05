const NavButton = ({ month, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-white px-4 rounded ${
        isActive ? "border border-gray-600" : ""
      }`}
    >
      {month}
    </button>
  );
};

export default NavButton;

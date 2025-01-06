import NavButton from "./NavButton";

const Nav = ({ activeMonth, setActiveMonth, months }) => {
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

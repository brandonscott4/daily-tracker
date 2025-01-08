import NavButton from "./NavButton";

const Nav = ({ activeMonth, setActiveMonth, months }) => {
  return (
    <nav className="w-60 fixed top-0 left-0 bg-white h-screen border-r">
      <h1 className="text-3xl mb-10 text-center font-thin mt-5 underline decoration-neutral-100 underline-offset-8">
        Daily Tracker
      </h1>
      <div className="grid grid-cols-2 place-items-center">
        {months.map((month) => (
          <NavButton
            key={month}
            month={month}
            isActive={activeMonth === month}
            onClick={() => setActiveMonth(month)}
          />
        ))}
      </div>
    </nav>
  );
};

export default Nav;

import NavButton from "./NavButton";

const Nav = ({ activeMonth, setActiveMonth, months, updateLocalStorage }) => {
  return (
    <nav className="w-60 fixed top-0 left-0 bg-white h-[calc(100vh-4rem)] p-4 m-8 rounded-lg border border-slate-300 flex flex-col">
      <h1 className="text-3xl mb-10 text-center font-thin mt-12 underline decoration-neutral-100 underline-offset-8">
        Daily <br /> Tracker
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
      <button
        className="bg-white w-44 py-1 rounded border-2 border-green-200 mt-auto mx-auto mb-6 hover:shadow"
        onClick={() => updateLocalStorage()}
      >
        Save
      </button>
    </nav>
  );
};

export default Nav;

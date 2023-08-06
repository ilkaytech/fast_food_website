import Logo from "../ui/Logo";
const Header = () => {
  return (
    <div className="h-[5.5rem] bg-secondary ">
      <div className="container mx-auto text-white flex justify-between items-center h-full">
        <div>
          <Logo />
        </div>
        <nav>
          <ul className="flex">
            <li className="px-[">
              <a href="">Home</a>
            </li>
            <li>
              <a href="">Menu</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Book Table</a>
            </li>
          </ul>
        </nav>
        <div></div>
      </div>
    </div>
  );
};

export default Header;

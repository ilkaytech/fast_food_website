import Logo from "../ui/Logo";
const Header = () => {
  return (
    <div className="h-[5.5rem] bg-secondary ">
      <div className="container mx-auto text-white flex justify-between items-center h-full">
        <div>
          <Logo />
        </div>
        <nav>
          <ul className="flex gap-x-2">
            <li className="px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer">
              <a href="">Home</a>
            </li>
            <li className="px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer">
              <a href="">Menu</a>
            </li>
            <li className="px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer">
              <a href="">About</a>
            </li>
            <li className="px-[5px] py-[10px] uppercase hover:text-primary cursor-pointer">
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

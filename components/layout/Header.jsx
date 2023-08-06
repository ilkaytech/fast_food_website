import Logo from "../ui/Logo";
const Header = () => {
  return (
    <div className="h-[5.5rem] bg-secondary flex-justify-between">
      <div>
        <Logo />
      </div>
      <nav>
        <ul>
          <li>
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
  );
};

export default Header;

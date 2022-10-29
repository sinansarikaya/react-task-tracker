import HeaderStyle from "../../scss/header.module.scss";

function Header({ isOpen, setIsOpen }) {
  return (
    <header>
      <h1 className={HeaderStyle.title}>Task Tracker</h1>
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "Hide" : "Show"} Task Bar
      </button>
    </header>
  );
}

export default Header;

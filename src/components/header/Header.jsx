function Header({ isOpen, setIsOpen }) {
  return (
    <div>
      <h1>Task Tracker</h1>
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "Hide" : "Show"} Task Bar
      </button>
    </div>
  );
}

export default Header;

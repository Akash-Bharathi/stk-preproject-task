const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <nav className="navbar">
      <h1 >🎬 Movie Zone</h1>

      <button
        className="theme-btn"
        onClick={() => setDarkMode(!darkMode)}
      >
        {darkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
      </button>
    </nav>
  );
};

export default Navbar;
import { ThemeToggle } from "./theme-toggle";

const Navbar = () => {
  return (
    <header className="max-w-2xl mx-auto px-4 py-8 flex justify-between items-center">
      <span className="text-sm">adriancastillo.io</span>
      <ThemeToggle />
      <span className="text-sm">est. 1998</span>
    </header>
  );
};

export default Navbar;
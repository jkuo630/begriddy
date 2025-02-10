import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function Header() {
  return (
    <header className="fixed top-0 left-0 w-full shadow-md bg-gray-900/50 backdrop-blur-md z-50 mb-10 flex justify-center items-center h-16">
      <KeyboardArrowDownIcon className="absolute left-4 text-white" />
      <h1 className="text-2xl font-bold text-white">BeGriddy.</h1>
    </header>
  );
}

export default Header;

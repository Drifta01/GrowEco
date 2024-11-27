// components/Header.js
const Header = () => {
  return (
    <header className="bg-green-700 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold">GrowEco</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a className="hover:underline" href="#">Home</a></li>
            <li><a className="hover:underline" href="/products">Products</a></li>
            <li><a className="hover:underline" href="#">About</a></li>
            <li><a className="hover:underline" href="#">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
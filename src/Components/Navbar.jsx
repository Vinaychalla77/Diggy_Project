

export default function Navbar() {
  const nav = ["Home", "Deals", "Cart", "Contact", "Login"];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#2C5364]">
      <div className="flex items-center px-10 py-10 ">
        
        {/* Logo */}
        <img src="DLogo.jpeg" alt="Logo" className="w-10 cursor-pointer" style={{borderRadius: '50px', height:'60px', width:'60px'}}/>

        {/* Menu */}
        <ul className="flex items-center gap-45 text-xl pl-40">
          {nav.map((item, index) =>
            item === "Login" ? (
              <li key={index}>
                <button className="bg-black text-white px-5 py-2 rounded-md text-lg hover:bg-gray-800 transition">
                  Login
                </button>
              </li>
            ) : (
              <li
                key={index}
                className="text-white cursor-pointer hover:text-gray-300 transition"
              >
                {item}
              </li>
            )
          )}
        </ul>
      </div>
    </nav>
  );
}

import React from 'react'

function Navbar() {

  // const [active, setActive] = useState(false);
  // const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  // const [showCategoryDropdown, setShowCategoryDropdown] = useState(false); 

  // const [theme, setTheme] = useState("light-theme"); 
  // useEffect(()=> {
  //   document.body.classNameName = theme; 
  // },[theme])
  // function toggleTheme(){
  //   if(theme === "light-theme"){
  //     setTheme("dark-theme")
  //   }
  //   else{
  //     setTheme("light-theme")
  //   }
  // }
  return (
    <nav className="grid grid-cols-2  items-center bg-gray-800 p-6">
      <div className="col-start-1">
        <a href="#" className="brand pl-14 text-3xl font-bold">flash-fic</a>
      </div>
      <div className="col-start-2 flex justify-end pr-14">
        <a href="#" className="text-white px-4 py-2">Home</a>
        <a href="#" className="text-white   px-4 py-2">About</a>
        <a href="#" className="text-white px-4 py-2">Services</a>
        <a href="#" className="text-white px-4 py-2">Contact</a>
      </div>
    </nav>
  );
}

export default Navbar

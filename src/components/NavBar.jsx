import { NavLink } from "react-router";
import Logo from "./Logo";
import SocialLinks from "./SocialLinks";

const Navbar = () => {
  return (
    <nav className="w-screen flex justify-between items-center p-6 mt-6">
        <Logo />
        <div className="flex space-evenly gap-6 px-6 text-stone-400">
          <NavLink  
            to="/about"
            className="font-montserrat text-xl hover:text-stone-100 hover:underline hover:underline-offset-8 hover:decoration-violet-200"
            >About
          </NavLink>
          <SocialLinks className="place-items-center"/>
        </div>
    </nav>
  )
}

export default Navbar;
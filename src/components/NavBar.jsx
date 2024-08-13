import { NavLink } from "react-router-dom";
import links from "@/constants/links";
const NavBar = () => {
  return (
    <div className="flex items-center justify-evenly h-full py-6 border-t lg:border-t-0 lg:border-r border-[#9ca3af33] lg:flex-col lg:px-6 bg-black">
      {links.map(({ to, title, icon, activeIcon }) => (
        <NavLink key={to} to={to} title={title}>
          {({ isActive }) => (
            <div
              className={`text-2xl  ${isActive ? `${activeIcon} text-primary` : icon}`}
            ></div>
          )}
        </NavLink>
      ))}
    </div>
  );
  k;
};

export default NavBar;

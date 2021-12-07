import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faList } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className=" bg-gray-dark md:flex md:justify-center md:items-center">
      <div className=" text-salmon-primary uppercase text-4xl font-semibold bg-gray-dark h-16 flex items-center justify-center">
        FliXPacK
      </div>
      <div className=" bg-salmon-primary fixed bottom-0 z-20 text-white-primary w-full flex h-16 justify-evenly items-center md:bg-gray-dark md:absolute md:top-0 md:right-0 md:w-72">
        <div className=" cursor-pointer flex justify-center items-center mr-4">
          <NavLink
            className={({ isActive }) => isActive && "underline"}
            to="/my-list"
          >
            <FontAwesomeIcon className="text-xl" icon={faList} inverse />
            <span className="ml-3 text-md">My List</span>
          </NavLink>
        </div>
        <div className=" cursor-pointer flex justify-center items-center">
          <NavLink
            className={({ isActive }) => isActive && "underline"}
            to="/favourites"
          >
            <FontAwesomeIcon className="text-xl" icon={faHeart} inverse />
            <span className="ml-3 text-md">Favourites</span>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navigation;

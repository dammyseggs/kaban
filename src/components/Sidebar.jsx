import React, { useState, useMemo } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faHome,
  faSignOutAlt,
  faFolder,
  faUser,
  faArchive,
  faCog
} from "@fortawesome/free-solid-svg-icons";
import { NavLink, useLocation, Link, Outlet } from "react-router-dom";
import TopNav from "./Topnav";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const activeClass =
    "flex items-center gap-3 bg-[#7c81d5] dark:bg-orange-900/20 py-3 px-5 rounded-lg text-white dark:text-orange-400 font-medium";
  const normalClass =
    "flex items-center gap-3 text-[#637381] dark:text-gray-300 font-medium py-3 px-5";

 const links = useMemo(() => [
    {
      to: "/dashboard",
      name: "Home",
      icon: faHome,
      alticon: faHome,
    },
    {
      to: "/projects",
      name: "Projects",
      icon: faFolder,
      alticon: faFolder,
    },
    {
      to: "/myprofile",
      name: "My Profile",
      icon: faUser,
      alticon: faUser,
    },
    {
      to: "/archives",
      name: "Archives",
      icon: faArchive,
      alticon: faArchive,
    },
    {
      to: "/audit",
      name: "Audit Trail",
    //   icon: faClipboardList,
    //   alticon: faClipboardList,
      permission: "checker and admin",
    },
    {
      to: "/users",
      name: "Users",
    //   icon: faUsers,
    //   alticon: faUsers,
      permission: "checker and admin",
    },
    {
      to: "/integrations",
      name: "Integrations",
      icon: faCog,
      alticon: faCog,
    },
  ], []);

  const filteredLinks = useMemo(
    () =>
      links.filter((link) => !link.permission || link.permission.includes()),
    [links]
  );

  const isActiveLink = (linkTo) => {
    return (
      location.pathname === linkTo || location.pathname.startsWith(`${linkTo}/`)
    );
  };

  return (
    <div className="flex bg-gray-50 dark:bg-gray-900 min-h-screen w-full">
      <div
        className={`flex flex-col ${
          isCollapsed ? "w-[120px]" : "w-70"
        } min-h-screen p-6 bg-white dark:bg-gray-800 transition-width duration-300`}
      >
        <div className="flex items-center justify-between mb-3 w">
          <div className="flex justify-center w-full mb-4">
            {!isCollapsed && (
              <img src="/flowboard.png" alt="Logo" className="h-22 w-auto" />
            )}
          </div>
          <button
            onClick={toggleSidebar}
            className="text-gray-800 dark:text-gray-200 focus:outline-none"
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>
        <ul className="space-y-2">
          {filteredLinks.map((link) => {
            const isActive = isActiveLink(link.to);
            return (
              <li key={link.name}>
                <NavLink
                  to={link.to}
                  className={isActive ? activeClass : normalClass}
                  aria-current={isActive ? "page" : undefined}
                >
                  <FontAwesomeIcon
                    icon={isActive ? link.alticon : link.icon}
                    className={`${isCollapsed ? "h-6 w-6" : "h-5 w-5"} ${
                      isActive
                        ? "text-orange dark:text-orange-400"
                        : "text-[#637381] dark:text-gray-300"
                    } transition-colors duration-200`}
                  />
                  {!isCollapsed && (
                    <span
                      className={`truncate ${
                        isActive
                          ? "text-orangee dark:text-orange-400"
                          : "text-[#637381] dark:text-gray-300"
                      }`}
                    >
                      {link.name}
                    </span>
                  )}
                </NavLink>
              </li>
            );
          })}
        </ul>

        {/* Logout section */}
        <div className="mt-auto pt-10 px-5">
          <button className="flex items-center justify-center py-3 rounded-lg w-full text-gray-800 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200">
            <FontAwesomeIcon
              icon={faSignOutAlt}
              className={`mr-3 ${isCollapsed ? "h-8 w-8" : "h-5 w-5"}`}
            />
            <Link className="font-medium">
              {!isCollapsed && <span>Logout</span>}
            </Link>
          </button>
        </div>
      </div>

      {/* Main content area */}
      <div className="flex flex-col flex-grow pl-4 pr-2 dark:bg-gray-900">
        <TopNav />
        <div className="py-5 px-2 w-full flex-grow overflow-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

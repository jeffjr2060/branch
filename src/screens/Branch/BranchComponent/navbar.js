import { Navigation } from "react-minimal-side-navigation";
import { useNavigate, useLocation } from "react-router-dom";
import Icon from "awesome-react-icons";
import React, { useState } from "react";

import "react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css";

const NavSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  

  return (
    <React.Fragment>
      {/* Sidebar Overlay */}
      
      <div 
        onClick={() => setIsSidebarOpen(false)}
        className={`fixed inset-0 z-20 block transition-opacity bg-black opacity-50 lg:hidden ${
          isSidebarOpen ? "block" : "hidden"
        }`}
      />

      <div>
        <button
          className="btn-menu"
          onClick={() => setIsSidebarOpen(true)}
          type="button"
        >
          <Icon name="burger" className="w-6 h-6" />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-30 w-64 overflow-y-auto transition duration-300 ease-out transform translate-x-0 bg-white border-r-2 lg:translate-x-0 lg:static lg:inset-0 ${
          isSidebarOpen ? "ease-out translate-x-0" : "ease-in -translate-x-full"
        }`}
      >
       

        {/* https://github.com/abhijithvijayan/react-minimal-side-navigation */}
        <Navigation
          activeItemId={location.pathname}
          onSelect={({ itemId }) => {
            navigate.push(itemId);
          }}
          items={[
            {
              title: "Home",
              itemId: "/home",
             
            },
            {
              title: "REPORT CLAIM",
              itemId: "/about",
             
              subNav: [
                {
                  title: "CLAIM FORM",
                  itemId: "/about/projects",
                 
                },
                {
                  title: "CLAIM NOTIFICATION",
                  itemId: "/about/members",
                }
              ]
            },
            {
              title: "REGISTER POLICY",
              itemId: "/another",
              
            }, 
            {
              title: "RENEW POLICY",
              itemId: "/another",
              
            }
          ]}
        />

      </div>
    </React.Fragment>
  );
};
export default NavSidebar
import React, { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import PageTitle from "../components/Common/PageTitle";
import DashboardWidgets from "../components/Dashboard/DashboardWidgets";
import InvoiceIcon from "../components/Icons/InvoiceIcon";
import Button from "../components/Button/Button";
import QuickEditCompany from "../components/Dashboard/QuickEditCompany";
import QuickAddClient from "../components/Dashboard/QuickAddClient";
import ClientTable from "../components/Clients/ClientTable";
import InvoiceTable from "../components/Invoice/InvoiceTable";
import {logo} from "../LandingPage/Landingassets"

function DashboardScreen() {
  const navigate = useNavigate();

  const handleLogo=(e)=>{
      e.preventDefault()
      window.location.href="/"
  }

  const capitalizeUsername = (username) => {
    if (!username) return ""; // Handle case where username is empty or undefined
    return username.charAt(0).toUpperCase() + username.slice(1);
  };

 
  const username = localStorage.getItem('username'); // Assuming username is stored in localStorage
  console.log(username)
  const handleLogout = () => {
    // Clear user session (localStorage or any other auth token)
    
    localStorage.removeItem('isAuthenticated');
    
    localStorage.removeItem('username');
    navigate('/login'); // Redirect to login after logout
  };

  const goToNewInvoice = useCallback(() => {
    navigate("/invoices/new");
  }, [navigate]);

  return (
    <div>
    
      <div className="p-4">
      <nav className="bg-white-800 text-black p-4 flex justify-between items-center">
      {/* Logo */}
      <div className="flex items-center">
        <img
          src={logo}
          alt="logo"
          className="w-full h-[90px] cursor-pointer"
          onClick={handleLogo}
        />
      </div>

      {/* User Info and Logout */}
      <div className="flex items-center space-x-4">
        {/* Username */}
        <span className="text-black font-semibold text-lg"> Welcome, {username ? capitalizeUsername(username) : "Guest"}</span>

        {/* Logout Button */}
        <button
          className="bg-blue-500  text-white font-bold py-2 px-4 rounded"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </nav>
      </div>
      <div className="flex flex-wrap">
        <div className="w-full lg:w-4/6 pl-4 pr-4 sm:pl-4 sm:pr-0 mb-4 sm:mb-1">
          <DashboardWidgets />
          <div className="mt-1">
            <InvoiceTable />
          </div>
          <div className="mt-4">
            <ClientTable />
          </div>
        </div>
        <div className="w-full lg:w-2/6 pl-4 pr-4 sm:pl-4 sm:pr-2">
          <div>
            <Button onClick={goToNewInvoice} block={1}>
              <InvoiceIcon />
              <span className="inline-block ml-2"> Add New Invoice </span>
            </Button>
          </div>

          <QuickEditCompany isShowDetail={false} />
          <div className="mt-4">
            <QuickAddClient />
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardScreen;

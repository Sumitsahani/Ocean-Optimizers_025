// src/App.jsx
import React from 'react';
import { Routes, Route,BrowserRouter,Navigate } from 'react-router-dom';
import LandingMain from './LandingPage/LandingMain';
import { ToastContainer } from "react-toastify";

// import InvoiceMain from './InvoiceMain';
import { Login } from './Authentication/Login';
import { Register } from './Authentication/register';
import { useEffect } from "react";
import DashboardScreen from "./pages/DashboardScreen";
import ClientListScreen from "./pages/clients/ClientListScreen";
import ProductListScreen from "./pages/products/ProductListScreen";
import InvoiceListScreen from "./pages/invoices/InvoiceListScreen";
import InvoiceDetailScreen from "./pages/invoices/InvoiceDetailScreen";
import AboutScreen from "./pages/about/AboutScreen";
import Container from "./components/Container/Container";
import useInitApp from "./hook/useInitApp";
import ClientDeleteConfirm from "./components/Clients/ClientDeleteConfirm";
import ClientEditModal from "./components/Clients/ClientEditModal";
import ProductDeleteConfirm from "./components/Product/ProductDeleteConfirm";
import ProductEditModal from "./components/Product/ProductEditModal";
import ClientChooseModal from "./components/Clients/ClientChooseModal";
import ProductChoosenModal from "./components/Product/ProductChoosenModal";
import InvoiceSettingModal from "./components/Invoice/InvoiceSettingModal";
import InvoiceConfirmModal from "./components/Invoice/InvoiceConfirmModal";
import InvoiceDeleteConfirm from "./components/Invoice/InvoiceDeleteConfirm";
import PageLoading from "./components/Common/PageLoading";
import TeamPage from './LandingPage/Landingcomponents/ContactUs';


const App = () => {

  const { initialSetData } = useInitApp();

  useEffect(() => {
    initialSetData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
   <BrowserRouter>
   <Routes>
   {/* <Container> */}
    {/* <Route path="/invoice" element={<InvoiceMain />} /> Invoice Page */}
    <Route path="/dashboard" element={<DashboardScreen />} />

    <Route path="clients" element={<ClientListScreen />}></Route>

    <Route path="products" element={<ProductListScreen />}></Route>

    <Route path="invoices">
      <Route path="" element={<InvoiceListScreen />} exact />
      <Route path=":id" element={<InvoiceDetailScreen />} />
    </Route>

    <Route path="about" element={<AboutScreen />} />

    <Route path="*" element={<Navigate to="/" replace />} />
      {/* </Container> */}
       
      <Route path="/" element={<LandingMain />} /> {/* Landing Page */}
      
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/contact" element={<TeamPage />} />

    </Routes>
    <ToastContainer />
      <ClientDeleteConfirm />
      <ClientEditModal />
      <ClientChooseModal />
      <ProductDeleteConfirm />
      <ProductEditModal />
      <ProductChoosenModal />
      <InvoiceSettingModal />
      <InvoiceConfirmModal />
      <InvoiceDeleteConfirm />
      <PageLoading />
   </BrowserRouter>
  );
};

export default App;

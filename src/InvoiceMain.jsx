import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './InvoiceMain.css';
import Container from 'react-bootstrap/Container';
import InvoiceForm from './components/InvoiceForm';

const InvoiceMain = () => {
  return (
    <div className="App d-flex flex-column align-items-center justify-content-center w-100">
      <Container>
        <InvoiceForm />
      </Container>
    </div>
  );
}


export default InvoiceMain;

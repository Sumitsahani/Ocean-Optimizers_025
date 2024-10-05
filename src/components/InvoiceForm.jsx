import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import InvoiceItem from './invoiceItem';
import InvoiceModal from './invoiceModal';
import InputGroup from 'react-bootstrap/InputGroup';

const InvoiceForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currency, setCurrency] = useState('$');
  const [currentDate] = useState(new Date().toLocaleDateString());
  const [invoiceNumber, setInvoiceNumber] = useState(1);
  const [dateOfIssue, setDateOfIssue] = useState('');
  const [billTo, setBillTo] = useState('');
  const [billToEmail, setBillToEmail] = useState('');
  const [billToAddress, setBillToAddress] = useState('');
  const [billFrom, setBillFrom] = useState('');
  const [billFromEmail, setBillFromEmail] = useState('');
  const [billFromAddress, setBillFromAddress] = useState('');
  const [notes, setNotes] = useState('');
  const [total, setTotal] = useState('0.00');
  const [subTotal, setSubTotal] = useState('0.00');
  const [taxRate, setTaxRate] = useState('');
  const [taxAmmount, setTaxAmmount] = useState('0.00');
  const [discountRate, setDiscountRate] = useState('');
  const [discountAmmount, setDiscountAmmount] = useState('0.00');
  const [items, setItems] = useState([
    {
      id: 0,
      name: '',
      description: '',
      price: '1.00',
      quantity: 1,
    },
  ]);

  useEffect(() => {
    handleCalculateTotal();
  }, [items, taxRate, discountRate]);

  const handleRowDel = (item) => {
    const newItems = items.filter((i) => i.id !== item.id);
    setItems(newItems);
  };

  const handleAddEvent = () => {
    const id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
    const newItem = {
      id,
      name: '',
      price: '1.00',
      description: '',
      quantity: 1,
    };
    setItems([...items, newItem]);
  };

  const handleCalculateTotal = () => {
    let subTotalCalc = 0;

    items.forEach((item) => {
      subTotalCalc = parseFloat(subTotalCalc + parseFloat(item.price) * item.quantity).toFixed(2);
    });

    setSubTotal(subTotalCalc);
    const taxAmountCalc = parseFloat(subTotalCalc * (taxRate / 100)).toFixed(2);
    const discountAmountCalc = parseFloat(subTotalCalc * (discountRate / 100)).toFixed(2);
    const totalCalc = (subTotalCalc - discountAmountCalc + parseFloat(taxAmountCalc)).toFixed(2);

    setTaxAmmount(taxAmountCalc);
    setDiscountAmmount(discountAmountCalc);
    setTotal(totalCalc);
  };

  const onItemizedItemEdit = (evt) => {
    const updatedItems = items.map((item) => {
      if (item.id === evt.target.id) {
        return { ...item, [evt.target.name]: evt.target.value };
      }
      return item;
    });
    setItems(updatedItems);
    handleCalculateTotal();
  };

  const editField = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'invoiceNumber':
        setInvoiceNumber(value);
        break;
      case 'dateOfIssue':
        setDateOfIssue(value);
        break;
      case 'billTo':
        setBillTo(value);
        break;
      case 'billToEmail':
        setBillToEmail(value);
        break;
      case 'billToAddress':
        setBillToAddress(value);
        break;
      case 'billFrom':
        setBillFrom(value);
        break;
      case 'billFromEmail':
        setBillFromEmail(value);
        break;
      case 'billFromAddress':
        setBillFromAddress(value);
        break;
      case 'notes':
        setNotes(value);
        break;
      case 'taxRate':
        setTaxRate(value);
        break;
      case 'discountRate':
        setDiscountRate(value);
        break;
      default:
        break;
    }
    handleCalculateTotal();
  };

  const onCurrencyChange = (event) => {
    setCurrency(event.target.value);
  };

  const openModal = (event) => {
    event.preventDefault();
    handleCalculateTotal();
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  return (
    <Form onSubmit={openModal}>
      <Row>
        <Col md={8} lg={9}>
          <Card className="p-4 p-xl-5 my-3 my-xl-4">
            <div className="d-flex flex-row align-items-start justify-content-between mb-3">
              <div className="d-flex flex-column">
                <div className="d-flex flex-column">
                  <div className="mb-2">
                    <span className="fw-bold">Current Date:&nbsp;</span>
                    <span className="current-date">{currentDate}</span>
                  </div>
                </div>
                <div className="d-flex flex-row align-items-center">
                  <span className="fw-bold d-block me-2">Due Date:</span>
                  <Form.Control
                    type="date"
                    value={dateOfIssue}
                    name="dateOfIssue"
                    onChange={editField}
                    style={{ maxWidth: '150px' }}
                    required
                  />
                </div>
              </div>
              <div className="d-flex flex-row align-items-center">
                <span className="fw-bold me-2">Invoice Number:&nbsp;</span>
                <Form.Control
                  type="number"
                  value={invoiceNumber}
                  name="invoiceNumber"
                  onChange={editField}
                  min="1"
                  style={{ maxWidth: '70px' }}
                  required
                />
              </div>
            </div>
            <hr className="my-4" />
            <Row className="mb-5">
              <Col>
                <Form.Label className="fw-bold">Bill to:</Form.Label>
                <Form.Control
                  placeholder="Who is this invoice to?"
                  value={billTo}
                  name="billTo"
                  className="my-2"
                  onChange={editField}
                  required
                />
                <Form.Control
                  placeholder="Email address"
                  value={billToEmail}
                  name="billToEmail"
                  className="my-2"
                  onChange={editField}
                  required
                />
                <Form.Control
                  placeholder="Billing address"
                  value={billToAddress}
                  name="billToAddress"
                  className="my-2"
                  onChange={editField}
                  required
                />
              </Col>
              <Col>
                <Form.Label className="fw-bold">Bill from:</Form.Label>
                <Form.Control
                  placeholder="Who is this invoice from?"
                  value={billFrom}
                  name="billFrom"
                  className="my-2"
                  onChange={editField}
                  required
                />
                <Form.Control
                  placeholder="Email address"
                  value={billFromEmail}
                  name="billFromEmail"
                  className="my-2"
                  onChange={editField}
                  required
                />
                <Form.Control
                  placeholder="Billing address"
                  value={billFromAddress}
                  name="billFromAddress"
                  className="my-2"
                  onChange={editField}
                  required
                />
              </Col>
            </Row>
            <InvoiceItem
              onItemizedItemEdit={onItemizedItemEdit}
              onRowAdd={handleAddEvent}
              onRowDel={handleRowDel}
              currency={currency}
              items={items}
            />
            <Row className="mt-4 justify-content-end">
              <Col lg={6}>
                <div className="d-flex flex-row align-items-start justify-content-between">
                  <span className="fw-bold">Subtotal:</span>
                  <span>{currency}{subTotal}</span>
                </div>
                <div className="d-flex flex-row align-items-start justify-content-between mt-2">
                  <span className="fw-bold">Discount:</span>
                  <span>
                    <span className="small">({discountRate || 0}%)</span>
                    {currency}{discountAmmount || 0}
                  </span>
                </div>
                <div className="d-flex flex-row align-items-start justify-content-between mt-2">
                  <span className="fw-bold">Tax:</span>
                  <span>
                    <span className="small">({taxRate || 0}%)</span>
                    {currency}{taxAmmount || 0}
                  </span>
                </div>
                <hr />
                <div className="d-flex flex-row align-items-start justify-content-between">
                  <span className="fw-bold">Total:</span>
                  <span className="fw-bold">{currency}{total}</span>
                </div>
              </Col>
            </Row>
            <hr className="my-4" />
            <Form.Group className="mb-3">
              <Form.Label className="fw-bold">Notes:</Form.Label>
              <Form.Control
                as="textarea"
                value={notes}
                name="notes"
                className="my-2"
                rows={1}
                placeholder="Thanks for your business!"
                onChange={editField}
              />
            </Form.Group>
          </Card>
        </Col>
        <Col md={4} lg={3}>
          <Card className="p-4 my-3 my-xl-4">
            <div className="d-flex flex-column justify-content-end">
              <Button
                variant="primary"
                type="submit"
                className="d-block w-100"
              >
                Review Invoice
              </Button>
              <InvoiceModal
                showModal={isOpen}
                closeModal={closeModal}
                info={{
                  currency,
                  currentDate,
                  dateOfIssue,
                  invoiceNumber,
                  billTo,
                  billToEmail,
                  billToAddress,
                  billFrom,
                  billFromEmail,
                  billFromAddress,
                  notes,
                  items,
                  subTotal,
                  taxAmmount,
                  discountAmmount,
                  total,
                }}
              />
              <Form.Group className="mt-3">
                <Form.Label className="fw-bold">Currency:</Form.Label>
                <Form.Select
                  className="btn btn-light my-1"
                  aria-label="Change Currency"
                  value={currency}
                  onChange={onCurrencyChange}
                >
                  <option value="$">USD ( $ )</option>
                  <option value="£">GBP ( £ )</option>
                  <option value="€">EUR ( € )</option>
                  <option value="₹">INR ( ₹ )</option>
                </Form.Select>
              </Form.Group>
            </div>
          </Card>
        </Col>
      </Row>
    </Form>
  );
};

export default InvoiceForm;

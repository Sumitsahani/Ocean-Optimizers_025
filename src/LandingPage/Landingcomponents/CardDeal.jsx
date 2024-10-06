import { card } from "../Landingassets";
import styles, { layout } from "../style";
import Button from "./Button";

const InvoiceExpenseTracker = () => (
  <section className={layout.section} style={{ backgroundColor: 'white', color: 'black' }}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2} style={{ color: '#0066FF' }}>
        Simplify Invoicing & Expense Tracking
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`} style={{ color: 'black' }}>
        Manage invoices and track expenses effortlessly with our user-friendly platform.
      </p>
      <Button styles={`mt-10`} text="Get Started" />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="Invoice and Expense Tracker" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default InvoiceExpenseTracker;

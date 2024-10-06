import { bill } from "../Landingassets";
import styles, { layout } from "../style";

const Billing = () => (
  <section
    id="product"
    className={layout.sectionReverse}
    style={{ backgroundColor: 'white', color: 'black' }}
  >
    <div className={layout.sectionImgReverse}>
      <img
        src={bill}
        alt="billing"
        className="w-[100%] h-[100%] relative z-[5]"
      />

      {/* gradient start */}
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      {/* gradient end */}
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2} style={{ color: 'black' }}>
        Effortlessly manage your invoices & expenses
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`} style={{ color: 'black' }}>
        Simplify your business finances with our comprehensive tracking tools. From generating invoices to keeping track of expenses, we make it easy to manage your financial records with precision and ease.
      </p>
      <div className="mt-5">
        <button className="bg-[#0066FF] text-white font-poppins font-medium py-2 px-4 rounded">
          Get Started
        </button>
        <button className="bg-[#0066FF] text-white font-poppins font-medium py-2 px-4 rounded ml-4">
          Learn More
        </button>
      </div>
    </div>
  </section>
);

export default Billing;

import styles from "../style";
import Button from "./Button";

const CTA = () => (
  <section 
    className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col bg-white rounded-[20px] box-shadow transition duration-200 hover:bg-[#E6F4F2]`} // Added hover effect to section
  >
    <div className="flex-1 flex flex-col">
      <h2 className={`${styles.heading2} text-[#0066FF]`}>Let’s try our service now!</h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 text-black`}>
        Everything you need to accept card payments and grow your business anywhere on the planet.
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button styles={`bg-white text-black border-2 border-[#0066FF]`} />
    </div>
  </section>
);

export default CTA;

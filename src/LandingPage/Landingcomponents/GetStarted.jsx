import { arrowUp } from "../Landingassets";
import styles from "../style";

const GetStarted = () => (
  <div className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-white p-[2px] cursor-pointer`}>
    <div className={`${styles.flexCenter} flex-col bg-white w-[100%] h-[100%] rounded-full border border-[#0066FF]`}> {/* Changed background to white and added border */}
      <div className={`${styles.flexStart} flex-row`}>
        <p className="font-poppins font-medium text-[18px] leading-[23.4px] text-black"> {/* Changed text color to black */}
          <span className="text-[#0066FF]">Get</span> {/* Changed span color to 0066FF */}
        </p>
        <img src={arrowUp} alt="arrow-up" className="w-[23px] h-[23px] object-contain ml-2" /> {/* Added margin to space the arrow */}
      </div>

      <p className="font-poppins font-medium text-[18px] leading-[23.4px] mt-1 text-black"> {/* Changed text color to black */}
        <span className="text-[#0066FF]">Started</span> {/* Changed span color to 0066FF */}
      </p>
    </div>
  </div>
);

export default GetStarted;

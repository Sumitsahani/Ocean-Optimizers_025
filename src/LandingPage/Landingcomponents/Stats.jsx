import { stats } from "../Landingconstants";
import styles from "../style";

const Stats = () => (
  <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6 bg-white`}> {/* Set background to white */}
    {stats.map((stat) => (
      <div key={stat.id} className={`flex-1 flex justify-start items-center flex-row m-3`}>
        <h4 className="font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-[#0066FF]"> {/* Changed text color to #0066FF */}
          {stat.value}
        </h4>
        <p className="font-poppins font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-black uppercase ml-3"> {/* Changed text color to black */}
          {stat.title}
        </p>
      </div>
    ))}
  </section>
);

export default Stats;

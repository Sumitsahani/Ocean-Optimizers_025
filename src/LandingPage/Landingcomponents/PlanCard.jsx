import React from "react";

const PlanCard = ({ title, price, features }) => {
    const orderPlace = () => {
        console.log("Order placed");
    };

    const loadScript = (src) => {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = src;
            script.onload = () => {
                resolve(true);
            };
            script.onerror = () => {
                resolve(false);
            };
            document.body.appendChild(script);
        });
    };

    const pay = async (amount) => {
        const res = await loadScript(
            "https://checkout.razorpay.com/v1/checkout.js"
        );

        if (!res) {
            alert("Razorpay SDK failed to load. Are you online?");
            return;
        }

        const options = {
            key: "rzp_test_AWrlyaXOO9ncih", // Replace with your Razorpay API key
            amount: parseInt(amount * 100), // Convert to paisa
            currency: "INR",
            name: "TrackMyBill", // Your project or business name
            description: "Test Transaction",
            image: "", // Your logo URL
            handler: function (response) {
                orderPlace();
            },
            notes: {
                address: "India",
            },
            theme: {
                color: "#158993",
            },
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    };

    const getAmount = (price) => {
        // Extract the numerical amount from the price string, e.g. ₹750/week -> 750
        return parseInt(price.replace(/[^0-9]/g, ''));
    };

    return (
        <div className="flex flex-col justify-between px-10 py-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 bg-white text-black feedback-card h-[400px] hover:bg-[#E6F4F2] hover:text-black transition duration-200"> {/* Changed hover bg to #E6F4F2 */}
            <div className="flex-grow">
                <h3 className="font-poppins font-bold text-[24px] leading-[36px] mb-4">
                    {title}
                </h3>
                <p className="font-poppins font-semibold text-[22px] leading-[34px] my-4">
                    {price}
                </p>
                <ul className="list-disc pl-5 mb-4">
                    {features.map((feature, index) => (
                        <li key={index} className="font-poppins font-normal text-[18px] leading-[28px]">
                            {feature}
                        </li>
                    ))}
                </ul>
            </div>
            <button
                onClick={() => {
                    const amount = getAmount(price);
                    pay(amount);
                }}
                type="button"
                className="py-4 px-6 font-poppins font-medium text-[18px] text-[#0066FF] bg-white border border-[#0066FF] rounded-[10px] outline-none hover:bg-[#E6F4F2] hover:text-black transition duration-200"> {/* Updated hover bg and text for button */}
                Subscribe
            </button>
        </div>
    );
};

export default PlanCard;

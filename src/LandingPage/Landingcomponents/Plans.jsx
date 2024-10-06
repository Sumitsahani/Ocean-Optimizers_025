import React from "react";
import PlanCard from "./PlanCard"; // Import the PlanCard component

const plans = [
    {
        id: 1,
        title: "Weekly Plan",
        price: "₹750/week", // Assuming $10 USD = ₹750 INR
        features: [
            "Access to all features",
            "Weekly updates",
            "24/7 support",
        ],
    },
    {
        id: 2,
        title: "Monthly Plan",
        price: "₹2250/month", // Assuming $30 USD = ₹2250 INR
        features: [
            "Access to all features",
            "Monthly updates",
            "24/7 support",
            "1 free consultation",
        ],
    },
    {
        id: 3,
        title: "Yearly Plan",
        price: "₹22,500/year", // Assuming $300 USD = ₹22,500 INR
        features: [
            "Access to all features",
            "Yearly updates",
            "24/7 support",
            "5 free consultations",
            "Discounted rate",
        ],
    },
];

const Plans = () => {
    return (
        <section className="flex flex-col items-center mx-auto feedback-container relative z-[1] bg-white"> {/* Set background to white */}
            {/* Attractive Heading */}
            <h2 className="font-poppins font-bold text-3xl text-center text-[#0066FF] mb-6"> {/* Changed text color to #0066FF */}
                Choose Your Subscription Plan
            </h2>
            <p className="font-poppins font-normal text-lg text-center text-black mb-10"> {/* Changed text color to black */}
                Select a plan that fits your needs and start enjoying our services!
            </p>

            {/* Plans */}
            <div className="flex flex-col md:flex-row justify-center items-center">
                {plans.map((plan) => (
                    <PlanCard key={plan.id} {...plan} />
                ))}
            </div>
        </section>
    );
};

export default Plans;

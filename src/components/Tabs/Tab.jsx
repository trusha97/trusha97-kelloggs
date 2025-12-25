import React, { useState } from "react";
import bannerImg from "../../assets/images/kelloggslogo.jpg";
import avatarImg from "../../assets/images/logo.png";
import { logo, plana, planb, planc, pland, plane, planf, plang, planh, plani, vipa } from "../../../utils/images";
import "./Tab.css";

const Tab = () => {

    const [activeTab, setActiveTab] = useState("day");
    
    const dayPlans = [
        {
            id: "A",
            title: "Plan - A",
            img: plana,
            price: "₹ 520",
            daily: "₹ 130",
            days: "150",
            total: "₹ 19500",
            buyPrice: "₹ 520",
            comingSoon: false,
        },
        {
            id: "B",
            title: "Plan - B",
            img: planb,
            price: "₹ 1980",
            daily: "₹ 521",
            days: "150",
            total: "₹ 78150",
            buyPrice: "₹ 1980",
            comingSoon: false,
        },
        {
            id: "C",
            title: "Plan - C",
            img: planc,
            price: "₹ 4900",
            daily: "₹ 1400",
            days: "140",
            total: "₹ 196000",
            buyPrice: "₹ 4900",
            comingSoon: false,
        },
        {
            id: "D",
            title: "Plan - D",
            img: planc,
            price: "₹ 9800",
            daily: "₹ 3062",
            days: "130",
            total: "₹ 398060",
            buyPrice: "₹ 9800",
            comingSoon: false,
        },
        {
            id: "E",
            title: "Plan - E",
            img: plane,
            price: "₹ 17800",
            daily: "₹ 6137",
            days: "120",
            total: "₹ 736440",
            comingSoon: true,
        },
        {
            id: "F",
            title: "Plan - F",
            img: plane,
            price: "₹ 26800",
            daily: "₹ 10307",
            days: "110",
            total: "₹ 1133770",
            comingSoon: true,
        },
        {
            id: "G",
            title: "Plan - G",
            img: plane,
            price: "₹ 46800",
            daily: "₹ 20347",
            days: "110",
            total: "₹ 2034700",
            comingSoon: true,
        },
        {
            id: "H",
            title: "Plan - H",
            img: plane,
            price: "₹ 77800",
            daily: "₹ 38900",
            days: "90",
            total: "₹ 3501000",
            comingSoon: true,
        },
        {
            id: "I",
            title: "Plan - I",
            img: plane,
            price: "₹ 99800",
            daily: "₹ 58705",
            days: "80",
            total: "₹ 4696400",
            comingSoon: true,
        },
    ];

    const vipPlans = [
        {
            id: "A",
            title: "VIP - A",
            price: "₹ 800",
            daily: "₹ 400",
            days: "3",
            total: "₹ 1200",
        },
        {
            id: "B",
            title: "VIP - B",
            price: "₹ 1600",
            daily: "₹ 1600",
            days: "3",
            total: "₹ 4800",
        },
        {
            id: "C",
            title: "VIP - C",
            price: "₹ 3200",
            daily: "₹ 6400",
            days: "3",
            total: "₹ 19200",
        },
    ];


    return (
        <div className="main-tab-div">
            {/* ===== TABS ===== */}
            <div className="tabs">
                <button
                    className={activeTab === "day" ? "tab active" : "tab"}
                    onClick={() => setActiveTab("day")}
                >
                    Day income
                </button>

                <button
                    className={activeTab === "vip" ? "tab active" : "tab"}
                    onClick={() => setActiveTab("vip")}
                >
                    VIP
                </button>
            </div>

            {/* ===== DAY INCOME PAGE ===== */}
            {activeTab === "day" && (

                <div>
                    {dayPlans.map((plan) => (
                        <div className="plan-card" key={plan.id}>
                            <div className="main-plan-div">
                                <div className="main-paln-image-div">
                                    <img src={logo} alt="logo" />
                                </div>
                                <div className="main-image-plan-div">
                                    <h3>{plan.title}</h3>
                                </div>
                            </div>

                            <img src={plan.img} alt="plan" className="plan-img" />

                            <div className="stats3">
                                <div className="stat-box3">
                                    <h5 className="stats-price">{plan.price}</h5>
                                    <p>Price</p>
                                </div>
                                <div className="stat-box3">
                                    <h5 className="stats-price1">{plan.daily}</h5>
                                    <p>Daily</p>
                                </div>
                                <div className="stat-box3">
                                    <h5 className="stats-price2">{plan.days}</h5>
                                    <p>Day</p>
                                </div>
                                <div className="stat-box3">
                                    <h5 className="stats-price3">{plan.total}</h5>
                                    <p>Total</p>
                                </div>
                            </div>

                            {plan.comingSoon ? (
                                <div className="btn-lite-buy">
                                    <button className="buy-btn1">Coming soon</button>
                                </div>
                            ) : (
                                <div className="btn-byu-div">
                                    <button className="buy-btn">
                                        Buy now ({plan.buyPrice})
                                    </button>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}

            {/* ===== VIP PAGE ===== */}
            {activeTab === "vip" && (
                <div>
                    {vipPlans.map((plan) => (
                        <div className="plan-card vip-card" key={plan.id}>
                            <div className="main-plan-div">
                                <div className="main-paln-image-div">
                                    <img src={logo} alt="logo" />
                                </div>
                                <div className="main-image-plan-div">
                                    <h3>{plan.title}</h3>
                                </div>
                            </div>

                            <img src={vipa} alt="plan" className="plan-img" />

                            <div className="stats3">
                                <div className="stat-box3">
                                    <h5 className="stats-price">{plan.price}</h5>
                                    <p>Price</p>
                                </div>
                                <div className="stat-box3">
                                    <h5 className="stats-price1">{plan.daily}</h5>
                                    <p>Daily</p>
                                </div>
                                <div className="stat-box3">
                                    <h5 className="stats-price2">{plan.days}</h5>
                                    <p>Day</p>
                                </div>
                                <div className="stat-box3">
                                    <h5 className="stats-price3">{plan.total}</h5>
                                    <p>Total</p>
                                </div>
                            </div>

                            <div className="btn-byu-div">
                                <button className="buy-btn">
                                    Buy now ({plan.price})
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default Tab

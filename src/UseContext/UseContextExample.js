import React from "react";
import {CardContext} from "./CardContext";
import {FlippingCard} from "./FlippingCard";
const vegan =
    {
    text: "Veggies sunt bona vobis, proinde vos postulo esse magis green bean fava bean spinach avocado caulie welsh onion artichoke turnip chicory soybean.",
    img: "https://www.infoescola.com/wp-content/uploads/2010/08/brocolis.jpg",
    alt: "Brocoliz",
};

const UseContextExample = () => (
    <CardContext.Provider value={vegan}>
        <FlippingCard/>
    </CardContext.Provider>
);

export default UseContextExample;
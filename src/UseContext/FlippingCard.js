import React, {useContext, useState} from "react";
import './FlippingCard.css';
import {CardContext} from "./CardContext";

export const FlippingCard = () => {
    const [flipped, setFlipped] = useState(false);
    const card = useContext(CardContext);

    const flip = () => {
        setFlipped(!flipped);
    };

    return (
        <section onMouseEnter={flip} onMouseLeave={flip} className={"card-container" + (flipped ? " flipped" : "")}>
            <Front {...card} />
            <Back {...card} />
        </section>
    );
};


const Front = (props) => (
    <div className="front">
        <ImageArea {...props} />
        <MainArea {...props} />
    </div>
);

const Back = (props) => (
    <div className="back">
        <p>{props.text}</p>
    </div>
);

const ImageArea = (props) =>  (
    <div className="image-container">
        <img className="card-image" src={props.img} alt={props.alt}/>
        <h1 className="title">{props.title}</h1>
    </div>
);


const MainArea = (props) => (
    <div className="main-area">
        <div className="blog-post">
            <p className="date">{new Date().toLocaleDateString()}</p>
            <p className="blog-content">
                {props.text}
            </p>
            <p className="read-more">Hover para ler mais...</p>

        </div>

    </div>
);
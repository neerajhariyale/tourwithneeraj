import React from "react";
import { useState } from "react";
import data from "../data";
import Tours from "./Tours";

function Card({ id, image, info, price, name,removeTour  }) {
    const [readmore, setReadMore] = useState(false);
    const description = readmore ? info : `${info.substring(0, 200)}....`;

    function readmoreHandler() {
        setReadMore(!readmore);
    }

    return (


        <div className="w-96 max-h-max m-[1rem] p-[1rem] flex flex-col rounded-md items-center shadow-2xl">
            <img src={image} className="w-96 aspect-square object-cover" ></img>

            <div className="my-5 mx-1.5">
                <div>
                    <h4 className="text-[#1faa59] font-bold">₹ {price}</h4>
                    <h4 className="font-bold text-2xl">{name}</h4>
                </div>

                <div className="font-medium">
                    {description}
                    <span onClick={readmoreHandler} className="text-[#12b0e8] cursor-pointer">
                        {readmore ? `Show Less` : `Show More`}
                    </span>
                </div>
            </div>
            <button 
                onClick={ () => removeTour(id)}
                className="border-solid border-red-600 border-2 rounded-2xl cursor-pointer font-normal bg-[#b4161b21] mt-5 px-20 py-2.5  not-intrested-btn">Not Interested</button>
        </div>
    )
}

export default Card;
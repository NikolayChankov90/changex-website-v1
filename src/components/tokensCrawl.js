import * as React from "react";
import { useEffect, useState } from "react";
import coinsPrices from "../../static/assets/js/coinsPrices";

export default function TokensCrawl({ crawlDirection }) {
    const [coins, setCoinsData] = useState([]);
    useEffect(() => {
        setPrice();

        setTimeout(() => {
            setPrice();
        }, 1000);
    }, []);

    function setPrice() {
        if (coinsPrices) {
            setCoinsData(coinsPrices);
        }
    }

    return (
        <section id="infinite-craw">
            <div className="flex">
                <div className={`${crawlDirection} logos-wrapper `}>
                    {coins && coins.length > 0 &&
                        coins.map((item, index) => {
                            return (
                                <div key={index} className="tokensCrawl" id={index.toString()}>
                                    <h6 className="heading-style-h7">Price:</h6>
                                    <div className="flex">
                    <span className="text-size-large font-black">
                      {item.current_price} $ &nbsp;
                    </span>
                                        <span  className={`${
                                            item.price_change_percentage_24h < 0 
                                                ? "is-red" : 
                                                "is-green"}
                                              `}>
                                            {item.price_change_percentage_24h}%
                                        </span>
                                    </div>
                                    <div>
                                        <img
                                            src={`/assets/images/token/${item.symbol}.svg`}
                                            loading="lazy"
                                            alt={item.symbol}
                                            className="crawlImg"
                                        ></img>
                                        &nbsp;&nbsp;<strong>{item.symbol.toUpperCase()}</strong>
                                    </div>
                                </div>
                            );
                        })}
                </div>
                <div className={`${crawlDirection} logos-wrapper`}>
                    {coins && coins.length > 0 &&
                        coins.map((item, index) => {
                            return (
                                <div key={index} className="tokensCrawl" id={index.toString()}>
                                    <div className="flex">
                                        <span>{item.current_price}$</span>
                                        <span className="blue">
                      {item.price_change_percentage_24h}%
                    </span>
                                    </div>
                                    <div>
                                        <img
                                            src={item.src}
                                            loading="lazy"
                                            width="75"
                                            alt={item.symbol}
                                            className=""
                                        ></img>
                                    </div>

                                    {item.symbol}
                                </div>
                            );
                        })}
                </div>
            </div>
        </section>
    );
}

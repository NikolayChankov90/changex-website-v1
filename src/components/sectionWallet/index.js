import * as React from "react";
import { useState, useRef } from "react";

import Carousel from "react-bootstrap/Carousel";
import "react-slideshow-image/dist/styles.css";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

import { PurpleButton } from "../Buttons/ThemeButtons";
import { scrollImages, slideImages } from "../../constants/walletPage/walletItems";

export default function SectionWallet() {
    let [itemIndex, SetItemIndex] = useState(0);
    const carouselRef = useRef();

    function RightBtnClick() {
        carouselRef.current.next();
        if (itemIndex === 2) {
            SetItemIndex(0);
        } else {
            SetItemIndex(itemIndex + 1);
        }
    }

    function LeftBtnClick() {
        carouselRef.current.prev();
        if (itemIndex === 0) {
            SetItemIndex(2);
        } else {
            SetItemIndex(itemIndex - 1);
        }
    }

    function onIndicatorsClick(eventKey) {
        SetItemIndex(eventKey);
    }

    return (
        <section id="wallet-section" className="section_wallet">
            <div className="background-color-black">
                <div className="padding-global">
                    <div className="container-large">
                        <div className="main-container-wallet grid-2">
                            <div className="max-width-full wallet-slider  margin-slider w-tab-content">
                                <Carousel
                                    controls={false}
                                    slide={true}
                                    indicators={true}
                                    onSlide={(eventKey) => {
                                        onIndicatorsClick(eventKey);
                                    }}
                                    touch={true}
                                    ref={carouselRef}
                                    id="walletCarousel"
                                    height="500"
                                >
                                    {slideImages.map((item, index) => {
                                        return (
                                            <div key={index} className="carousel-item">
                                                <img src={item.url} alt={item.url} />
                                            </div>
                                        );
                                    })}
                                </Carousel>
                            </div>
                            <div
                                data-current="Tabs"
                                data-easing="ease-out"
                                data-duration-in="300"
                                data-duration-out="100"
                                className="tabs tabs-wallet margin-top w-tabs"
                            >
                                <div className="max-width-small-slider">
                                    <div className="wallet_wrapper-right animate__animated animate__fadeInUp">
                                        <div className="wallet-content">
                                            <div className="label is-lime slide-from-bottom">
                                                {scrollImages[itemIndex].h1}
                                            </div>
                                            <div style={{ margin: "0px 0 10px auto" }}>
                                                <button
                                                    onClick={(e) => {
                                                        LeftBtnClick(e);
                                                    }}
                                                    className="button-arrows"
                                                >
                                                    <BiChevronLeft />
                                                </button>
                                                <button
                                                    onClick={(e) => {
                                                        RightBtnClick(e);
                                                    }}
                                                    className="button-arrows"
                                                >
                                                    <BiChevronRight />
                                                </button>
                                            </div>
                                        </div>

                                        <h2 className="heading-style-h2 margin-bottom margin-large slide-from-bottom">
                                            {scrollImages[itemIndex].caption}
                                        </h2>
                                        <p className="text-color-grey wallet-text text-size-large slide-from-bottom">
                                            {scrollImages[itemIndex].text}
                                        </p>
                                        <PurpleButton
                                            text={scrollImages[itemIndex].urlText}
                                            url={scrollImages[itemIndex].url}
                                        ></PurpleButton>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

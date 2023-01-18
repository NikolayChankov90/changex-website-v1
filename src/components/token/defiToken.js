import * as React from "react";
import { useRef, useState } from "react"

import Carousel from "react-bootstrap/Carousel";
import "react-slideshow-image/dist/styles.css";

import Popover from '@mui/material/Popover';
import Typography from "@mui/material/Typography";
import {BiChevronLeft, BiChevronRight} from "react-icons/bi";

export default function DefiToken({ background, tokenData}) {
    const [anchorEl, setAnchorEl] = useState(null);
    const [activeIndex, setActiveIndex] = useState(null);
    const [popupText, setPopupText] = useState('');
    const [popupTitle, setPopupTitle] = useState('');
    const [slideItemsText, setSlideItemsText] = useState('1 of 6');

    const carouselRef = useRef();

    const handleClick = (event ,index) => {
        setPopupText(tokenData.perks[index].content)
        setPopupTitle(tokenData.perks[index].title)
        setActiveIndex(index)
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    function LeftBtnClick() {
        carouselRef.current.prev();
    }

    function RightBtnClick() {
        carouselRef.current.next();

    }

    function onSlide(eventKey) {
        setSlideItemsText(`${eventKey +1} of 6`)
    }

    const open = Boolean(anchorEl);

    return (
        <section id="defi-perks" className={background}>
            <div className="padding-global">
                <div className="container-large">
                    <h4 className={`${background === "background-color-black" ? "is-lime" : "blue" } heading-style-h6 margin-vertical margin-large`}>
                        {tokenData.head2}
                    </h4>
                    <h3 className={`${background === "background-color-black" ? "white" : "blue"} heading-style-h3 margin-vertical margin-large`}>
                        {tokenData.head}
                    </h3>
                    <p className="text-weight-normal off-white">
                        {tokenData.paragraph}
                    </p>
                    <div className="defi-perks-wrapper">
                        <div className="grid-defi-perks">

                            <div className="grid-header">
                                <button className="transparent" onClick={(e) => {handleClick(e,0)}}>
                                    <img width="120" height="120" src={tokenData.perks[0].image} alt={tokenData.perks[0].title}/>
                                </button>
                                {tokenData.perks[0].title}
                            </div>

                            <div className="grid-second">
                                <div>
                                    <button className="transparent" onClick={(e) => {handleClick(e,1)}}>
                                        <img width="120" height="120" src={tokenData.perks[1].image} alt={tokenData.perks[1].title}/>
                                    </button>
                                    {tokenData.perks[1].title}
                                </div>
                                <div>
                                    <button className="transparent" onClick={(e) => {handleClick(e,2)}}>
                                        <img width="120" height="120" src={tokenData.perks[2].image} alt={tokenData.perks[2].title}/>
                                    </button>
                                    {tokenData.perks[2].title}
                                </div>
                            </div>

                            <div className="centerIcon grid-center">
                                <img src={tokenData.centerIcon} alt={'Defi Change'}/>
                            </div>

                            <div className="grid-main">
                                <div>
                                    <button className="transparent" onClick={(e) => {handleClick(e,5)}}>
                                        <img width="120" height="120" src={tokenData.perks[5].image} alt={tokenData.perks[5].title}/>
                                    </button>
                                    {tokenData.perks[5].title}
                                </div>
                                <div>
                                    <button className="transparent" onClick={(e) => {handleClick(e,4)}}>
                                        <img width="120" height="120" src={tokenData.perks[4].image} alt={tokenData.perks[4].title}/>
                                    </button>
                                    {tokenData.perks[4].title}
                                </div>

                            </div>

                            <div className="grid-bottom">
                                <button className="transparent" onClick={(e) => {handleClick(e,3)}}>
                                    <img width="120" height="120" src={tokenData.perks[3].image} alt={tokenData.perks[3].title}/>
                                </button>
                                {tokenData.perks[3].title}
                            </div>
                        </div>
                            <Popover
                                id={'0'}
                                open={open}
                                classes={
                                    {
                                        paper: 'popupDefi'
                                    }
                                }
                                anchorEl={anchorEl}
                                onClose={handleClose}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                            >
                                <h6 className="white margin-bottom-small">{popupTitle}</h6>
                                <Typography>{popupText}</Typography>
                            </Popover>
                    </div>
                    <Carousel
                        controls={false}
                        slide={true}
                        indicators={false}
                        touch={true}
                        onSlide={(eventKey) => {
                            onSlide(eventKey);
                        }}
                        ref={carouselRef}
                        className="defiPerksCarousel"
                        height="500"
                        data-bs-ride="carousel"
                    >
                            {tokenData.perks.map((item, index) => {
                                return (
                                        <div className="carousel-item">
                                            <div>
                                                <img alt={item.title} src={item.image} />
                                                <p> {item.title}</p>
                                            </div>
                                            <div className="spacer-middle"></div>
                                            <Typography>{item.content}</Typography>
                                            <div className="spacer-middle"></div>
                                        </div>

                                );
                            })}
                    </Carousel>
                    <div className="defiPerksCarouselControls">
                        <button
                            onClick={(e) => {
                                LeftBtnClick(e);
                            }}
                            className="button-arrows"
                        >
                            <BiChevronLeft />
                        </button>
                        <span>{slideItemsText}</span>
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
            </div>
        </section>
    )
}

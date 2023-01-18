import * as React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";

import { advantages } from "../../constants/tokenPage/tokenPageItems";
import {Modal} from "@mui/material";
import { BsArrowDown } from "react-icons/bs";
import DownloadApple from "../../../static/assets/images/DW-Apple.svg";
import DownloadGoogle from "../../../static/assets/images/DW-Google.svg";
import QRWhite from "../../../static/assets/images/icn-qr-white.svg";
import changexAPY from "../../../static/assets/js/changexAPY";
import coinsPrices from "../../../static/assets/js/coinsPrices";
import {ScanQrModal} from "../../../static/assets/js/ScanQrCode";
import DropDownButton from "../dropownButton";
import {PrimaryButton} from "../buttons/themeButtons";
import Advantages from "../advantages/advantages";

export default function InnerHero( { heroObj } ){

    const [apy, setApy] = useState('$CHANGE');
    const [price, setPrice] = useState('CHANGE');
    const [showModal, setShowModal] = useState(false)

    function openModal() {
        setShowModal(true);
    }

    const dropDownObj = [
        {
            link: 'https://app.uniswap.org/#/swap?inputCurrency=&outputCurrency=0x7051faed0775f664a0286af4f75ef5ed74e02754',
            image: '/assets/images/social/uniswapImg.png',
            title: 'Uniswap'
        },
        {
            link: 'https://otc.mexc.com/en-US/fastTransaction',
            image: '/assets/images/social/mexcImage.png',
            title: 'Mexc'
        },
        {
            link: 'https://hydradex.org/#/swap',
            image: '/assets/images/social/hydraImg.png',
            title: 'Hydra Dex'
        }
    ]

    function setPriceAndApy() {
        if (changexAPY) {
            setApy(changexAPY);
        }

        if(coinsPrices) {
            const changexPrice = coinsPrices.filter(a => {
                return a.id === 'changex'
            });

            if (changexPrice.length > 0 ) {
                setPrice(changexPrice[0].current_price.toFixed(4));
            }
        }
    }

    useEffect(  () => {
        setTimeout(() => {
            setPriceAndApy()
        },2000)
    },[])



    return (
        <section id="inner-hero" className={`${heroObj.class === 'tokenPage' ? 'vh-responsive-token' : 'vh-responsive'} animate__animated animate__fadeIn animate__delay-800ms`}>
            <div className="padding-global relative">
                <div className="container-large ">
                    <div id="inner-hero-title" className="hero_content-wrapper padding-vertical padding-large  animate__animated animate__fadeInUp animate__delay-800s">
                        <div className="title_wrapper_hero max-width-large" >
                            <div className="center-content z-index-1">
                                <div className="">
                                    <h6 className="heading-style-h6 text-align-center text-color-primary text-left-mobile">
                                        {heroObj.titleObj.h1}
                                    </h6>
                                </div>
                                <div className="margin-vertical margin-small ">
                                    <div className="">
                                        <h1 className="heading-style-h1 text-left-mobile">
                                            {heroObj.titleObj.h2}
                                        </h1>
                                    </div>
                                </div>
                                <div className="">
                                    <div className="text-align-center text-weight-normal">
                                        {heroObj.titleObj.h3}
                                    </div>
                                </div>
                                    <div className={`${heroObj.appBtnsVisible ? '' : 'hide'} animate__animated animate__zoomIn animate__delay-1s button-group centered-items margin-top margin-large spread max-width-full-mobile-landscape`}>
                                        <a target="_blank"  rel="noreferrer" href="https://apps.apple.com/bg/app/changex-wallet/id1613309180"
                                           className="button is-store max-width-full-mobile-landscape w-inline-block">
                                            <img src={DownloadApple} alt="Apple" loading="lazy" width="150"></img>
                                        </a>
                                        <a target="_blank" rel="noreferrer" href="https://play.google.com/store/apps/details?id=io.changex.app"
                                           className="button is-store max-width-full-mobile-landscape w-inline-block">
                                            <img src={DownloadGoogle} alt="Google" loading="lazy" width="150"></img>
                                        </a>
                                            <button onClick={openModal}
                                                    className={`${heroObj.appBtnsVisible && heroObj.class === "walletPage" ? "" : "hide"} button is-qr-hero w-inline-block`}>
                                                <img src={QRWhite} loading="lazy" width="75"
                                                     alt="Changex QR code"
                                                     className="qr-big">
                                                </img>
                                            </button>
                                    </div>
                                    <div className={`${heroObj.scrollBtnText && heroObj.class === "tokenPage" ? '' : "hide"} infoWrapper`}>
                                        <div className="infoInnerWrapper">
                                            <div className="padding-small">
                                                <div id="changexPrice" className="text-size-middle changexprice">Price:&nbsp;
                                                    <strong>{price}</strong>
                                                </div>
                                            </div>
                                            <div className="padding-small">
                                                <div id="changexApy" className="text-size-middle text-color-black changexapy">APY:<strong> {apy}%</strong></div>
                                            </div>
                                            <DropDownButton dropDownData={dropDownObj}/>
                                        </div>
                                    </div>
                                    <div className={`${heroObj.scrollBtnText && heroObj.class !== "tokenPage" ? '' : 'hide'} tabs-menu goToLink w-tab-menu`}>
                                        <Link to={heroObj.scrollToID} smooth={true}>
                                            <PrimaryButton text={heroObj.scrollBtnText} url={''} icon={<BsArrowDown/>} />
                                        </Link>
                                    </div>
                            </div>
                        </div>
                        <div className={`${heroObj.class === "tokenPage" ? '' : "hide"}`}>
                            <Advantages pageClass={heroObj.class} classGrid={'card-grid-token'} title={'A community-centric token'} advantages={ advantages }/>
                        </div>
                    </div>
                </div>
                <div className={`${heroObj.class} absolute`}></div>
            </div>
            <Modal open={showModal}>
                <ScanQrModal className="section-scanpopup wf-section"
                             showModal={showModal}
                             setShowModal={setShowModal}
                             aria-labelledby="modal-modal-title"
                             aria-describedby="modal-modal-description">
                </ScanQrModal>
            </Modal>
        </section>
    );
}

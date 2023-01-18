import * as React from "react";

import MetaDecorator from "../../Utils/MetaDecorator";
import InnerHero from "../../components/hero/innerHero";
import Advantages from "../../components/advantages/advantages";
import SliderSection from "../../components/sliderSection/sliderSection";
import SwapCrypto from "../../components/swapCrypto/swapCrypto";
import Card from "../../components/card/card";
import Faq from "../../components/faq/faq";
import {
    responsiveWalletPageSlider,
    sliderDataWalletPage,
    textData,
    cardContent,
    heroObj,
    advantages
} from "../../constants/walletPage/walletItems";
import { faqBankContent } from "../../constants/faq/faqItems"
import "react-slideshow-image/dist/styles.css";
const imageUrl = "/assets/images/Changex-OG.jpeg";

export default function Wallet() {
    return (
        <>
            <MetaDecorator
                description={heroObj.titleObj.h3}
                title={heroObj.titleObj.h2}
                imageAlt="Changex Bank"
                imageUrl={imageUrl}
            />
            <InnerHero heroObj={heroObj} />
            <section id="wallet">
                <Advantages
                    pageClass={heroObj.class}
                    classGrid={"card-grid-walletPage"}
                    title={"The DeFi Wallet That Changes Everything"}
                    advantages={advantages}
                />
                <SwapCrypto />
                <SliderSection
                    textData={textData}
                    sliderData={sliderDataWalletPage}
                    responsiveSliderData={responsiveWalletPageSlider}
                    menuTabs={null}
                />
                <Card cardContent={cardContent} />
                <Faq
                    background={"background-color-black"}
                    title={"Wallet FAQ"}
                    faqContent={faqBankContent}
                />
            </section>
        </>
    );
}

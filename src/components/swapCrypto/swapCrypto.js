import * as React from "react";
import {PrimaryButtonRoute} from "../buttons/themeButtons";
import TokensCrawl from "../tokensCrawl";

const titleObj = {
    titleObj: {
        h1: "",
        h2: "Swap Crypto",
        h3: "Get your hands on a variety of tokens on multiple blockchains, including HydraChain and Ethereum, with Binance Smart Chain and more coming soon.",
    },
    text: "",
    appBtnsVisible: false,
    buttonUrl: "/supported-tokens",
    scrollBtnText: "View All",
    backgroundImage: "",
    class: "walletPage",
};

export default function SwapCrypto() {
    return (
        <section id="swap_crypto" className="swap_crypto">
            <div className="padding-global">
                <div className="container-large">
                    <div className="hero_content-wrapper padding-vertical padding-large">
                        <div className="title_wrapper_hero max-width-large">
                            <div className="center-content z-index-1">
                                <div className="margin-vertical margin-small ">
                                    <div className="">
                                        <h1 className="heading-style-h1 animate__animated animate__fadeInUp animate__delay-1s">
                                            {titleObj.titleObj.h2}
                                        </h1>
                                    </div>
                                </div>
                                <div className="">
                                    <div className="text-align-center text-weight-normal animate__animated animate__fadeInUp animate__delay-1s">
                                        {titleObj.titleObj.h3}
                                    </div>
                                </div>
                                <div
                                    className={`${
                                        titleObj.scrollBtnText && titleObj.class !== "tokenPage"
                                            ? ""
                                            : "hide"
                                    } tabs-menu goToLink w-tab-menu`}
                                >
                                    <PrimaryButtonRoute text={titleObj.scrollBtnText} url={titleObj.buttonUrl}/>
                                </div>
                            </div>
                        </div>
                        <TokensCrawl crawlDirection={"r-marquee-wrapper-tokens-left"} />
                        <div className="spacer"></div>
                        <TokensCrawl crawlDirection={"r-marquee-wrapper-tokens-right"} />
                    </div>
                </div>
            </div>
        </section>
    );
}

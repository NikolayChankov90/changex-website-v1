import * as React from "react";

import MetaDecorator from "../../Utils/MetaDecorator";
import InnerHero from "../../components/hero/innerHero";
import DefiToken from "../../components/token/defiToken";
import Tokenomics from "../../components/token/tokenomics";
import Faq from "../../components/faq/faq";

import { faqBankContent } from "../../constants/faq/faqItems";
import {
    heroObj, tokenPageDeFiData,
    tokenPageTokenomicsData,
} from "../../constants/tokenPage/tokenPageItems";


const imageUrl = "/assets/images/Changex-OG.jpeg";

export default function TokenPage() {
    return (
        <>
            <MetaDecorator
                description={heroObj.titleObj.h3}
                title={heroObj.titleObj.h2}
                imageAlt="Changex Bank"
                imageUrl={imageUrl}
            />
            <InnerHero heroObj={heroObj} />
            <DefiToken background={'background-color-black'} tokenData={tokenPageDeFiData } />
            <Tokenomics
                background={"background-color-black"}
                tokenData={tokenPageTokenomicsData}
            />
            <section id="token-page">
                <Faq
                    background={"background-color-off-white"}
                    title={"FAQ"}
                    faqContent={faqBankContent}
                />
            </section>
        </>
    );
}

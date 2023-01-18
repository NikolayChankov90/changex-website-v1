import * as React from "react";

import MetaDecorator from "../../Utils/MetaDecorator";
import InnerHero from "../../components/hero/innerHero";
import SliderSection from "../../components/sliderSection/sliderSection";
import Feature from "../../components/features/features";
import Faq from "../../components/faq/faq";
import {
    responsiveSliderData,
    sliderDataWealthPage,
    heroObj,
    textData,
    featureContent,
    featureContent2
} from "../../constants/wealth/wealthItems";
import { faqWealthContent } from "../../constants/faq/faqItems";

const imageUrl = "/assets/images/Changex-OG.jpeg";

export default function Wealth() {
    return (
        <>
            <MetaDecorator
                description={heroObj.titleObj.h3}
                title={heroObj.titleObj.h2}
                imageAlt="Changex Wealth"
                imageUrl={imageUrl}
            />
            <InnerHero heroObj={heroObj} />
            <section id="wealth" className="section_invest">
                <SliderSection
                    textData={textData}
                    sliderData={sliderDataWealthPage}
                    responsiveSliderData={responsiveSliderData}
                    menuTabs={null}
                />
                <Feature
                    background={"background-color-blue"}
                    content={featureContent}
                />
                <Feature
                    background={"background-color-off-pink"}
                    content={featureContent2}
                />
                <Faq
                    background={"background-color-off-white"}
                    title={"Wealth FAQ"}
                    faqContent={faqWealthContent}
                />
            </section>
        </>
    );
}

import * as React from "react";
import {
    responsiveSliderData,
    sliderData,
    heroObj,
    sliderTextData,
    cardContent,
    thoughtObj,
} from "../../constants/bankPage/bankItem";
import {faqBankContent} from "../../constants/faq/faqItems";
import MetaDecorator from "../../Utils/MetaDecorator";
import InnerHero from "../../components/hero/innerHero";
import SliderSection from "../../components/sliderSection/sliderSection";
import ThoughtWall from "../../components/thoughtWall";
import Faq from "../../components/faq/faq";
import Card from "../../components/card/card";
import Cta from "../../components/cta/cta";

const imageUrl = "/assets/images/Changex-OG.jpeg";

export default function BankPage() {
    return (
        <>
            <MetaDecorator
                description={heroObj.titleObj.h3}
                title={heroObj.titleObj.h2}
                imageAlt="Changex Bank"
                imageUrl={imageUrl}
            />
            <InnerHero heroObj={heroObj} />
            <section id="bank" className="section_bank">
                <SliderSection
                    textData={sliderTextData}
                    sliderData={sliderData}
                    responsiveSliderData={responsiveSliderData}
                    menuTabs={null}
                />
                <Card cardContent={cardContent} />
                <ThoughtWall thoughtObj={thoughtObj} />
                <Faq
                    background={"background-color-black"}
                    title={"Banking FAQ"}
                    faqContent={faqBankContent}
                />
                <Cta />
            </section>
        </>
    );
}

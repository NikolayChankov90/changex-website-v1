import * as React from "react";

import MetaDecorator from "../../Utils/MetaDecorator";
import AboutHero from "../../components/hero/aboutHero";
import Feature from "../../components/features/features";
import Contact from "../../components/contact";
import PerksSlide from "../../components/perksSlide";
import {
    becomeAPartner,
    becomeAPartnerForm,
    featureContent,
    heroPartnerObj,
} from "../../constants/partners/partnersItems";

const imageUrl = "/assets/images/Changex-OG.jpeg";

export default function Partner() {
    return (
        <>
            <MetaDecorator
                description={heroPartnerObj.titleObj.h3}
                title={heroPartnerObj.titleObj.h2}
                imageAlt="Changex Bank"
                imageUrl={imageUrl}
            />
            <AboutHero heroObj={heroPartnerObj} />
            <PerksSlide perksObj={heroPartnerObj.perks} />
            <Feature
                background={"background-color-off-pink"}
                content={featureContent}
            />
            <Contact
                content={becomeAPartner}
                formContent={becomeAPartnerForm}
                background={"becomePartner"}
            />
        </>
    );
}

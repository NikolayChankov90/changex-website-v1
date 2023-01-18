import * as React from "react";

import Partners from "../partner/partners";
import Hero from "../hero/hero";
import SectionWallet from "../sectionWallet/index";
import Bank from "../bank/Bank";
import CryptoBank from "../cryptoBank/cryptoBank";
import Card from "@mui/material/Card";
import SectionWealth from "../sectionWealth/index";
import Cta from "../cta/cta";
import Press from "../press/press";

const heroObj = {
    titleObj: {
        h1: "Money matters → Made Simple",
        h2: "Decentralized Personal Finance",
        h3: "For All",
        h4: "Manage, invest, and grow your wealth with a Euro bank account, access to crypto, and DeFi investment tools. Spend anywhere with the Changex",
        titleWithLink: "Crypto Debit Card.",
    },
    text: "",
    appBtnsVisible: true,
    scrollBtnText: "",
    backgroundImage: "../../../static/images/Hero-BGimg-mobile.png",
};

const cardContent = {
    head1: "Meet The",
    head2: "ChangeX",
    head3: "Debit Card",
    paragraph: "",
    page: "Home",
};

export default function Home() {
    return (
        <>
            <Hero heroObj={heroObj} />
            <SectionWallet />
            <Bank />
            <CryptoBank />
            <Partners />
            <Card cardContent={cardContent} />
            <SectionWealth />
            <Cta />
            <Press />
        </>
    );
}

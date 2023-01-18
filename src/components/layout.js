import * as React from "react"

import content from "../../static/assets/content/content.json";
import CookieConsentModal from "../../static/assets/js/CookieConsent";
import Navigation from "./navigation/nav";
import MetaDecorator from "../Utils/MetaDecorator";
const imageUrl = "/assets/images/Changex-OG.jpeg"

export default function Layout({ children }) {
    return (
        <>
        <MetaDecorator
            description={content.pageDescription}
            title={content.pageTitle}
            imageAlt={content.metaImageAlt}
            imageUrl={imageUrl}
        />
        <CookieConsentModal/>
        <Navigation/>
            { children }
        </>
    )
}

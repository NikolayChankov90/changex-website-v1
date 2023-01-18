import * as React from "react";

import MetaDecorator from "../../Utils/MetaDecorator";
import SupportedTokensTable from "../../components/token/supportedTokensTable";
import {PurpleButtonRoute} from "../../components/buttons/themeButtons";
import { titleObj } from "../../constants/tokenPage/tokenPageItems";

const imageUrl = "/assets/images/Changex-OG.jpeg";

export default function Supported() {
    return (
        <>
            <MetaDecorator
                description="Supported Changex Tokens"
                title="Supported Changex Tokens"
                imageAlt="Supported Changex Tokens"
                imageUrl={imageUrl}
            />
            <section
                id="supported-tokens"
                className="animate__animated animate__fadeInUp"
            >
                <div className="padding-global">
                    <div className="container-large">
                        <div className="margin-auto-large">
                            <div className="title_wrapper_hero max-width-large">
                                <div className="center-content z-index-1">
                                    <div className="margin-vertical margin-small ">
                                        <div className="">
                                            <h1 className="heading-style-h1 text-left-mobile">
                                                {titleObj.titleObj.h2}
                                            </h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <SupportedTokensTable />
                        <div className="background-color-blue quoteImagePartner">
                            <div className="quoteTextPatner padding-global">
                                <h3 className="heading-style-h3">
                                    {" "}
                                    Want to get your project listed?
                                </h3>
                                <div className="spacer-middle"></div>
                                <div>
                                    <PurpleButtonRoute
                                        role={"button"}
                                        text={"Become A Partner"}
                                        url={"/partner"}
                                        size={"small"}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

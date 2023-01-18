import * as React from "react";
import { bankContent, bankItems } from "../../constants/bankPage/bankItem";
import Perks from "../perks";

export default function CryptoBank() {
    return (
        <div className="padding-global">
            <div className="container-large">
                <h3 className="heading-style-h3 margin-vertical margin-large">
                    {bankContent.head3}
                </h3>
                <Perks perksArray={bankItems} component={bankContent.component} />
            </div>
        </div>
    );
}

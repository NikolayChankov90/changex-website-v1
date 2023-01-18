import * as React from "react";
import { useState, useRef } from "react";

import {
    GATSBY_EMAILJS_PUBLICK_KEY,
    GATSBY_EMAILJS_SERVICE_ID,
    GATSBY_EMAILJS_TEMPLATE_ID
} from "../../static/assets/js/constants";

import {Checkbox, FormControlLabel, TextField} from "@mui/material";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import emailjs from "emailjs-com";
import isURL from "validator/es/lib/isURL";

export default function Contact({ content, formContent, background }) {
    const formRef = useRef();

    const [organizationName, setOrganizationName] = useState("");
    const [communityLink, setCommunityLink] = useState("");
    const [websiteLink, setWebsiteLink] = useState("");
    const [information, setInfomration] = useState("");
    const [isSent, setSent] = useState(false);
    const [checked, setChecked] = useState(false);
    const [btnDisabled, setBtnDisabled] = useState(false);
    const [isWebsiteLinkValid, setIsWebsiteLinkValid] = useState(true);
    const [isComunityLinkValid, setIsComunityLinkValid] = useState(true);

    emailjs.init(GATSBY_EMAILJS_PUBLICK_KEY);

    const inputChangeHandler = (setFunction, event) => {
        setFunction(event.target.value);
    };

    function handleSubmit(event) {
        event.preventDefault();

        if (isURL(websiteLink)) {
            setIsWebsiteLinkValid(true);
        } else {
            setIsWebsiteLinkValid(false);
        }

        if (isURL(communityLink)) {
            setIsComunityLinkValid(true);
        } else {
            setIsComunityLinkValid(false);
        }

        const data = {
            service_id: 'service_4odwy7d',
            template_id: 'template_7pl8p4f',
            user_id: '029J4cwhdZ4Slz7vE',
            template_params: {
                'message': `From '${organizationName}', our community link is ${communityLink}. You can review our website: ${websiteLink}.  More about us: "${information}".`,
            }
        };

        emailjs.send(GATSBY_EMAILJS_SERVICE_ID, GATSBY_EMAILJS_TEMPLATE_ID, data.template_params)
            .then(function(response) {
                setBtnDisabled(true);
                setSent(true);
                setOrganizationName("");
                setCommunityLink("");
                setWebsiteLink("");
                setInfomration("");
                setChecked(false);
            }, function(error) {
                console.log('FAILED...', error);
            });
    }

    return (
        <section id="contact" className={background}>
            <div>
                <div className="padding-global">
                    <div className="container-large">
                        <div className="formWrapper">
                            <h2 className="heading-style-h2">{content.head}</h2>
                            {content.feature.map((item, index) => {
                                return (
                                    <>
                                        <div key={index}
                                            className={
                                                item.alignImage === "left"
                                                    ? "container-form rowReverse"
                                                    : "container-form"
                                            }
                                        >
                                            <div
                                                data-current="Tabs"
                                                className="tabs tabs-partner-form w-tabs"
                                            >
                                                <div className="">
                                                    <div
                                                        className={`${
                                                            item.commingSoon ? "" : "hide"
                                                        } bank-image-comming-soon`}
                                                    >
                                                        {item.offerText}
                                                    </div>
                                                    <div className="money">
                                                        <h2 className="heading-style-h2 white margin-bottom margin-small">
                                                            {item.h1}
                                                            <span
                                                                className={`${
                                                                    item.commingSoon ? "is-blue" : "is-lime"
                                                                }  heading-style-h2`}
                                                            >{item.h2}
                                                            </span>
                                                        </h2>
                                                        <p
                                                            className={`${
                                                                item.commingSoon ? "" : "text-color-grey"
                                                            } text-size-large `}
                                                        >
                                                            {item.h3}
                                                        </p>
                                                        <p className="text-size-large text-color-grey">
                                                            {item.h4}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div
                                                className={
                                                    item.alignImage === "left"
                                                        ? "wrapper-left-image"
                                                        : "wrapper-right"
                                                }
                                            >
                                                <form ref={formRef} onSubmit={handleSubmit} className="formPartner">
                                                    <Typography
                                                        className="formLabel"
                                                        variant="h6"
                                                        gutterBottom
                                                    >
                                                        {formContent.field1}
                                                    </Typography>
                                                    <TextField
                                                        className="formInput"
                                                        margin="normal"
                                                        defaultValue=""
                                                        value={organizationName}
                                                        required
                                                        fullWidth
                                                        id="organization"
                                                        name="organization"
                                                        onChange={(e) =>
                                                            inputChangeHandler(setOrganizationName, e)
                                                        }
                                                    />
                                                    <Typography
                                                        className="formLabel"
                                                        variant="h6"
                                                        gutterBottom
                                                    >
                                                        {formContent.field2}
                                                    </Typography>
                                                    <TextField
                                                        className="formInput"
                                                        margin="normal"
                                                        defaultValue=""
                                                        value={communityLink}
                                                        required
                                                        error={!isComunityLinkValid}
                                                        fullWidth
                                                        name="link"
                                                        type="url"
                                                        id="community"
                                                        autoComplete="current-password"
                                                        onChange={(e) =>
                                                            inputChangeHandler(setCommunityLink, e)
                                                        }
                                                    />
                                                    <Typography
                                                        className="formLabel"
                                                        variant="h6"
                                                        gutterBottom
                                                    >
                                                        {formContent.field3}
                                                    </Typography>
                                                    <TextField
                                                        className="formInput"
                                                        margin="normal"
                                                        defaultValue=""
                                                        required
                                                        error={!isWebsiteLinkValid}
                                                        value={websiteLink}
                                                        fullWidth
                                                        type="url"
                                                        id="website"
                                                        name="website"
                                                        autoComplete="website"
                                                        onChange={(e) =>
                                                            inputChangeHandler(setWebsiteLink, e)
                                                        }
                                                    />
                                                    <Typography
                                                        className="formLabel"
                                                        variant="h6"
                                                        gutterBottom
                                                    >
                                                        {formContent.field4}
                                                    </Typography>
                                                    <TextField
                                                        className="formInput message"
                                                        margin="normal"
                                                        defaultValue=""
                                                        value={information}
                                                        required
                                                        fullWidth
                                                        size="medium"
                                                        id="info"
                                                        name="info"
                                                        multiline={true}
                                                        rows={6}
                                                        select={false}
                                                        autoComplete="information"
                                                        onChange={(e) =>
                                                            inputChangeHandler(setInfomration, e)
                                                        }
                                                    />
                                                    <div className="grid-1">
                                                        <FormControlLabel
                                                            control={
                                                                <Checkbox
                                                                    checked={checked}

                                                                    className="formCheckbox"
                                                                    onChange={(e) => setChecked(!checked)}
                                                                    inputProps={{ "aria-label": "controlled" }}
                                                                    label={formContent.checkbox}
                                                                />
                                                            }
                                                            label={formContent.checkbox}
                                                        />
                                                        <Button
                                                            disabled={btnDisabled}
                                                            type="text"
                                                            className="formBtn"
                                                            fullWidth
                                                            variant=""
                                                        >
                                                            {formContent.buttonTxt}
                                                        </Button>
                                                    </div>

                                                    <Typography
                                                        className={`${isSent ? "" : "hide"} formLabel`}
                                                    >
                                                        Application successfully sent!
                                                    </Typography>
                                                </form>
                                            </div>
                                        </div>
                                    </>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

import * as React from "react";

import { Modal } from "@mui/material";
import { useState } from "react";
import DownloadApple from "../../../static/assets/images/DW-Apple-Lime.svg";
import DownloadGoogle from "../../../static/assets/images/DW-Google-Lime.svg";
import {ScanQrModal} from "../../../static/assets/js/ScanQrCode";

export default function Cta() {
    const [showModal, setShowModal] = useState(false);

    function openModal() {
        setShowModal(true);
    }

    return (
        <section id="cta" className="section_cta">
            <div className="padding-global">
                <div className="container-large">
                    <div className="padding-section-large is-cta-section">
                        <div className="max-width-medium">
                            <div className="margin-top-small">
                                <h2 className="heading-style-h2 highlight is-white">
                                    Take Control Of Your Money
                                </h2>
                                <p className="is-white text-size-xlarge margin-vertical margin-large">
                                    Changex’s non-custodial wallet provides you with a fiat-crypto on-ramp, an ever-growing list of assets, and passive income like never before. Your keys, your crypto - always.
                                </p>
                            </div>
                            <div className="button-group centered-items margin-top margin-large spread align-left">
                                <button
                                    className="button is-lime-background"
                                ><a
                                    target="_blank"
                                    rel="noreferrer"
                                    href="https://apps.apple.com/bg/app/changex-wallet/id1613309180"

                                >
                                    <img
                                        src={DownloadApple}
                                        alt="Apple"
                                        loading="lazy"
                                    ></img>
                                </a>
                                </button>
                                <button
                                    className="button is-lime-background"
                                ><a
                                    target="_blank"
                                    rel="noreferrer"
                                    href="https://play.google.com/store/apps/details?id=io.changex.app"
                                >
                                    <img
                                        src={DownloadGoogle}
                                        alt="Google"
                                        loading="lazy"
                                    ></img>
                                </a>
                                </button>
                            </div>
                        </div>
                        <div className="cta-image">
                            <img
                                src={"/assets/images/cta/image_cta.png"}
                                alt={"cta"}
                            ></img>
                            <button
                                onClick={openModal}
                                className="button is-qr-cta w-inline-block"
                            >
                                <img
                                    src="/assets/images/download-qr.svg"
                                    loading="lazy"
                                    width="75"
                                    alt="Changex QR code"
                                    className="qr-small-cta"
                                ></img>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Modal open={showModal}>
                <ScanQrModal
                    className="section-scanpopup wf-section"
                    showModal={showModal}
                    setShowModal={setShowModal}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                ></ScanQrModal>
            </Modal>
        </section>
    );
}

import * as React from "react";
import { logos } from "../../constants/press/pressItems";

export default function Press() {
    return (
        <section className="section_press animate__animated animate__fadeInUp">
            <div className="padding-global">
                <div className="container-large">
                    <div className="slide-from-bottom">
                        <h3 className="heading-style-h6 margin-bottom text-align-center margin-medium">
                            As seen on
                        </h3>
                        <div className="logo-group r-marquee">
                            <div className="logos-wrapper r-marquee-wrapper-left">
                                {logos.map((logo, index) => {
                                    return (
                                        <a
                                            key={index}
                                            href={logo.href}
                                            id={index.toString()}
                                            className="logo-link w-inline-block"
                                        >
                                            <img
                                                src={logo.src}
                                                loading="lazy"
                                                width="250"
                                                alt={logo.name}
                                                className="logo-max-width-200"
                                            ></img>
                                        </a>
                                    );
                                })}
                            </div>
                            <div className="logos-wrapper r-marquee-wrapper-left">
                                {logos.map((logo, index) => {
                                    return (
                                        <a
                                            key={index}
                                            href={logo.href}
                                            id={index.toString()}
                                            className="logo-link w-inline-block"
                                        >
                                            <img
                                                src={logo.src}
                                                loading="lazy"
                                                width="250"
                                                alt={logo.name}
                                                className="logo-max-width-200"
                                            ></img>
                                        </a>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

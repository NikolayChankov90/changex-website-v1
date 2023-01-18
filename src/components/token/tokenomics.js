import * as React from 'react';
import { Pie } from '@ant-design/plots';

import TokenomicsTable from "./TokenomicsTable";
import Banner from "../Banner";
import {bannerLogos, bannerTitleTokenomics} from "./tokenPageItems";

export default function Tokenomics({ background, tokenData}) {
    const data = tokenData.chart;

    const config = {
        appendPadding: 10,
        data,
        theme: 'dark',
        class: 'pieChartToken',
        fontFamily: 'Lexend',
        angleField: 'value',
        colorField: 'type',
        radius: 0.8,
        innerRadius: 0.8,
        meta: {
            value: {
                formatter: (v) => `${v}M`,
            },
        },
        label: {
            type: 'inner',
            offset: '0%',
            autoRotate: false,
            style: {
                textAlign: 'center',
                fill: '#fff',
            },
            formatter: ' ',
        },
        statistic: {
            title: {
                offsetY: -4
            },
            customHtml: (container, view, datum) => {
                return `<div>Total Supply</div>`
            },
            content: {
                title: 'Total Supply',
                style: {
                    color: '#fff'
                },
                offsetY: -4,
            },
        },
        pieStyle: {
            lineWidth: 0,
        },
        legend: false
    };
    return (
        <section id="tokenomics" className={background}>
            <div className="padding-global">
                <div className="container-large">
                    <h4 className={`${background === "background-color-black" ? "is-lime" : "blue" } heading-style-h6 margin-vertical margin-large`}>
                        {tokenData.head2}
                    </h4>
                    <h3 className={`${background === "background-color-black" ? "white" : "blue"} heading-style-h3 margin-vertical margin-large`}>
                        {tokenData.head}
                    </h3>
                    <div className="grid-2-chart">
                        <div className="pieChart">
                            <Pie {...config} />
                            <div className="social-tokenomics">
                                <div className="font-paragraph text-size-regular social-tokenomics text-cut-off">
                                        Learn More:
                                </div>
                                {tokenData.learnMore.map((item, index) => {
                                    return (
                                        <a href={item.link} target="_blank" rel="noreferrer">
                                            <img  alt={item.title} style={{padding: "0 10px"}} id={index.toString()} key={index} src={item.img}/>
                                        </a>
                                    )
                                })}
                            </div>
                        </div>
                        <div>
                            <TokenomicsTable />
                        </div>
                    </div>
                    <div className="margin-top-medium">
                        <Banner  title={bannerTitleTokenomics} backgroundClass={'tokenomicsImgBanner'} logos={bannerLogos} />
                    </div>
                </div>
            </div>
        </section>
    )
}

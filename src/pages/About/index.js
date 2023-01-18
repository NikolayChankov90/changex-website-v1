import * as React from "react";

import MetaDecorator from "../../Utils/MetaDecorator";
import AboutHero from "../../components/hero/aboutHero";
import Perks from "../../components/perks";
import ThoughtWall from "../../components/thoughtWall";
import Team from "../../components/team/team";
import Roadmap from "../../components/roadmap";
import Cta from "../../components/cta/cta";

import { heroObj, roadMapAboutData } from "../../constants/aboutPage/aboutItems";
import { teamAdvisorsData, teamExpertsData, titleAdvisorsObj, titleExpertsObj } from "../../constants/team/teamItems";

const imageUrl = "/images/Changex-OG.jpeg";

const thoughtObj = {
    page: 'About',
    title: '',
    image: '/assets/images/about/thought-catalog.png',
    className: "about",
    link: 'Change starts now.',
    p1:  'We leave out the tech and the complications, placing a formidable suite of financial tools safely in your pocket. All this in pursuit of better finance, and thus - better life.',
    p2:  'Go and make the most of it - we’ll be with you every step of the way.'
}

export default function About(){
    return (
        <>
            <MetaDecorator
                description={heroObj.titleObj.h3}
                title={heroObj.titleObj.h2}
                imageAlt="Changex Bank"
                imageUrl={imageUrl}
            />
            <AboutHero heroObj={ heroObj }/>
            <div className="padding-global-top">
                <div className="container-large ">
                    <Perks perksArray={heroObj.perks}/>
                </div>
            </div>
            <section id="about">
                <ThoughtWall thoughtObj={ thoughtObj }/>
                <Team titleObj={titleExpertsObj} teamData={teamExpertsData}/>
                <Team titleObj={titleAdvisorsObj} teamData={teamAdvisorsData}/>
                <Roadmap background={'background-color-black'} roadmapData={roadMapAboutData}/>
                <Cta/>
            </section>
        </>
    )
}

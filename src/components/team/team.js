import * as React from "react";
import { Avatar } from "rsuite";
import { CardActions, CardHeader, Collapse } from "@mui/material";
import Card from "@mui/material/Card";

import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import ExpandableItem from "../ExpandableItem";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import LinkedinLogo from "../../../static/assets/images/social/linkedIn.svg";


export default function Team({ titleObj, teamData }) {

    return (
        <div id="section_team">
            <div className="padding-global">
                <div className="container-large animate__animated animate__fadeInUp">
                    <h5 className="heading-style-h7 margin-vertical margin-large blue">
                        {titleObj.head2}
                    </h5>
                    <h3 className="heading-style-h3 margin-vertical margin-large">
                        {titleObj.head}
                    </h3>
                    <p className="margin-vertical margin-large">
                        <strong>{titleObj.paragraph}</strong>
                    </p>
                    <div className="w-layout-grid grid-3">
                        {teamData.map((item, index) => {
                            return (
                                <ExpandableItem
                                    key={index}
                                    className="margin-large"
                                    render={(props) => (
                                        <>
                                            <Card
                                                className={`${
                                                    props.open ? "" : "max-height-card"
                                                } aboutCardWrapper`}
                                            >
                                                <CardHeader
                                                    className="cardHeader"
                                                    avatar={
                                                        <Avatar className="teamAvatar" aria-label="avatar">
                                                            <img alt={item.name} src={item.src} />
                                                        </Avatar>
                                                    }
                                                    title={<Typography sx={{
                                                        fontFamily: "Lexend",
                                                        fontWeight: 600,
                                                        fontSize: "22px"}
                                                    }>{item.name}</Typography>}
                                                    titleTypographyProps={{variant:'h5'}}
                                                    subheader={<Typography sx={{
                                                        backgroundColor: '#8366F4',
                                                        borderRadius: 100,
                                                        padding: "5px 10px ",
                                                        width: "fit-content",
                                                        color: "#ffffff"}} className={`text-size-small`}>
                                                        {item.role}
                                                </Typography>}
                                                />
                                                <CardContent className="cardContent">
                                                    <Typography
                                                        variant="body2"
                                                        className={`${
                                                            !props.open && item.showMore
                                                                ? "cardContentTxt"
                                                                : ""
                                                        }`}
                                                    >
                                                        {item.about}
                                                    </Typography>
                                                    <Typography variant="body2" className="text-align-center">
                                                        <Collapse
                                                            in={props.open === true}
                                                            timeout="auto"
                                                            unmountOnExit
                                                        >
                                                            <Typography variant="body2">
                                                                {item.about2}
                                                            </Typography>
                                                        </Collapse>
                                                        {props.open ? (
                                                            <RemoveIcon
                                                                className={`${
                                                                    item.showMore ? "" : "hide"
                                                                } showMoreBtn`}
                                                                onClick={() => props.setOpen(!props.open)}
                                                            ></RemoveIcon>
                                                        ) : (
                                                            <AddIcon
                                                                className={`${
                                                                    item.showMore ? "" : "hide"
                                                                } showMoreBtn`}
                                                                onClick={() => props.setOpen(!props.open)}
                                                            ></AddIcon>
                                                        )}
                                                    </Typography>
                                                </CardContent>
                                                <CardActions>
                                                    <a
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        href={item.social}
                                                        className="button social-link w-inline-block button-lime"
                                                    >
                                                        <img
                                                            src={LinkedinLogo}
                                                            alt="changex linkedin"
                                                            loading="lazy"
                                                        ></img>
                                                    </a>
                                                </CardActions>
                                            </Card>
                                        </>
                                    )}
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

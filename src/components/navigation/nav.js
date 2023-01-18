import * as React from "react";
import { useEffect, useState } from "react";
import { Nav, Navbar } from "rsuite";
import { Link } from "react-router-dom";

import { Modal } from "@mui/material";
import { iconItems, menuItems, mobileIcon } from "../../constants/navBar/navItems";

import ChangeXLogoColor from "../../../static/assets/images/Logo_navigation.svg";
import QRBlack from "../../../static/assets/images/icn-qr-black.svg";
import MenuIcon from "../../../static/assets/images/Menu-Icon_1Menu Icon.png";
import {fetchApy, fetchPrice} from "../../../static/assets/js/fetch";
import coinsPrices from "../../../static/assets/js/coinsPrices";
import changexAPY from "../../../static/assets/js/changexAPY";
import {ScanQrModal} from "../../../static/assets/js/ScanQrCode";

export default function Navigation() {
    const [apy, setApy] = useState("$CHANGE");
    const [price, setPrice] = useState("$CHANGE");
    const [openNav, setIsNavOpen] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [activeKey, setActiveKey] = useState(null);


    useEffect( () => {
        if(window !== undefined) {
            window.addEventListener("resize", handleWindowResize);
        }

        fetchPrice().catch((err) => {
            console.log(`Fetch Price failed ${err}`);
        });

        fetchApy().catch((err) => {
            console.log(`Fetch Apy failed, ${err}`);
        });

        setTimeout(fetchPrice, fetchApy, 30000);

        setTimeout(()=> {
            setPriceAndApy();
        },5000)
    }, []);

    function handleWindowResize() {
        if (window !== undefined) {
            if (window.innerWidth >= 907) {
                setIsNavOpen(false);
            }
        }
    }

    function setPriceAndApy() {
        if (coinsPrices) {
            const changePrice = coinsPrices.filter(a => a.id === 'changex');
            if(changePrice.length > 0) {
                setPrice(changePrice[0].current_price.toFixed(4));
            }
        }

        if (changexAPY) {
            setApy(changexAPY);
        }
    }

    function openModal() {
        setShowModal(true);
    }

    function openNavDropDown() {
        setIsNavOpen((current) => !current);
    }

    return (
        <div
            id="navigation"
            className="nav_bar w-nav animate__animated animate__fadeInDown"
        >
            <div className="is-nav">
                <div className={"container-large"}>
                    <div className="is-nav navHeight">
                        <div className="nav_full-wrapper">
                            <Navbar className="nav_menu-links w-nav-menu navbar-main">
                                <Navbar.Brand href="/" className="nav_left-wrapper">
                                    <div className="nav_brandlink margin-right w-nav-brand">
                                        <Link to="/">
                                            <img
                                                src={ChangeXLogoColor}
                                                loading="lazy"
                                                alt="ChangeX Logo"
                                                className="nav_logo"
                                            ></img>
                                        </Link>
                                    </div>
                                </Navbar.Brand>
                                <Nav activeKey={activeKey} className={"hide-mobile-landscape"}>
                                    {menuItems.map((menu, index) => {
                                        return (
                                            <div
                                                key={index}
                                                className={`nav_menu-links navDisplay ${
                                                    menu.hasLine ? "navItemBorder" : ""
                                                }`}
                                                id={index.toString()}
                                            >
                                                <Nav.Item className={`${activeKey === menu.id ? 'active' : ''}`}>
                                                    <Link onClick={()=> {setActiveKey(menu.id )}} to={menu.url} eventkey={index.toString()}>
                                                        {menu.title}
                                                    </Link>
                                                </Nav.Item>
                                            </div>
                                        );
                                        /* }*/
                                    })}
                                </Nav>
                            </Navbar>

                            <div className="nav_right-wrapper">
                                <div className="nav_stats-wrapper">
                                    <div className="padding-small">
                                        <div
                                            id="changexPrice"
                                            className="text-size-tiny changexprice "
                                        >
                                            <span>$CHANGE:</span>
                                            <a
                                                target="_blank"
                                                rel="noreferrer"
                                                className="price-highlight"
                                                href="https://www.coingecko.com/en/coins/changex"
                                            >
                        <span>
                          {" "}
                            ${price}
                            <img
                                alt="changex coingecko"
                                className="coingecko"
                                src="/assets/images/external_link.svg"
                            />
                        </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="nav_stats-wrapper">
                                    <div className="padding-small">
                                        <div
                                            id="changexApy"
                                            className="text-size-tiny text-color-black changexapy"
                                        >
                                            <span>APY:</span>
                                            <strong> {apy}%</strong>
                                        </div>
                                    </div>
                                </div>
                                <ul className="nav_download-wrapper w-list-unstyled hide-mobile-landscape">
                                    {iconItems.map((icon, index) => {
                                        return (
                                            <li key={index} id={index.toString()} className="nav_download-item">
                                                <a href={icon.href} className={icon.class}>
                                                    <img
                                                        src={icon.src}
                                                        alt="changex icon"
                                                        loading="lazy"
                                                        width="21"
                                                    ></img>
                                                </a>
                                            </li>
                                        );
                                    })}
                                    <li
                                        onClick={openModal}
                                        role="button"
                                        id="qrcode"
                                        className="nav_download-item"
                                    >
                                        <div className="nav_download-btn w-inline-block">
                                            <img
                                                src={QRBlack}
                                                alt="changex qr"
                                                loading="lazy"
                                                width="21"
                                            ></img>
                                        </div>
                                    </li>
                                </ul>
                                <div
                                    className="menu-button w-nav-button"
                                    aria-label="menu"
                                    role="button"
                                    tabIndex="0"
                                    aria-controls="w-nav-overlay-0"
                                    aria-haspopup="menu"
                                >
                                    <a  onClick={openNavDropDown}>
                                        <img
                                            src={MenuIcon}
                                            width="20"
                                            alt="changex qr"
                                            className="menu-icon"
                                        ></img>
                                    </a>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {openNav && (
                    <div className="w_nav-overlay">
                        <nav
                            role="navigation"
                            className="nav_menu-links-mobile"
                            data-nav-menu-open=""
                        >
                            <Navbar className="navbar-main w-nav-menu">
                                <Nav activeKey={activeKey} className="rs-navbar-mobile">
                                    {menuItems.map((menu, index) => {
                                        return (
                                            <div
                                                key={index}
                                                className="mobileNavBtns navDisplay"
                                                id={index.toString()}
                                            >
                                                <Nav.Item  className={`${activeKey === menu.id ? 'active' : ''}`} onClick={openNavDropDown}>
                                                    <Link  onClick={()=> {setActiveKey(menu.id )}} to={menu.url} eventKey={index.toString()}>
                                                        {menu.title}
                                                    </Link>
                                                </Nav.Item>
                                            </div>
                                        );
                                        /*}*/
                                    })}
                                </Nav>
                            </Navbar>
                            <div className="infotainment">
                                <div className="nav_right-wrapper margin-top margin-huge">
                                    <div className="button-group centered-items margin-top margin-large spread max-width-full-mobile-landscape">
                                        {mobileIcon.map((icon, index) => {
                                            return (
                                                <a
                                                    key={index}
                                                    href={icon.href}
                                                    id={icon.id}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="button is-store max-width-full-mobile-landscape w-inline-block"
                                                >
                                                    <img
                                                        src={icon.src}
                                                        loading="lazy"
                                                        alt={icon.id}
                                                        width="150"
                                                    ></img>
                                                </a>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                )}
                <Modal id="modal" open={showModal}>
                    <ScanQrModal
                        className="section-scanpopup wf-section"
                        showModal={showModal}
                        setShowModal={setShowModal}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    ></ScanQrModal>
                </Modal>
            </div>
        </div>
    );
}

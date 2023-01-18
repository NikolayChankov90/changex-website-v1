import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";


const ReactPrimaryButton = styled(Button)({
    boxShadow: 'none',
    borderRadius: "8px",
    textTransform: 'none',
    fontSize: 20,
    fontWeight: 600,
    lineHeight: 1.5,
    backgroundColor: '#3418D8',
    fontFamily: [
        'Source Sans Pro'
    ].join(','),
    '&:hover': {
        backgroundColor: '#7D6BE6',
        boxShadow: 'none',
        color: "#ffffff",
        border: 'none'
    },
    '&:active': {
        boxShadow: 'none',
        backgroundColor: '#26129D',
        outline: 'none',
        color: "#ffffff",
    },
    '&:focus': {
        boxShadow: 'none',
        outline: 'none'
    },
});

export  function PrimaryButton({text,url, icon}) {
    return (
        <ReactPrimaryButton href={url} variant="contained" size="large" endIcon={icon}>
            {text}
        </ReactPrimaryButton>
    );
}

const PrimaryButtonRoutes = styled(Button)({
    boxShadow: 'none',
    borderRadius: "8px",
    textTransform: 'none',
    fontSize: 20,
    fontWeight: 600,
    lineHeight: 1.5,
    color: '#ffffff',
    backgroundColor: '#3418D8',
    fontFamily: [
        'Source Sans Pro'
    ].join(','),
    '&:hover': {
        backgroundColor: '#7D6BE6',
        boxShadow: 'none',
        color: "#ffffff",
        border: 'none'
    },
    '&:active': {
        boxShadow: 'none',
        backgroundColor: '#26129D',
        outline: 'none',
        color: "#ffffff",
    },
    '&:focus': {
        boxShadow: 'none',
        outline: 'none'
    },
});

export function PrimaryButtonRoute({text,url}) {
    return (
        <PrimaryButtonRoutes variant="contained" size="large">
            <Link className="routesBtn" to={url}>
                {text}
            </Link>
        </PrimaryButtonRoutes>
    );
}


const ReactPurpleButton = styled(Button)({
    boxShadow: 'none',
    borderRadius: "8px",
    textTransform: 'none',
    fontSize: 20,
    fontWeight: 600,
    lineHeight: 1.5,
    backgroundColor: '#8366F4',
    fontFamily: [
        'Source Sans Pro'
    ].join(','),
    '&:hover': {
        backgroundColor: '#AD9AF7',
        boxShadow: 'none',
        color: "#ffffff",
        border: 'none'
    },
    '&:active': {
        boxShadow: 'none',
        backgroundColor: '#5540AE',
        outline: 'none',
        color: "#ffffff",
    },
    '&:focus': {
        boxShadow: 'none',
        backgroundColor: '#5540AE',
        outline: 'none',
        color: "#ffffff",
    },
});

export function PurpleButton({text,url}) {
    return (
        <ReactPurpleButton href={url} variant="contained" size="large">
            {text}
        </ReactPurpleButton>
    );
}

const PurpleButtonRoutes = styled(Button)({
    boxShadow: 'none',
    borderRadius: "8px",
    textTransform: 'none',
    fontSize: 20,
    fontWeight: 600,
    lineHeight: 1.5,
    backgroundColor: '#8366F4',
    fontFamily: [
        'Source Sans Pro'
    ].join(','),
    '&:hover': {
        backgroundColor: '#AD9AF7',
        boxShadow: 'none',
        color: "#ffffff",
        border: 'none'
    },
    '&:active': {
        boxShadow: 'none',
        backgroundColor: '#5540AE',
        outline: 'none',
        color: "#ffffff",
    },
    '&:focus': {
        boxShadow: 'none',
        backgroundColor: '#5540AE',
        outline: 'none',
        color: "#ffffff",
    },
});

export function PurpleButtonRoute({text,url, size}) {
    return (
        <PurpleButtonRoutes variant="contained" size={size}>
            <Link className="routesBtn" to={url}>
                {text}
            </Link>
        </PurpleButtonRoutes>
    );
}

const ReactLimeButton = styled(Button)({
    boxShadow: 'none',
    borderRadius: "8px",
    textTransform: 'none',
    fontSize: 18,
    fontWeight: 600,
    lineHeight: 1.5,
    backgroundColor: '#E0FB92',
    color: '#141414',
    fontFamily: [
        'Source Sans Pro'
    ].join(','),
    '&:hover': {
        backgroundColor: '#CEF953',
        boxShadow: 'none',
        outline: 'none',
        textDecoration: 'none',
        color: "#141414",
        border: 'none'
    },
    '&:active': {
        boxShadow: 'none',
        backgroundColor: '#A7DD08',
        outline: 'none',
        textDecoration: 'none',
        color: "#141414",
    },
    '&:focus': {
        boxShadow: 'none',
        backgroundColor: '#A7DD08',
        color: "#141414",
        outline: 'none',
        textDecoration: 'none',
    },
});

export  function LimeButton({text, url, size}) {
    return (
        <ReactLimeButton href={url} variant="contained" size={size}>
            {text}
        </ReactLimeButton>
    );
}


const ReactPinkButton = styled(Button)({
    boxShadow: 'none',
    borderRadius: "8px",
    textTransform: 'none',
    fontSize: 16,
    fontWeight: 600,
    lineHeight: 1.5,
    backgroundColor: '#EBE8FC',
    color: '#3418D8',
    fontFamily: [
        'Source Sans Pro'
    ].join(','),
    '&:hover': {
        backgroundColor: '#AD9AF7',
        boxShadow: 'none',
        color: "#3418D8",
        textDecoration: 'none',
        border: 'none'
    },
    '&:active': {
        boxShadow: 'none',
        backgroundColor: '#5540AE',
        outline: 'none',
        textDecoration: 'none',
        color: "#3418D8",
    },
    '&:focus': {
        boxShadow: 'none',
        backgroundColor: '#5540AE',
        outline: 'none',
        textDecoration: 'none',
        color: "#3418D8",
    },
});

export  function PinkButton({text, url, size}) {
    return (
        <ReactPinkButton href={url} variant="contained" size={size}>
            {text}
        </ReactPinkButton>
    );
}

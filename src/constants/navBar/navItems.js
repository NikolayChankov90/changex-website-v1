import AppleBlackIcon from "../../../static/assets/images/icn-apple-black.svg";
import PlaystoreBlackIcon from "../../../static/assets/images/icn-playstore-black.svg";
import AppleIcon from "../../../static/assets/images/DW-Apple.svg";
import GoogleIcon from "../../../static/assets/images/DW-Google.svg";

export const menuItems = [
    {
        title: 'Wallet',
        url: '/wallet',
        id: 'wallet',
        className: 'nav_menu-links w-nav-menu',
        dropdown: true,
        footer: true,
        submenu: []
    },
    {
        title: 'Bank',
        url: '/bank',
        id: 'bank',
        className: 'nav_menu-links w-nav-menu',
        dropdown: true,
        hasLine: false,
        footer: true,
        submenu: []
    },
    {
        title: 'Wealth',
        url: '/wealth',
        id: 'wealth',
        className: 'nav_menu-links w-nav-menu',
        dropdown: true,
        hasLine: false,
        footer: true,
        submenu: []
    },
    {
        title: 'CHANGE token',
        url: '/token-page',
        id: 'token-page',
        className: 'nav_menu-links w-nav-menu',
        hasLine: true,
        footer: true,
        submenu: []
    },
    {
        title: 'About',
        url: '/about',
        id: 'about',
        className: 'nav_menu-links w-nav-menu',
        hasLine: false,
        submenu: []
    }
];

export const iconItems = [
    {
        src: AppleBlackIcon,
        href: 'https://apps.apple.com/bg/app/changex-wallet/id1613309180' ,
        class: 'nav_download-btn w-inline-block',
        parentClass: 'nav_download-item',
        id: 'apple'
    },
    {
        src: PlaystoreBlackIcon,
        href: 'https://play.google.com/store/apps/details?id=io.changex.app',
        class: 'nav_download-btn w-inline-block',
        parentClass: 'nav_download-item',
        id: 'google'
    }
]

export const mobileIcon = [
    {
        src: AppleIcon,
        href: 'https://apps.apple.com/bg/app/changex-wallet/id1613309180' ,
        class: 'nav_download-btn w-inline-block',
        parentClass: 'nav_download-item',
        id: 'apple'
    },
    {
        src: GoogleIcon,
        href: 'https://play.google.com/store/apps/details?id=io.changex.app',
        class: 'nav_download-btn w-inline-block',
        parentClass: 'nav_download-item',
        id: 'google'
    }
]


export const menuItemsFooter = [
    {
        title: 'Wallet',
        url: '/wallet',
        id: 'wallet',
        className: 'nav_menu-links w-nav-menu',
        dropdown: true,
        footer: true,
        submenu: []
    },
    {
        title: 'Bank',
        url: '/bank',
        id: 'bank',
        className: 'nav_menu-links w-nav-menu',
        dropdown: true,
        hasLine: false,
        footer: true,
        submenu: []
    },
    {
        title: 'Wealth',
        url: '/wealth',
        id: 'wealth',
        className: 'nav_menu-links w-nav-menu',
        dropdown: true,
        hasLine: false,
        footer: true,
        submenu: []
    },
    {
        title: 'CHANGE token',
        url: '/token-page',
        id: 'token-page',
        className: 'nav_menu-links w-nav-menu',
        hasLine: true,
        footer: true,
        submenu: []
    },
    {
        title: 'Suppported Tokens',
        url: '/supported-tokens',
        id: 'supported-tokens',
        className: 'nav_menu-links w-nav-menu',
        hasLine: false,
        footer: true,
        submenu: []
    },
    {
        title: 'Become A Partner',
        url: '/partner',
        id: 'partner',
        className: 'nav_menu-links w-nav-menu',
        hasLine: false,
        footer: true,
        submenu: []
    },
    {
        title: 'About',
        url: '/about',
        id: 'about',
        className: 'nav_menu-links w-nav-menu',
        hasLine: false,
        submenu: []
    }
];

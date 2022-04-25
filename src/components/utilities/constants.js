import ps5_logo from "../../assets/ps5_logo.png";
import ps4_logo from "../../assets/ps4_logo.png";
import psvr_logo from "../../assets/psvr_logo.png";
import psplus_logo from "../../assets/psplus_logo.png";
import psnow_logo from "../../assets/psnow_logo.png";
import buy_games from "../../assets/buy_games.png";
import ps4pro_logo from "../../assets/ps4pro_logo.png";
import ps_blog from "../../assets/ps_blog.png";
import ps_calendar from "../../assets/ps_calendar.png";
import ps_merchandise from "../../assets/ps_merchandise.png";
import ps_support from "../../assets/ps_support.png";
import ps_home from "../../assets/ps_home.png";

export const header_options = [
    {
        name: "Games",
        cards: [
            {
                img: ps5_logo,
                title: "PS5"
            },
            {
                img: ps4_logo,
                title: "PS4"
            },
            {
                img: psvr_logo,
                title: "PS VR"
            },
            {
                img: psplus_logo,
                title: "PS Plus"
            },
            {
                img: psnow_logo,
                title: "PS Now"
            },
            {
                img: buy_games,
                title: "Buy Games"
            }
        ],
        li: [
            "PlayStation Indies",
            "PS4 games on PS5",
            "Free to Play",
            "Deals & offers"
        ]
    },
    {
        name: "Hardware",
        cards: [
            {
                img: ps5_logo,
                title: "PS5"
            },
            {
                img: ps4_logo,
                title: "PS4"
            },
            {
                img: ps4pro_logo,
                title: "PS4 Pro"
            },
            {
                img: psvr_logo,
                title: "PS VR"
            }
        ],
        li: [
            "DualSense wireless controller",
            "Pulse 3D headset",
            "PS5 accessories",
            "PlayStation VR2",
            "PS4 accessories"
        ]
    },
    {
        name: "Services",
        cards: [
            {
                img: psplus_logo,
                title: "PS Plus"
            },
            {
                img: psnow_logo,
                title: "PS Now"
            }
        ],
        li: [
            "PS5 entertainment",
            "PS4 entertainment"
        ]
    },
    {
        name: "News",
        cards: [
            {
                img: ps_blog,
                title: "PS Blog"
            },
            {
                img: ps_calendar,
                title: "This Month on PlayStation"
            }
        ],
        li: [
            "Competition Center",
            "Accessibility"
        ]
    },
    {
        name: "Shop",
        cards: [
            {
                img: ps4pro_logo,
                title: "Hardware and Discs"
            },
            {
                img: buy_games,
                title: "Digital Games and Services"
            },
            {
                img: ps_merchandise,
                title: "Official Merchandise"
            }
        ],
        li: [
            "Buy PS5 games",
            "Buy PS4 games",
            "Buy PlayStation Plus",
            "Buy PS4",
            "Buy PS VR"
        ]
    },
    {
        name: "Support",
        cards: [
            {
                img: ps_support,
                title: "Support"
            },
            {
                img: ps_home,
                title: "PSN Status"
            }
        ],
        li: []
    }
];
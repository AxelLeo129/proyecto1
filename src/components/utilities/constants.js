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

import mlb from "../../assets/mlb-the-show-22.webp";
import mlb_logo from "../../assets/mlb-the-show-22-logo.png";
import lego from "../../assets/lego.webp";
import lego_logo from "../../assets/lego-logo.png";
import horizon from "../../assets/horizon.jpg";
import horizon_logo from "../../assets/horizon-logo.png";
import gran_turismo from "../../assets/gran-turismo.jpg";
import gran_turismo_logo from "../../assets/gran-turismo-logo.png";
import ghostwire from "../../assets/ghostwire.webp";
import ghostwire_logo from "../../assets/ghostwire-logo.png";

export const header_options = [
  {
    name: "Games",
    cards: [
      {
        img: ps5_logo,
        title: "PS5",
      },
      {
        img: ps4_logo,
        title: "PS4",
      },
      {
        img: psvr_logo,
        title: "PS VR",
      },
      {
        img: psplus_logo,
        title: "PS Plus",
      },
      {
        img: psnow_logo,
        title: "PS Now",
      },
      {
        img: buy_games,
        title: "Buy Games",
      },
    ],
    li: [
      "PlayStation Indies",
      "PS4 games on PS5",
      "Free to Play",
      "Deals & offers",
    ],
  },
  {
    name: "Hardware",
    cards: [
      {
        img: ps5_logo,
        title: "PS5",
      },
      {
        img: ps4_logo,
        title: "PS4",
      },
      {
        img: ps4pro_logo,
        title: "PS4 Pro",
      },
      {
        img: psvr_logo,
        title: "PS VR",
      },
    ],
    li: [
      "DualSense wireless controller",
      "Pulse 3D headset",
      "PS5 accessories",
      "PlayStation VR2",
      "PS4 accessories",
    ],
  },
  {
    name: "Services",
    cards: [
      {
        img: psplus_logo,
        title: "PS Plus",
      },
      {
        img: psnow_logo,
        title: "PS Now",
      },
    ],
    li: ["PS5 entertainment", "PS4 entertainment"],
  },
  {
    name: "News",
    cards: [
      {
        img: ps_blog,
        title: "PS Blog",
      },
      {
        img: ps_calendar,
        title: "This Month on PlayStation",
      },
    ],
    li: ["Competition Center", "Accessibility"],
  },
  {
    name: "Shop",
    cards: [
      {
        img: ps4pro_logo,
        title: "Hardware and Discs",
      },
      {
        img: buy_games,
        title: "Digital Games and Services",
      },
      {
        img: ps_merchandise,
        title: "Official Merchandise",
      },
    ],
    li: [
      "Buy PS5 games",
      "Buy PS4 games",
      "Buy PlayStation Plus",
      "Buy PS4",
      "Buy PS VR",
    ],
  },
  {
    name: "Support",
    cards: [
      {
        img: ps_support,
        title: "Support",
      },
      {
        img: ps_home,
        title: "PSN Status",
      },
    ],
    li: [],
  },
];

export const principal_sliders = [
  {
    id: 1,
    banner: mlb,
    logo: mlb_logo,
    title: "Own The Show™",
    text: "Every pitch. Every hit. Every win. Make your mark and Own The Show in MLB® The Show™ 22, out now on PS4 & PS5",
    top: '30%'
  },
  {
    id: 2,
    banner: lego,
    logo: lego_logo,
    title: "All nine films. One new game.",
    text: "Play through all nine Star Wars saga films in a brand-new LEGO video game unlike any other, out now on PS4 & PS5",
    top: '25%'
  },
  {
    id: 3,
    banner: horizon,
    logo: horizon_logo,
    title: "Rise above our ruin",
    text: "Join Aloy as she braves the Forbidden West - a majestic but dangerous frontier that conceals mysterious new threats.",
    top: '25%'
  },
  {
    id: 4,
    banner: gran_turismo,
    logo: gran_turismo_logo,
    title: "Find your line",
    text: "Gran Turismo 7 builds on generations of racing sim experience to bring you the best features from the history of the franchise.",
    top: '10%'
  },
  {
    id: 5,
    banner: ghostwire,
    logo: ghostwire_logo,
    title: "Face the unknown",
    text: "Experience the mysterious events within Tango Gameworks’ highly anticipated action-adventure game, Ghostwire: Tokyo, out now on PS5",
    top: '30%'
  },
];

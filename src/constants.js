export const COLORS = {
  white: { hex: "#fff" },
  neutral_grey: { hex: "#c8c9ca" },
  shadow: { hex: "#999999" },
  black: { hex: "#3B3938" },
  varsity_red: { hex: "#CE1D08" },
  royal_blue: { hex: "#0051b4" },
  storm_blue: { hex: "#255685" },
  unc_blue: { hex: "#039cd2" },
  metallic_red: {
    hex: "#e03e55",
    fill: "url(#metallic-red)",
    gradient: true,
    id: "metallic-red",
  },
  metallic_navy: {
    hex: "#1a4a73",
    fill: "url(#metallic-navy)",
    gradient: true,
    id: "metallic-navy",
  },
  metallic_purple: {
    hex: "#654575",
    fill: "url(#metallic-purple)",
    gradient: true,
    id: "metallic-purple",
  },
  metallic_green: {
    hex: "#07955c",
    fill: "url(#metallic-green)",
    gradient: true,
    id: "metallic-green",
  },
};

export const OTHER_COLORS = {
  black_dark: { hex: "#313131" },
  black_darker: { hex: "#000" },
};

export const OPTIONS = Object.keys(COLORS);

export const INITIAL_PALETTE = ["white", "white", "white", "white"];

export const PALETTE_LABELS = [
  { id: "toebox", label: "Toebox" },
  { id: "eyestay", label: "Eyestay" },
  { id: "logo", label: "Logo" },
  { id: "foxing", label: "Foxing" },
];

export const OG_COLORS = [
  ["white", "varsity_red", "black", "varsity_red"],
  ["white", "black", "black", "varsity_red"],
  ["varsity_red", "black", "varsity_red", "varsity_red"],
  ["royal_blue", "black", "royal_blue", "royal_blue"],
  ["shadow", "black", "shadow", "shadow"],
  ["white", "black", "black", "black"],
  ["white", "storm_blue", "storm_blue", "storm_blue"],
  ["white", "unc_blue", "unc_blue", "unc_blue"],
  ["white", "white", "neutral_grey", "white"],
  // ["white", "white", "metallic_red", "white"],
  // ["white", "white", "metallic_navy", "white"],
  // ["white", "white", "metallic_purple", "white"],
  // ["white", "white", "metallic_green", "white"],
];

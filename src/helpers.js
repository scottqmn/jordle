/* eslint-disable no-console */
import chroma from "chroma-js";
import { COLORS, OTHER_COLORS } from "./constants";

export const darkenHex = (hex) => chroma(hex).darken(0.4).hex();
export const brightenHex = (hex) => chroma(hex).brighten(2).hex();

export const getColorHex = (key, includeGradients) => {
  if (COLORS[key]) {
    if (includeGradients && COLORS[key].gradient) {
      return `linear-gradient(90deg, ${brightenHex(COLORS[key].hex)} 0%, ${
        COLORS[key].hex
      } 100%)`;
    }

    return COLORS[key].hex;
  }

  if (OTHER_COLORS[key]) {
    return OTHER_COLORS[key].hex;
  }

  console.warn("Invalid key:", key);
  return "#000";
};

export const getColorFill = (key) => {
  if (COLORS[key]) {
    return COLORS[key].fill || COLORS[key].hex;
  }

  if (OTHER_COLORS[key]) {
    return OTHER_COLORS[key].fill || OTHER_COLORS[key].hex;
  }

  console.warn("Invalid key:", key);
  return "#000";
};

export const darken = (key) => darkenHex(getColorHex(key));

export const getContrastColor = (bg) =>
  chroma.contrast(bg, "#fff") >= 4.5 ? "#fff" : "#000";

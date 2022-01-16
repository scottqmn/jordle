/* eslint-disable */
import { useMemo } from "react";
import PropTypes from "prop-types";
import AJ1SVG from "./AJ1SVG";
import { OPTIONS, INITIAL_PALETTE } from "../../../constants";
import { getColorFill, darken } from "../../../helpers";
import styles from "./styles.module.scss";

const isMetallicBlocking = (key) => {
  return [
    "neutral_grey",
    "metallic_red",
    "metallic_navy",
    "metallic_purple",
    "metallic_green",
  ].includes(key);
};

const Shoe = ({ palette = INITIAL_PALETTE }) => {
  const svgStyle = useMemo(() => {
    // Guesses
    const [
      toebox = INITIAL_PALETTE[0],
      eyestay = INITIAL_PALETTE[1],
      swoosh = INITIAL_PALETTE[2],
      foxing = INITIAL_PALETTE[3],
    ] = palette;

    let midfoot;
    if (foxing === swoosh && foxing !== "black" && eyestay === "black") {
      midfoot = "black";
    } else {
      midfoot = "white";
    }

    let collar;
    if (isMetallicBlocking(swoosh) && foxing === "white") {
      collar = swoosh;
    } else if (eyestay !== foxing) {
      // black/white colorblocking
      collar = "black";
    } else if (eyestay === "varsity_red") {
      // Chicago
      collar = "black";
    } else {
      collar = midfoot;
    }

    let lining;
    if (isMetallicBlocking(swoosh)) {
      lining = swoosh;
    } else if (eyestay === "varsity_red" && swoosh === "black") {
      // chicago
      lining = "black";
    } else {
      lining = eyestay;
    }

    let outsole;
    if (isMetallicBlocking(swoosh) && foxing === "white") {
      outsole = swoosh;
    } else if (foxing === "shadow" && foxing === swoosh) {
      outsole = "black";
    } else {
      outsole = foxing;
    }

    const tongue = midfoot;

    let tongueTag;
    if (eyestay === "varsity_red" && swoosh === "black") {
      tongueTag = eyestay;
    } else {
      tongueTag = tongue;
    }

    let wings;
    if (foxing === "black") {
      wings = "white";
    } else if (isMetallicBlocking(swoosh) && foxing === "white") {
      wings = swoosh;
    } else if (collar === "black" || foxing === "white") {
      wings = "black_dark";
    } else {
      wings = collar;
    }

    return {
      "--foxing-top": getColorFill(foxing),
      "--foxing-bottom": getColorFill(foxing),
      "--toebox-top": getColorFill(toebox),
      "--swoosh": getColorFill(swoosh),
      "--toebox-side": getColorFill(eyestay),
      "--laces-bottom": getColorFill(eyestay),
      "--laces-top": getColorFill(eyestay),
      // Derived
      "--collar": getColorFill(collar),
      "--lining": getColorFill(lining),
      "--midfoot": getColorFill(midfoot),
      "--outsole": getColorFill(outsole),
      "--tongue": getColorFill(tongue),
      "--tongue-tag": getColorFill(tongueTag),
      "--wings": getColorFill(wings),
      // Constants
      "--holes": getColorFill(
        eyestay === "black" ? "black_darker" : "black_dark"
      ),
      "--midsole": getColorFill("white"),
      // Strokes
      "--laces-bottom-stroke": darken(eyestay),
      "--laces-top-stroke":
        eyestay === midfoot || eyestay === collar ? darken(eyestay) : null,
      "--swoosh-stroke": swoosh === midfoot ? darken(swoosh) : null,
      "--foxing-bottom-stroke": foxing === midfoot ? darken(foxing) : null,
      "--foxing-top-stroke":
        foxing === collar || foxing === eyestay || foxing === midfoot
          ? darken(foxing)
          : null,
      "--toebox-side-stroke": eyestay === toebox ? darken(eyestay) : null,
      "--outsole-stroke":
        outsole === getColorFill("white") ? darken(outsole) : null,
      "--midsole-stroke":
        midfoot === "white" || eyestay === "white" || foxing === "white"
          ? darken("white")
          : null,
      "--midfoot-stroke": darken(midfoot),
    };
  }, [palette]);

  return (
    <div className={styles.outer} style={svgStyle}>
      <AJ1SVG />
    </div>
  );
};

Shoe.propTypes = {
  palette: PropTypes.arrayOf(PropTypes.oneOf(OPTIONS)),
};

export default Shoe;

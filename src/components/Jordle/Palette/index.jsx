/* eslint-disable react/no-array-index-key */
import { useState, useMemo } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import Swatch from "../Swatch";
import { OPTIONS } from "../../../constants";
import styles from "./styles.module.scss";

const Palette = ({ colors, setPreview }) => {
  const palette = useMemo(() => {
    return colors.map(({ value }) => value);
  }, [colors]);

  const [active, setActive] = useState(false);

  const handleMouseEnter = () => {
    setPreview(palette);
    setActive(true);
  };

  const handleMouseLeave = () => {
    setPreview();
    setActive(false);
  };

  return (
    <div
      className={clsx(styles.grid, active && styles.active)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {colors.map(({ value, status }, i) => (
        <Swatch key={i} value={value} status={status} />
      ))}
    </div>
  );
};

Palette.propTypes = {
  colors: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOf(OPTIONS),
      status: PropTypes.number,
    })
  ),
};

export default Palette;

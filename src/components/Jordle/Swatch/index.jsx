/* eslint-disable react/no-array-index-key */
import { useMemo } from "react";
import PropTypes from "prop-types";
import { COLORS, OPTIONS } from "../../../constants";
import { getColorHex, getContrastColor } from "../../../helpers";
import styles from "./styles.module.scss";
import AlmostSVG from "@mui/icons-material/PriorityHigh";
import CorrectSVG from "@mui/icons-material/Done";
import IncorrectSVG from "@mui/icons-material/Close";

const Swatch = ({ value, status, onClick }) => {
  const { color: statusColor, icon } = useMemo(() => {
    switch (status) {
      case 0:
        return { color: "gray", icon: <IncorrectSVG /> };
      case 1:
        return { color: "yellow", icon: <AlmostSVG /> };
      case 2:
        return { color: "green", icon: <CorrectSVG /> };
      default:
        return { color: "white", icon: null };
    }
  }, [status]);

  const background = getColorHex(value, true);
  const color = getContrastColor(getColorHex(value));
  const formattedName = value
    .split("_")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");

  const swatchNode = onClick ? (
    <button
      className={styles.inner}
      onClick={onClick}
      type="button"
      aria-label={formattedName}
      style={{ background, color }}
    >
      {icon}
    </button>
  ) : (
    <div
      className={styles.inner}
      style={{ background, color }}
      aria-label={formattedName}
    >
      {icon}
    </div>
  );

  return (
    <div className={styles.outer} style={{ backgroundColor: statusColor }}>
      {value ? swatchNode : null}
    </div>
  );
};

Swatch.propTypes = {
  value: PropTypes.oneOf(OPTIONS),
  status: PropTypes.number,
  onClick: PropTypes.func,
};

export default Swatch;

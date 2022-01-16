/* eslint-disable react/no-array-index-key */
import PropTypes from "prop-types";
import Swatch from "../Swatch";
import { OPTIONS } from "../../../constants";
import styles from "./styles.module.scss";

const Palette = ({ colors }) => (
  <div className={styles.grid}>
    {colors.map(({ value, status }, i) => (
      <Swatch key={i} value={value} status={status} />
    ))}
  </div>
);

Palette.propTypes = {
  colors: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.oneOf(OPTIONS),
      status: PropTypes.number,
    })
  ),
};

export default Palette;

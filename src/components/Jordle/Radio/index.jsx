import PropTypes from "prop-types";
import { OPTIONS } from "../../../constants";
import { getColorHex } from "../../../helpers";
import styles from "./styles.module.scss";

const Radio = ({ name, value, checked, onChange }) => {
  const background = getColorHex(value, true);
  const formattedName = value
    .split("_")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <div className={styles.outer}>
      <label className={styles.inner} style={{ background }}>
        <input
          type="radio"
          value={value}
          name={name}
          required
          checked={checked}
          onChange={onChange}
          aria-label={formattedName}
        />
      </label>
    </div>
  );
};

Radio.propTypes = {
  value: PropTypes.oneOf(OPTIONS),
  status: PropTypes.number,
  onChange: PropTypes.func,
};

export default Radio;

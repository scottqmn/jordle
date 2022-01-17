import PropTypes from "prop-types";
import Palette from "../Palette";
import styles from "./styles.module.scss";

const History = ({ guesses, setPreview }) => {
  return (
    <div className={styles.outer}>
      <div className={styles.header}>
        <div className={styles.label}>History</div>
      </div>

      <ul className={styles.list}>
        {guesses.map((guess, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <li key={index}>
            <Palette colors={guess} setPreview={setPreview} />
          </li>
        ))}
      </ul>
    </div>
  );
};

History.propTypes = {
  guesses: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.shape({ value: PropTypes.string, status: PropTypes.number })
    )
  ),
  setPreview: PropTypes.func,
};

export default History;

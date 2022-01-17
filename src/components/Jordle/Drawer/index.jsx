import PropTypes from "prop-types";
import styles from "./styles.module.scss";

const Drawer = ({ children }) => {
  return <div className={styles.outer}>{children}</div>;
};

Drawer.propTypes = {
  children: PropTypes.node,
};

export default Drawer;

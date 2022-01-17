import PropTypes from "prop-types";
import clsx from "clsx";
import styles from "./styles.module.scss";

const Button = ({ children, className, ...props }) => {
  return (
    <button type="button" className={clsx(styles.button, className)} {...props}>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.any,
};

export default Button;

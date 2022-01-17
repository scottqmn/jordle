import PropTypes from "prop-types";
import IconButton from "@mui/material/IconButton";
import PaletteOutlinedIcon from "@mui/icons-material/PaletteOutlined";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import styles from "./styles.module.scss";

const DrawerToggle = ({ state, toggle }) => {
  return (
    <IconButton
      className={styles.button}
      color="inherit"
      onClick={toggle}
      type="button"
      aria-label={state ? "Show inputs" : "Show history"}
    >
      {state ? <PaletteOutlinedIcon /> : <AccessTimeIcon />}
    </IconButton>
  );
};

DrawerToggle.propTypes = {
  state: PropTypes.bool,
  toggle: PropTypes.func,
};

export default DrawerToggle;

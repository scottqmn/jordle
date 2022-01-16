import { useState, useEffect, useMemo } from "react";
import PropTypes from "prop-types";
import IconButton from "@mui/material/IconButton";
import DoneSVG from "@mui/icons-material/Done";
import ArrowBackSVG from "@mui/icons-material/ArrowBack";
import ArrowForwardSVG from "@mui/icons-material/ArrowForward";
import Radio from "../Radio";
import { OPTIONS, PALETTE_LABELS } from "../../../constants";
import styles from "./styles.module.scss";

const MAX_STEPS = PALETTE_LABELS.length;

const Input = ({ palette, setColor, submitGuess }) => {
  const [step, setStep] = useState(0);
  const [activeRadio, setActiveRadio] = useState(null);

  useEffect(() => {
    setActiveRadio(palette[step]);
  }, [step]);

  const isFirstStep = useMemo(() => step === 0, [step]);
  const isLastStep = useMemo(() => step === MAX_STEPS - 1, [step]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isLastStep) {
      submitGuess();
      setStep(0);
    } else {
      setStep((curr) => curr + 1);
    }
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setActiveRadio(value);
    setColor(value, step);
  };

  return (
    <form className={styles.outer} onSubmit={handleSubmit}>
      <div className={styles.steps}>
        <IconButton
          className={styles.button}
          color="inherit"
          onClick={() => setStep((curr) => curr - 1)}
          type="button"
          disabled={isFirstStep}
          aria-label="Previous step"
        >
          <ArrowBackSVG />
        </IconButton>

        <div className={styles.label}>
          {PALETTE_LABELS[step].label}{" "}
          <span>
            {step + 1}/{MAX_STEPS}
          </span>
        </div>

        <IconButton
          className={styles.button}
          color="inherit"
          type={"submit"}
          aria-label={isLastStep ? "Submit" : "Next step"}
        >
          {isLastStep ? <DoneSVG /> : <ArrowForwardSVG />}
        </IconButton>
      </div>
      <div className={styles.grid}>
        {OPTIONS.map((value) => (
          <Radio
            key={value}
            name={PALETTE_LABELS[step].id}
            value={value}
            checked={activeRadio === value}
            onChange={handleChange}
          />
        ))}
      </div>
    </form>
  );
};

Input.propTypes = {
  palette: PropTypes.arrayOf(PropTypes.oneOf(OPTIONS)),
  setColor: PropTypes.func,
  submitGuess: PropTypes.func,
};

export default Input;

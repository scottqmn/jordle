import { useState, useContext, useEffect, useCallback } from "react";
import { OPTIONS, INITIAL_PALETTE } from "../../constants";
import styles from "./styles.module.scss";
import Shoe from "./Shoe";
import Input from "./Input";
import Palette from "./Palette";
import Anydle from "../../contexts/Anydle";

const ANSWER_LENGTH = 4;

const Jordle = () => {
  // Context values
  const { dispatch, state } = useContext(Anydle);

  const [activePalette, setActivePalette] = useState([]);

  const setColor = useCallback(
    (color, index) => {
      console.log("setting color");
      const nextPalette = [...activePalette];
      nextPalette[index] = color;
      setActivePalette(nextPalette);
    },
    [activePalette, dispatch]
  );

  const submitGuess = useCallback(() => {
    console.log("dispatch", activePalette);
    dispatch({ type: "ADD_GUESS", payload: activePalette });
    setActivePalette([]);
  }, [activePalette, setActivePalette, dispatch]);

  useEffect(() => {
    console.log("ue", activePalette);
  }, [activePalette]);

  const getRandomPalette = () => {
    const randomPalette = [];
    for (let i = 0; i < ANSWER_LENGTH; i += 1) {
      const randomIndex = Math.floor(Math.random() * OPTIONS.length);
      randomPalette.push(OPTIONS[randomIndex]);
    }
    return randomPalette;
  };

  const start = () => {
    const answer = getRandomPalette();
    dispatch({ type: "INIT", payload: answer });
  };

  return (
    <div className={styles.outer}>
      <div className={styles.inner}>
        <div>
          {state.initialized ? (
            <>
              <Shoe palette={activePalette} />
              <div>Answer:</div>
              <Palette colors={state.answer.map((value) => ({ value }))} />

              <Input
                palette={activePalette}
                setColor={setColor}
                submitGuess={submitGuess}
              />
            </>
          ) : (
            <button onClick={start} type="button">
              Start
            </button>
          )}
        </div>
        <div className={styles.palettes}>
          {state?.guesses.map((guess, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <Palette key={index} colors={guess} />
          ))}
        </div>
      </div>
    </div>
  );
};

Jordle.propTypes = {};

export default Jordle;

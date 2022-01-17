import { useState, useContext, useEffect, useCallback, useMemo } from "react";
import { OPTIONS, INITIAL_PALETTE, OG_COLORS } from "../../constants";
import styles from "./styles.module.scss";
import Button from "./Button";
import Shoe from "./Shoe";
import Input from "./Input";
import Palette from "./Palette";
import History from "./History";
import Drawer from "./Drawer";
import DrawerToggle from "./DrawerToggle";
import Anydle from "../../contexts/Anydle";

const ANSWER_LENGTH = 4;

const Jordle = () => {
  // Context values
  const { dispatch, state } = useContext(Anydle);

  const [showHistory, setShowHistory] = useState(false);
  const [activePalette, setActivePalette] = useState([]);
  const [guessPalette, setGuessPalette] = useState(null);

  const setColor = useCallback(
    (color, index) => {
      const nextPalette = [...activePalette];
      nextPalette[index] = color;
      setActivePalette(nextPalette);
    },
    [activePalette, dispatch]
  );

  const submitGuess = useCallback(() => {
    dispatch({ type: "ADD_GUESS", payload: activePalette });
    setActivePalette([]);
  }, [activePalette, setActivePalette, dispatch]);

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

  const [startIndex, setStartIndex] = useState(0);
  const incStartIndex = useCallback(() => {
    if (!state.initialized) {
      setStartIndex((curr) => (curr + 1) % OG_COLORS.length);
    }
  }, [setStartIndex, state.initialized]);

  useEffect(() => {
    const interval = setInterval(() => incStartIndex(), 1500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const palette = useMemo(() => {
    return state.initialized
      ? guessPalette || activePalette
      : OG_COLORS[startIndex];
  }, [state.initialized, startIndex, guessPalette, activePalette]);

  return (
    <div className={styles.outer}>
      <div className={styles.inner}>
        <div>
          <Shoe palette={palette} />
          {state.initialized ? (
            <>
              <DrawerToggle
                state={showHistory}
                toggle={() => setShowHistory((curr) => !curr)}
              />
            </>
          ) : (
            <Button onClick={start}>Start</Button>
          )}
        </div>
        <Drawer>
          {showHistory ? (
            <History guesses={state.guesses} setPreview={setGuessPalette} />
          ) : (
            <Input
              palette={activePalette}
              setColor={setColor}
              submitGuess={submitGuess}
            />
          )}
        </Drawer>
      </div>
    </div>
  );
};

Jordle.propTypes = {};

export default Jordle;

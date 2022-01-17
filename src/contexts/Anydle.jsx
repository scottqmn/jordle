import React, { createContext, useReducer } from "react";
import PropTypes from "prop-types";

const initialState = {
  initialized: false,
  answer: [],
  guesses: [
    // [
    //   { value: "white", status: 0 },
    //   { value: "white", status: 0 },
    //   { value: "white", status: 0 },
    //   { value: "white", status: 0 },
    // ],
    // [
    //   { value: "white", status: 0 },
    //   { value: "white", status: 0 },
    //   { value: "white", status: 0 },
    //   { value: "white", status: 0 },
    // ],
    // [
    //   { value: "white", status: 0 },
    //   { value: "white", status: 0 },
    //   { value: "white", status: 0 },
    //   { value: "white", status: 0 },
    // ],
    // [
    //   { value: "white", status: 0 },
    //   { value: "white", status: 0 },
    //   { value: "white", status: 0 },
    //   { value: "white", status: 0 },
    // ],
    // [
    //   { value: "white", status: 0 },
    //   { value: "white", status: 0 },
    //   { value: "white", status: 0 },
    //   { value: "white", status: 0 },
    // ],
    // [
    //   { value: "white", status: 0 },
    //   { value: "white", status: 0 },
    //   { value: "white", status: 0 },
    //   { value: "white", status: 0 },
    // ],
  ],
};

const Anydle = createContext(initialState);

const reducer = (state, action) => {
  switch (action.type) {
    case "INIT":
      console.log("starting", action.payload);
      return { ...initialState, initialized: true, answer: action.payload };
    case "RESET":
      console.log("resetting");
      return initialState;
    case "ADD_GUESS": {
      console.log("adding guess", action.payload);

      const guessWithHints = action.payload.map((value, index) => {
        let status = 0;
        const valueIndex = state.answer.findIndex((a) => a === value);
        if (valueIndex !== -1) {
          status = value === state.answer[index] ? 2 : 1;
        }
        return { value, status };
      });

      return { ...state, guesses: [...state.guesses, guessWithHints] };
    }

    default:
      // eslint-disable-next-line no-console
      console.log("Unhandled type:", action.type);
      return state;
  }
};

export const AnydleProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Anydle.Provider value={{ state, dispatch }}>{children}</Anydle.Provider>
  );
};

AnydleProvider.propTypes = {
  children: PropTypes.node,
};

export default Anydle;

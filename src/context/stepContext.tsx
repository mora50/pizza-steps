import {
  createContext,
  FC,
  useCallback,
  useContext,
  useMemo,
  useReducer,
} from "react";

interface State {
  pasta: string;
  flavor: string;
  step: number;
  points: number;
}

const initialState = {
  pasta: "",
  flavor: "",
  step: 1,
  points: 0,
};

type Payload = {
  value: any;
};

type Action =
  | {
      type: "ADD_PASTA";
      payload: Payload;
    }
  | {
      type: "ADD_FLAVOR";
      payload: Payload;
    }
  | {
      type: "CHANGE_STEP";
      payload: Payload;
    }
  | {
      type: "CHANGE_POINTS";
      payload: Payload;
    };

const StepContext = createContext<State | any>(initialState);

function stepReducer(state: State, action: Action) {
  switch (action.type) {
    case "ADD_PASTA": {
      return {
        ...state,
        pasta: action.payload.value,
      };
    }
    case "ADD_FLAVOR": {
      return {
        ...state,
        flavor: action.payload.value,
      };
    }
    case "CHANGE_STEP": {
      return {
        ...state,
        step: action.payload.value,
      };
    }

    case "CHANGE_POINTS": {
      return {
        ...state,
        points: action.payload.value,
      };
    }
  }
}

interface Value {
  addPasta: (pastaName: string) => void;
  changeStep: (step: number) => void;
  addFlavor: (step: string) => void;
  changePoints: (step: number) => void;
  state: State;
}

export const StepProvider: FC = ({ children }) => {
  const [state, dispatch] = useReducer(stepReducer, initialState);

  const addPasta = (pastaName: string) =>
    dispatch({ type: "ADD_PASTA", payload: { value: pastaName } });
  const addFlavor = (flavorName: string) =>
    dispatch({ type: "ADD_FLAVOR", payload: { value: flavorName } });
  const changeStep = (step: number) =>
    dispatch({ type: "CHANGE_STEP", payload: { value: step } });

  const changePoints = useCallback(
    (points: number) =>
      dispatch({ type: "CHANGE_POINTS", payload: { value: points } }),
    []
  );

  const value = useMemo(
    () => ({
      addPasta,
      addFlavor,
      changeStep,
      changePoints,
      state,
    }),
    [changePoints, state]
  );

  return <StepContext.Provider value={value}>{children}</StepContext.Provider>;
};

export const useStep = () => {
  const context = useContext<Value>(StepContext);
  if (context === undefined) {
    throw new Error(`useStep must be used within a StepProvider`);
  }
  return context;
};

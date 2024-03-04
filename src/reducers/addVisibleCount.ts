const initialState = {
  visibleCount: 0,
};

const INCREMENT = "INCREMENT" as const;
const DECREMENT = "DECREMENT" as const;

export const increase = () => ({
  type: INCREMENT,
});

export const decrease = () => ({
  type: DECREMENT,
});

type Action = ReturnType<typeof increase> | ReturnType<typeof decrease>;

type State = {
  visibleCount: number;
};

export default function addVisibleCount(
  state = initialState,
  action: Action
): State {
  switch (action.type) {
    case "INCREMENT":
      return { visibleCount: state.visibleCount + 1 };

    case "DECREMENT":
      return { visibleCount: state.visibleCount - 1 };

    default:
      return state;
  }
}

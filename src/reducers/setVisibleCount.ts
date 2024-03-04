const initialState = {
  visibleCount: 0,
};

const SET_VISIBLE_COUNT = "SET_VISIBLE_COUNT" as const;

export const set_visible_count = () => ({
  type: SET_VISIBLE_COUNT,
});

type Action = ReturnType<typeof set_visible_count>;

type State = {
  visibleCount: number;
};

export default function setVisibleCount(
  state = initialState,
  action: Action
): State {
  switch (action.type) {
    case "SET_VISIBLE_COUNT":
      return { visibleCount: state.visibleCount + 1 };

    default:
      return state;
  }
}

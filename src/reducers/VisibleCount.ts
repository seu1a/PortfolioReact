const initialState = {
  visibleCount: 0,
};

const SET_VISIBLE_COUNT = "SET_VISIBLE_COUNT" as const;

export const set_visible_count = (count: number) => ({
  type: SET_VISIBLE_COUNT,
  payload: {
    visibleCount: count,
  },
});

type State = {
  visibleCount: number;
};

export default function setVisibleCount(
  state = initialState,
  action: ReturnType<typeof set_visible_count>
): State {
  switch (action.type) {
    case "SET_VISIBLE_COUNT":
      return { visibleCount: action.payload.visibleCount };

    default:
      return state;
  }
}

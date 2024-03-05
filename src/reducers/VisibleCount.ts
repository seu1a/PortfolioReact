const initialState = {
  profileVisibleCount: 0,
  projectVisibleCount: 0,
};

const SET_PROFILE_VISIBLE_COUNT = "SET_PROFILE_VISIBLE_COUNT" as const;
const SET_PROJECT_VISIBLE_COUNT = "SET_PROJECT_VISIBLE_COUNT" as const;

export const set_profile_visible_count = (count: number) => ({
  type: SET_PROFILE_VISIBLE_COUNT,
  payload: {
    visibleCount: count,
  },
});

export const set_project_visible_count = (count: number) => ({
  type: SET_PROJECT_VISIBLE_COUNT,
  payload: {
    visibleCount: count,
  },
});

type Action =
  | ReturnType<typeof set_profile_visible_count>
  | ReturnType<typeof set_project_visible_count>;

type State = {
  profileVisibleCount: number;
  projectVisibleCount: number;
};

export default function setVisibleCount(
  state = initialState,
  action: Action
): State {
  switch (action.type) {
    case "SET_PROFILE_VISIBLE_COUNT":
      return { ...state, profileVisibleCount: action.payload.visibleCount };

    case "SET_PROJECT_VISIBLE_COUNT":
      return { ...state, projectVisibleCount: action.payload.visibleCount };

    default:
      return state;
  }
}

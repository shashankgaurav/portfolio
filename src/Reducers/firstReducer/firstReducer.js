import { FIRST_ACTION } from "../../Constants/Constant"

export const firstReducer = (state = [], action) => {
  console.log("Reducer is working")
  switch (action.type) {

  case FIRST_ACTION:
    return { ...state };

  default:
    return state
  }
};

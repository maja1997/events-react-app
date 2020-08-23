import { LISTEN_TO_CURRENT_USER_PROFILE, LISTEN_TO_SSELECTED_USER_PROFILE } from "./profileConstants";
import { stat } from "fs";

const initialState = {
  currentUserProfile: null,
  selectedUserProfile: null
}

export default function profileReducer(state=initialState, {type, payload}) {
  switch(type) {
    case LISTEN_TO_CURRENT_USER_PROFILE:
      return {
        ...state,
        currentUserProfile:payload
      }
      case LISTEN_TO_SSELECTED_USER_PROFILE:
        return {
          ...state,
          selectedUserProfile: payload
        }
      default:
        return state;
  }
}
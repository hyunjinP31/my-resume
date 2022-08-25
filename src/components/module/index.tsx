import { combineReducers } from "redux";
import util from "./util";

const rootReducer = combineReducers({ util });
export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
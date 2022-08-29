import { ActionType } from "typesafe-actions";
import * as actions from './action';

export type UtilAction = ActionType<typeof actions>

export type UtilState = {
    isOpen: {
        tempusOpen: Boolean;
        stratoOpen: Boolean;
        greenBooksOpen: Boolean;
        myResumeOpen: Boolean;
    }
}

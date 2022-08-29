import { UtilAction, UtilState } from "./type";
import { createReducer } from "typesafe-actions";
import { IS_OPEN_GREENBOOKS_DESC, IS_OPEN_MY_RESUME_DESC, IS_OPEN_STRATO_DESC, IS_TEMPUS_OPEN_DESC } from "./action";

const initialState: UtilState = {
    isOpen: {
        tempusOpen: false,
        stratoOpen: false,
        greenBooksOpen: false,
        myResumeOpen: false,
    }
}

const util = createReducer<UtilState, UtilAction>(initialState, {
    [IS_TEMPUS_OPEN_DESC]: state => ({
        ...state,
        isOpen: {
            ...state.isOpen,
            tempusOpen: !state.isOpen.tempusOpen,
        }
    }),
    [IS_OPEN_STRATO_DESC]: state => ({
        ...state,
        isOpen: {
            ...state.isOpen,
            stratoOpen: !state.isOpen.stratoOpen,
        }
    }),
    [IS_OPEN_GREENBOOKS_DESC]: state=> ({
        ...state,
        isOpen: {
            ...state.isOpen,
            greenBooksOpen: !state.isOpen.greenBooksOpen,
        }
    }),
    [IS_OPEN_MY_RESUME_DESC]: state => ({
        ...state,
        isOpen: {
            ...state.isOpen,
            myResumeOpen: !state.isOpen.myResumeOpen
        }
    })
})

export default util;
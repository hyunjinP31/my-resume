import { createAction } from "typesafe-actions";

export const IS_TEMPUS_OPEN_DESC = "util/IS_TEMPUS_OPEN_DESC";
export const IS_OPEN_STRATO_DESC = "util/IS_OPEN_STRATO_DESC";
export const IS_OPEN_GREENBOOKS_DESC = "util/IS_OPEN_GREENBOOKS_DESC";
export const IS_OPEN_MY_RESUME_DESC = "util/IS_OPEN_MY_RESUME_DESC";

export const isTempusOpen = createAction(IS_TEMPUS_OPEN_DESC)();
export const isStratoOpen = createAction(IS_OPEN_STRATO_DESC)();
export const isGreenBooksOpen = createAction(IS_OPEN_GREENBOOKS_DESC)();
export const isMyResumeOpen = createAction(IS_OPEN_MY_RESUME_DESC)();


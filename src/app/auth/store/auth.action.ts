import { createAction, props } from "@ngrx/store";
import { User } from "src/app/core/model/user.model";

export const LOGIN_START = '[auth page] login start';
export const LOGIN_FAIL = '[auth page] login fail';
export const LOGIN_SUCCESS = '[auth page] login success';
export const USER_SIGNUP = '[auth page] user sign up';
export const loginStart = createAction(LOGIN_START, props<any>());
export const loginSuccess = createAction(LOGIN_SUCCESS, props<{ user: User }>());
export const sighUpStart = createAction(USER_SIGNUP, props<{ email: string, password: string }>())

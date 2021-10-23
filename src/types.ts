import { ChangeEvent } from "react";

export interface IRouteLink {
    route: string;
    label: string;
}

export interface IActionBtnDef {
    label: string;
    action: string;
}

export interface ITextFieldDef {
    name: string;
    label: string;
    value: string;
    type?: string;
    onInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export interface IUserData {
    email: string;
    username: string;
    password: string;
    roles?: Array<string>;
}

export interface IUserLoginCredentials {
    username: string;
    password: string;
}

export interface IUserSignupCredentials extends IUserLoginCredentials {
    email: string;
}

export interface IUserLoginResponse {
    id: string;
    username: string;
    email: string;
    roles: Array<string>;
    accessToken: string;
}
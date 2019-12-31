import {SEARCH, ADD_MOVIE, EDIT, DELETE} from "./actionTypes";

export const Search =(payload) => {
    return {type:SEARCH, payload}
};

export const Add_Movie =(payload) => {
    return {type:ADD_MOVIE, payload}
};

export const Edit =(payload) => {
    return {type:EDIT, payload}
};

export const Delete =(payload) => {
    return {type:DELETE, payload}
};
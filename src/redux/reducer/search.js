import { SEARCH_PLACE_START, SEARCH_PLACE_ERROR, SEARCH_PLACE_COMPLETE } from '../consts/actionsTypes';

const initialState = {};

export default function (state = initialState, action){
    switch(action.type){
        case  SEARCH_PLACE_START :
            return{...state, isLoading: true};
            //break;

        case SEARCH_PLACE_ERROR:
            console.log(action);
            return{...state, isLoading: false};
            //break;

       case SEARCH_PLACE_COMPLETE:
           console.log(action);
           return{...state, isLoading: false, movieResults: action.results.data };
           //break;
           default:
               return{...state};
    }
}
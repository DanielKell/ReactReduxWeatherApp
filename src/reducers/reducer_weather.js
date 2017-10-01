import {FETCH_WEATHER} from '../actions/index';

export default function(state = [], action) {

    switch (action.type) {
        case FETCH_WEATHER:
        return state.concat([action.payload.data]); 
        //SAME AS: return [action.payload.data, ...state];
        //Multiple cities being returned.
        //.payload.data is the piece within the AJAX called object that we care about
    }
    return state;
}

//Note: Because you can never manipulate state directly in React or Redux,
//we can't use return state.push[action.payload.data]. We need to create 
//a new array. This allows us to keep "timestamps" of the state throughout
//it's lifetime.
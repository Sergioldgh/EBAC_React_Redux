import { ADD_SONG, REMOVE_SONG } from "./libraryActions";

const initialState = [];

export const libraryReducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_SONG:
            const exists = state.find(song => song.idTrack === action.payload.idTrack)
            if(exists) return state;
            return [...state, action.payload]

        case REMOVE_SONG:
            return state.filter(song => song.idTrack !== action.payload)

        default:
            return state;
    }
};

export default libraryReducer;
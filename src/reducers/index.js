import {combineReducers} from "redux";


const songsReducer = () => {
 return [
     {title: "Emotionless", artist: "Drake", duration: "5:02"},
     {title: "Best I Ever Had", artist: "Drake", duration: "4:17"},
     {title: "Exposed", artist: "Russ", duration: "4:32"},
     {title: "Famous", artist: "French Montana", duration: "4:05"}
 ];
};

const selectedSongReducer = (selectedSong=null, action) => {
    if(action.type === "SONG_SELECTED") { //Esta informação vamos buscar à action
        return action.payload;
    }
        return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});
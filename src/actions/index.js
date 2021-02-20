//Action Creator

export const selectSong = (song) => { //Este export permite fazer export de multiplos ficheiros (util no Redux)
    //Return an action
    return {
        type: "SONG_SELECTED",
        payload: song
    };
};


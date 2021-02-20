import React from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions"; //Isto é como importar uma action do Redux. São necessárias as {} porque não fizemos o default export

class SongList extends React.Component {
    renderList() {
        return this.props.songs.map((song) => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button 
                        onClick={() => this.props.selectSong(song)}
                        className="ui button primary">
                            Select
                            </button>
                    </div>
            <div className="content">{song.title}</div>
                </div>
            );
        });
    }

    render(){
        return <div className="ui divided list">{this.renderList()}</div>
    }
};

const mapStateToProps = (state) => {
    return {songs: state.songs};

}

export default connect(mapStateToProps, {selectSong})(SongList); //A connect function trata de todo o dispatch em background
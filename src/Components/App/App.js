import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar.js';
import SearchResults from '../SearchResults/SearchResults.js';
import Playlist from '../Playlist/Playlist.js';
import Spotify from '../../Util/Spotify.js'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [],
      playlistName: 'New Playlist',
      playlistTracks: []
    };

  this.addTrack = this.addTrack.bind(this);
  this.removeTrack = this.removeTrack.bind(this);
  this.updatePlaylistName = this.updatePlaylistName.bind(this);
  this.savePlaylist = this.savePlaylist.bind(this);
  this.search = this.search.bind(this);

  }
  addTrack(track) {
    let tracks = this.state.playlistTracks;
    if (!this.state.playlistTracks.includes(track)) {
      tracks.push(track);
      this.setState({playlistTracks : tracks});
    }
  }

  removeTrack(track) {
    let tracks = this.state.playlistTracks;
    if (this.state.playlistTracks.includes(track)) {
      tracks.splice(tracks.indexOf(track), 1);
      this.setState({playlistTracks: tracks});
    }
  }

  updatePlaylistName(name) {
    this.setState({playlistName: name});
  }

  savePlaylist() {
    const trackUris = this.state.playlistTracks.map(track => track.uri);
    Spotify.savePlaylist(this.state.playlistName, trackUris);
    this.setState({
      playlistName: 'New Playlist',
      playlistTracks: [],
      searchResults: []
    });
  }

  search(term) {
    Spotify.search(term).then(searchResults => {
     this.setState({searchResults: searchResults});
   });
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar onSearch={this.search} />
          <div className="App-playlist">
            <SearchResults
              onAdd={this.addTrack}
              searchResults={this.state.searchResults} />
            <Playlist
            onNameChange={this.updatePlaylistName}
            onRemove={this.removeTrack}
            playlistName={this.state.playlistName}
            playlistTracks={this.state.playlistTracks}
            onSave={this.savePlaylist} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

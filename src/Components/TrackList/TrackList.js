import React from 'react';
import './TrackList.css';
import Track from '../Track/Track.js';


//Creates a tracklist component that displays the tracks
class TrackList extends React.Component {

  render() {
    return (
      <div className="TrackList">
        {this.props.tracks.map(track => {
          return <Track
          onAdd={this.props.onAdd}
          track={track}
          key={track.id}
          isRemoval={this.props.isRemoval}
          onRemove={this.props.onRemove} />
        })}
      </div>
    );
  }
}

export default TrackList;

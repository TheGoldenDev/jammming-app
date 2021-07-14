import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.search = this.search.bind(this);
    this.handleTermChange = this.handleTermChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);

  }
  
  search(term) {
    this.props.onSearch(this.state.term);
  }

  handleKeyPress(event) {
    if (event.key == 'Enter') {
      this.props.onSearch(this.state.term);
    }
  }

  handleTermChange(event) {
    this.setState({term: event.target.value});
  }

  render() {
    return (
      <div className="SearchBar">
        <input onKeyPress={this.handleKeyPress} onChange={this.handleTermChange} placeholder="Enter A Song, Album, or Artist" />
        <a onClick={this.search} >SEARCH</a>
      </div>
    );
  }
}

export default SearchBar;

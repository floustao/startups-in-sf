import React from 'react';
import SearchBox from './SearchBox';
import CardList from './CardList';
import { artworks } from './artworks';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      artworks: artworks,
      searchfield: ''
    }
  }

  handleSearch = (event) => {
    this.setState({ searchfield: event.target.value });
  }

  render() {

    const filteredArtworks = this.state.artworks.filter(artwork => {
      return artwork.company.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })

    return (
      <div>
        <h1>Select your Company</h1>
        <SearchBox searchChange={this.handleSearch} />
        <CardList artworks={filteredArtworks} />
      </div>
    );
  }
}

export default App;

import React from 'react';
import SearchBox from './SearchBox';
import CardList from './CardList';
import Loader from './Loader';
import Scroll from './Scroll';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      artworks: [],
      searchfield: ''
    }
  }

  componentDidMount() {
    fetch('http://localhost:3001/artworks')
    .then(response => response.json())
    .then(artworks => this.setState({ artworks: artworks }))
  }

  handleSearch = (event) => {
    this.setState({ searchfield: event.target.value });
  }


  render() {
    const { artworks, searchfield } = this.state;
    const filteredArtworks = artworks.filter(artwork => {
      return artwork.company.toLowerCase().includes(searchfield.toLowerCase());
    })

    if (!artworks.length) { // in case server is down or too long
      return (
        <div>
          <h1>Select your Company</h1>
          <SearchBox searchChange={this.handleSearch} />
          <Loader />
        </div>
        )
    } else {
      return ( // return json from server
        <div>
          <h1>Select your Company</h1>
          <SearchBox searchChange={this.handleSearch} />
          <Scroll>
            <CardList artworks={filteredArtworks} />
          </Scroll>
        </div>
      );
    }
  }
}

export default App;


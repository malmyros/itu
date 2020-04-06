import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import {Button, Container, Input, Navbar, NavbarBrand} from 'reactstrap'
import InfiniteScroll from 'react-infinite-scroll-component'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      term: 'U2',
      offset: 0,
      limit: 25,
    }
  }

  componentDidMount() {
    this.onLoadData()
  }

  onLoadData = () => {
    const {term, offset, limit} = this.state
    fetch(`https://itunes.apple.com/search?term=${term}&entity=musicArtist,album,musicTrack&offset=${offset}&limit=${limit}`, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
    })
        .then(response => response.json())
        .then(data => {
          this.setState({
            results: this.state.results.concat(data.results),
            offset: this.state.offset + 25,
            limit: this.state.limit + 25,
          })
        })
  }

  onChangeTerm = (e) => {
    this.setState({
      term: e.target.value,
    })
  }

  onSearch = () => {
    this.setState({
      results: [],
      offset: 0,
      limit: 25,
    }, () => this.onLoadData())
  }

  render() {
    return (
        <div className="App">
          <Navbar color="light" light expand="md">
            <NavbarBrand href="/">Itunes</NavbarBrand>
            <Input
                value={this.state.term || ''}
                onChange={this.onChangeTerm}/>
            <Button color="secondary" onClick={this.onSearch}>Search</Button>
          </Navbar>
          <Container>
            <ul>
              <InfiniteScroll
                  dataLength={this.state.results.length}
                  next={this.onLoadData}
                  hasMore={true}
                  loader={<h4>Loading...</h4>}>
                {this.state.results
                    .map((result, index) => {
                      return (
                          <li key={`result-${index}`}>
                            <img alt={result.trackName} src={result.artworkUrl100}/>
                            <div className="wrapper">
                              <div className={'track-name'}>{result.trackName}</div>
                              <div className={'artist-name'}>{result.artistName}</div>
                              <div className={'genre'}>{result.primaryGenreName}</div>
                              <div className={'release-date'}>{result.releaseDate}</div>
                              <audio src={result.previewUrl} controls>
                                Your browser does not support the audio element.
                              </audio>
                            </div>
                          </li>
                      )
                    })
                }
              </InfiniteScroll>
            </ul>
          </Container>
        </div>
    );
  }
}

export default App;

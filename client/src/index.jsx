import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repos: [],
      queryFound: false
    }
    this.search = this.search.bind(this);
  }

  search(query) {
    console.log(`${query} was searched`);
    // TODO
    var query = { query: query }
    $.ajax({
      type: 'POST',
      url: 'http://localhost:1128/repos',
      data: query,
      success: (data) => {
        console.log('ClientSide: Search Request successful...\n', data);
      },
      error: (error) => {
        console.log('Error', error);
      }

    });
  }

  render() {
    return (
      <div>
        <h1>Github Fetcher</h1>
        <RepoList repos={this.state.repos} />
        <Search onSearch={this.search} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
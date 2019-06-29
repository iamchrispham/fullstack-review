import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: 'golang'
    }
    this.onChange = this.onChange.bind(this);
    this.search = this.search.bind(this);
  }

  onChange (e) {
    var query = e.target.value;
    this.setState({
      query: query
    });
  }

  search() {
    this.props.onSearch(this.state.query);
  }

  render() {
    return (<div>
      <h4>Add more repos!</h4>
      Enter a github username: <input name="query" value={this.state.query || 'golang'} onChange={this.onChange} />
      <button onClick={this.search}> Add Repos </button>
    </div>)
  }
}

export default Search;
import React, { Component } from 'react';

export class FetchData extends Component {
  static displayName = FetchData.name;

  constructor(props) {
    super(props);
    this.state = { games: [], loading: true };
  }

  componentDidMount() {
    this.populateGameData();
  }

  static renderGamesTable(games) {
    return (
      <table className='table table-striped' aria-labelledby="tabelLabel">
        <thead>
          <tr>
            <th>Title</th>
            <th>Number of Players</th>
            <th>Summary</th>
          </tr>
        </thead>
        <tbody>
                {games.map(game =>
             <tr key={game.id}>
              <td>{game.title}</td>
              <td>{game.numberOfPlayers}</td>
              <td>{game.summary}</td>
            </tr>
          )}
        </tbody>
      </table>
    );
  }

  render() {
    let contents = this.state.loading
        ? <p><em>Loading...</em></p>
        : FetchData.renderGamesTable(this.state.games);

    return (
      <div>
        <h1 id="tabelLabel" >Game List</h1>
        <p>This component demonstrates fetching data from the server.</p>
        {contents}
      </div>
    );
  }

  async populateGameData() {
    const response = await fetch('/api/Game');
    const data = await response.json();
    this.setState({ games: data, loading: false });
  }
}

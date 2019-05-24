import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  state = {
    data: []
  }

  componentDidMount() {
    const URL = 'https://creativedsapi.kdns.in/contactapi/orgname';
    const USER_TOKEN = '2140ef4023e625b7a6e743b76497d4e8907471c0';
    const AuthString = 'Token '.concat(USER_TOKEN); 
    axios.post(URL,{}, { headers: { Authorization: AuthString} })
    .then(response => {
        console.log(response);
        this.setState({
          data: response.data
        })
      })
    .catch((error) => {
        console.log('error ' + error);
      });
  }

  render() {
    return (
      <div>
      <ol>
        {
          this.state.data.map(item => {
            return (
                <li key={item.id}>{item.orgname}</li>
            )
          })
        }
      </ol>
      </div>
    );
  }
}

export default App;

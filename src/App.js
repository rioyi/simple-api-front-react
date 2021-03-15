import logo from './logo.svg';
import './App.css';

import User from './user' 

function App() {
  // const axios = require('axios');
  // const instance = axios.create({
  //   baseURL: 'http://localhost:3000',
  //   timeout: 1000,
  //   headers: {'X-Custom-Header': 'foobar'}
  // });

  const users = () => {



    // instance.get('/users')
    //   .then(function (response) {
    //     // handle success
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     // handle error
    //     console.log(error);
    //   })
  }

  const usersMock = [
      {
        name: "juan",
        email: "asdsd@asdas.com"
      },
      {
        name: "mary"
      },
      {
        name: "jaqui"
      },
      {
        name:"wilbert",
        email: "wi@asasd.com"
      }
    ]

    
  

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
            { 
            usersMock.map((x) => {
              return (
                <User data={x}></User>
              )
            })
            }
        </a>
      </header>
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import Task from './Task';
import Header from './Header';
import NewTask from './NewTask';
import Footer from './Footer';
import 'materialize-css/dist/css/materialize.min.css';


class App extends React.Component {

  state = {
    tasks: [
      {
        task: 'Escovar os dentes depois de comer'
      },
      {
        task: 'Arrumar a cama'
      },
      {
        task: 'Colocar o lixo para fora'
      },
      {
        task: 'Colocar o lixo para fora'
      },
      {
        task: 'Escovar os dentes depois '
      },
      {
        task: 'Arrumar a cama'
      },
      {
        task: 'Colocar o lixo para fora'
      },
      {
        task: 'Colocar o lixo para fora'
      },
      {
        task: 'Escovar os dentes depois '
      },
      {
        task: 'Arrumar a cama'
      },
      {
        task: 'Colocar o lixo para fora'
      },
      {
        task: 'Colocar o lixo para fora'
      },
    ]

  }



  render() {
    return (
      <fragment>
        <Header />
        <div className="container">
          <NewTask />
          <Task tasks={this.state.tasks} />
        </div>
        <Footer />
      </fragment>
    );
  }


}

export default App;

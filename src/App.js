import React, { Fragment } from 'react';
import './App.css';
import Task from './Task';
import Header from './Header';
import NewTask from './NewTask';
import 'materialize-css/dist/css/materialize.min.css';
import PopUp from './PopUp';


class App extends React.Component {

  state = {
    tasks: [
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
        task: 'Escovar os dentes '
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

removeTask = index => {
  const { tasks } = this.state;
  this.setState (
    {
      tasks: tasks.filter((task, posAtual) => {
        return posAtual !== index;
      }),
    }
  );
  PopUp.exibeMensagem("error", "Tarefa removida");
}

escutadorDeSubmit = task => { /*Passo a task, para setar o conjunto de tasks e fazer o merge da nova task*/
  this.setState({ tasks: [...this.state.tasks, task] })
}


  render() {
    return (
      <Fragment>
        <Header />
        <div className="container">
          <NewTask escutadorDeSubmit={this.escutadorDeSubmit}/>
          <Task tasks={this.state.tasks} removeTask = { this.removeTask }/>
        </div>
      </Fragment>
    );
  }


}

export default App;

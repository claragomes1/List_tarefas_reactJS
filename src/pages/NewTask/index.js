import React from 'react';
import FormValidator from '../../FormValidator';
import './Styles.css'
import PopUp from '../../PopUp';

class NewTask extends React.Component {

  constructor(props) {
    super(props);

    this.validador = new FormValidator({/*Recebe um objeto JSON com a regra de validação*/
      campo:'task',
      metodo:'isEmpty'
  });

    this.stateInicial = {
      task: '',
    };
    this.state = this.stateInicial;
  }

  escutadorDeInput = event => {
    const { name, value } = event.target;/*A cada evento disparado de mudança desse input, será atualizado o estado desse componente, para então essa mudança ser refletida no componente*/
    this.setState({/*Setar o state do campo, para que a cada digitação o campo seja atualizado*/
      [name]: value /*A partir do name é colocado o value*/
    });
  }

  submitFormulario = () => {
    if (this.validador.valida(this.state)) {
      this.props.escutadorDeSubmit(this.state);/*Passar as informações do state que contém as informações da nova task para o App.js*/
      this.setState(this.stateInicial);/*Zerar os campos*/
    }else{
      PopUp.exibeMensagem('error', 'Não é possivel adicionar tarefa em branco');
    }
  }

  render() {
    const { task } = this.state;

    return (
      <div className="add-task">
        <form>
          <div className="input-add"><input htmlFor="task" type="text" id="task" name="task" value={task} onChange={this.escutadorDeInput} placeholder="What do you still need to do?"></input></div>
          <div className="btn-add"><button type="button" onClick={this.submitFormulario}><i className="material-icons" >add</i></button></div>
        </form>
      </div>
    );
  }
}

export default NewTask; 
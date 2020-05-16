import React from 'react';
import './Task.css';


const Table = props => {
    const rows = props.tasks.map((row, index) => {/*row é o elemento do momento da interação e o index que é a posição*/
        return (/*key é para o react saber internamente quel elemento está sendo modificado*/
            <tr key={index}>
                <td className="col s6">{row.task}</td> 
                <td><button onClick = { () => { props.removeTask(index) }} className="btn centered btn-task col s6"><i className="material-icons">delete</i></button></td>
            </tr>
        )
    });

    return(
        <tbody >
            {rows}
        </tbody>
    );
}


class Task extends React.Component {
    render() {

        const { tasks, removeTask } = this.props;

        return (
            <div className="table-task">
                <table className="highlight col s12">
                    <Table tasks = { tasks } removeTask = { removeTask }/>
                </table>
            </div>

        );
    }
}

export default Task;
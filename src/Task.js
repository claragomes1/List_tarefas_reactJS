import React from 'react';


const Table = props => {
    const rows = props.tasks.map((row, index) => {
        return (
            <tr>
                <td>{row.task}</td>
                <td><button className="waves-effect waves-light btn cyan accent-4"><i class="material-icons">delete</i></button></td>
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

        const { tasks } = this.props;

        return (
            <div class="table-task">
                <table className="centered highlight ">
                    <Table tasks = { tasks } />
                </table>
            </div>

        );
    }
}

export default Task;
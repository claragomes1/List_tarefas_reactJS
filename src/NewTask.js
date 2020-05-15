import React from 'react';
import './NewTask.css'

class NewTask extends React.Component {
  render() {
    return (
      <div className="add-task">
        <form>
          <div className="input-add"><input type="text" id="task" placeholder="What do you still need to do?"></input></div>
          <div className="btn-add"><button className="waves-effect waves-light btn cyan accent-4" ><i class="material-icons" >add</i></button></div>
        </form>
      </div>
    );
  }
}

export default NewTask; 
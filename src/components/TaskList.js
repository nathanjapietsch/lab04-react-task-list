// ## TaskList.js ##
//
// The TaskList component renders a view for a list of tasks.

const React = require('react');


const Task = (props) => {
  const element = (<li>
    {props.description}
    <input type="checkbox" checked={props.completed} readOnly />
  </li>);
  return element;
}


// Define the TaskList component
class TaskList extends React.Component {
  static get defaultProps() {
    return {heading: "Untitled task list"};
  }

  constructor(props) {
    super(props);
    this.state = {name: ''};
  }
  
  

  render() {

    const onNameChange = (event) => {
      this.setState({name: event.target.value});
    };

    const onButtonClick = (event) => {
      this.props.showMessage('Hello, ' + this.state.name + '!');
    };

    const props = this.props;
  // At the moment the TaskList component is just a hard-coded HTML unordered
  // list. We will be changing this during the lab.
 
  const element = (
    <div>
      <h1>{ props.heading }</h1>
      <input type='text' value={this.state.name} onChange={onNameChange} />
      <button type="button" onClick={onButtonClick}>Enter</button>
      <ul>
          {props.myTasks.map(task => <Task key={task.id} {...task}/>)}
      </ul>
    </div>
  );
  return element;
  }
};

// Export the TaskList component
module.exports = TaskList;

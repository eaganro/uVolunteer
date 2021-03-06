import React from 'react';
import TaskListItem from './TaskListItem.js';

const TaskList = props => {
  const ListItem = props.item || TaskListItem;
  return (
    <div className="ui segments">
      {props.tasks.map((task, i) => <ListItem
        username={props.username}
        task={task}
        key={i}
        selectLocation={props.selectLocation}
        timezoneByIP={props.timezoneByIP}
      />)}
    </div>
  );
};

export default TaskList;

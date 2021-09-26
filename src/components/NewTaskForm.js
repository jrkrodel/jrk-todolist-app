import React from "react";

import {
  Segment,
  Form,
  Header,
  Button,
  Select,
  Input,
} from "semantic-ui-react";

const NewTaskForm = ({ closeNewTask, newTask, setNewTask, addNewTask }) => {
  function changeNewTask(e, { value, name }) {
    const newTaskClone = { ...newTask };
    newTaskClone[name] = value;
    setNewTask(newTaskClone);
  }

  return (
    <React.Fragment>
      <Segment padded>
        <Header dividing as="h2">
          Add New Task
        </Header>
        <Form>
          <Form.Field
            control={Input}
            name="name"
            label="Task Name:"
            placeholder="Enter task name..."
            value={newTask.name}
            onChange={changeNewTask}
          />
          <Form.Field
            control={Input}
            name="due"
            label="Due Date:"
            placeholder="Enter Due Date..."
            value={newTask.due}
            onChange={changeNewTask}
          />
          <Form.Field
            name="color"
            control={Select}
            label="Task Color:"
            placeholder="Choose task color..."
            options={[
              { text: "Red", value: "red" },
              { text: "Yellow", value: "yellow" },
              { text: "Green", value: "green" },
              { text: "Orange", value: "orange" },
              { text: "Blue", value: "blue" },
            ]}
            value={newTask.color}
            onChange={changeNewTask}
          />
          <Button.Group fluid>
            <Button type="button" color="red" onClick={closeNewTask}>
              Cancel
            </Button>
            <Button.Or />
            <Button onClick={addNewTask} type="button" color="green">
              Add Task
            </Button>
          </Button.Group>
        </Form>
      </Segment>
    </React.Fragment>
  );
};

export default NewTaskForm;

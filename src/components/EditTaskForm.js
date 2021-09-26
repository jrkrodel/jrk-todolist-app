import React from "react";

import {
  Segment,
  Form,
  Header,
  Button,
  Select,
  Input,
} from "semantic-ui-react";

const EditTaskForm = ({ editTask, setEditTask, submitEdit, cancelEdit }) => {
  function editSelectedTask(e, { value, name }) {
    const newEdit = { ...editTask };
    newEdit[name] = value;
    setEditTask(newEdit);
  }
  return (
    <React.Fragment>
      <Segment padded>
        <Header color={editTask.color} dividing as="h2">
          Edit Task - {editTask.name}
        </Header>
        <Form>
          <Form.Field
            control={Input}
            name="name"
            label="Edit Task Name:"
            placeholder="Enter task name..."
            value={editTask.name}
            onChange={editSelectedTask}
          />
          <Form.Field
            control={Input}
            name="due"
            label="Edit Due Date:"
            placeholder="Enter due date..."
            value={editTask.due}
            onChange={editSelectedTask}
          />
          <Form.Field
            name="color"
            value={editTask.color}
            onChange={editSelectedTask}
            control={Select}
            label="Edit Task Color:"
            placeholder="Choose task color..."
            options={[
              { text: "Red", value: "red" },
              { text: "Yellow", value: "yellow" },
              { text: "Green", value: "green" },
            ]}
          />
          <Button.Group fluid>
            <Button onClick={cancelEdit} color="red">
              Cancel
            </Button>
            <Button.Or />
            <Button color="green" onClick={submitEdit}>
              Submit Edit
            </Button>
          </Button.Group>
        </Form>
      </Segment>
    </React.Fragment>
  );
};

export default EditTaskForm;

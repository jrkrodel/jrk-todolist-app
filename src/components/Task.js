import React from "react";

import {
  List,
  Grid,
  Label,
  Button,
  Checkbox,
  Divider,
  Popup,
  Icon,
  Container,
} from "semantic-ui-react";

import EditTaskForm from "../components/EditTaskForm";
const Task = ({
  name,
  color,
  due,
  completed,
  index,
  deleteTask,
  list,
  setList,
  completeTaskHandler,
}) => {
  function deleteCurrentTask() {
    deleteTask(index);
  }

  function submitEdit() {
    const listClone = [...list];
    listClone.splice(index, 1, editTask);
    setList(listClone);
    setCurrentlyEditing(!currentlyEditing);
  }

  function cancelEdit() {
    const listClone = [...list];
    setList(listClone);
    setCurrentlyEditing(!currentlyEditing);
  }

  const [currentlyEditing, setCurrentlyEditing] = React.useState(false);
  const [editTask, setEditTask] = React.useState({
    name: "",
    color: "",
    due: "",
  });

  function currentlyEditingHandler() {
    setEditTask({
      name: name,
      color: color,
      due: due,
    });
    setCurrentlyEditing(!currentlyEditing);
  }

  function completeTask() {
    completeTaskHandler(index);
  }

  return (
    <React.Fragment>
      {currentlyEditing ? (
        <EditTaskForm
          currentlyEditingHandler={currentlyEditingHandler}
          editTask={editTask}
          setEditTask={setEditTask}
          submitEdit={submitEdit}
          cancelEdit={cancelEdit}
        />
      ) : (
        <React.Fragment>
          <List.Item>
            <Grid verticalAlign="middle" columns="2">
              <Grid.Column>
                <Label color={color} size="big">
                  {name}
                  {completed ? (
                    <Label.Detail>
                      <Icon name="checkmark box" />
                    </Label.Detail>
                  ) : (
                    ""
                  )}
                </Label>
                {due && completed === false ? (
                  <Label circular size="medium">
                    <Icon name="calendar"></Icon>
                    {due}
                  </Label>
                ) : null}
              </Grid.Column>
              <Grid.Column textAlign="right">
                {completed ? (
                  <Popup
                    trigger={
                      <Checkbox
                        defaultChecked
                        onClick={completeTask}
                        toggle
                        size="big"
                        label="&nbsp;&nbsp;&nbsp;"
                      ></Checkbox>
                    }
                    content="Complete Task?"
                    basic
                    position="left center"
                  ></Popup>
                ) : (
                  <Popup
                    trigger={
                      <Checkbox
                        onClick={completeTask}
                        toggle
                        size="big"
                        label="&nbsp;&nbsp;&nbsp;"
                      ></Checkbox>
                    }
                    content="Complete Task?"
                    basic
                    position="left center"
                  ></Popup>
                )}

                <Button
                  onClick={deleteCurrentTask}
                  icon="trash"
                  color="red"
                  size="small"
                ></Button>
                <Button
                  onClick={currentlyEditingHandler}
                  icon="pencil"
                  color="orange"
                  size="small"
                ></Button>
              </Grid.Column>
            </Grid>
          </List.Item>
          <Divider></Divider>
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default Task;

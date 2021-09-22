import React from "react";
import "semantic-ui-css/semantic.css";
import { Header, Container, Button, Grid, List } from "semantic-ui-react";

import Task from "../components/Task";
import NewTaskForm from "../components/NewTaskForm";

const HomePage = () => {
  const initialNewTask = {
    name: "",
    color: "",
  };

  const [newTaskOpen, setNewTaskOpen] = React.useState(true);
  const [newTask, setNewTask] = React.useState({
    name: "",
    color: "",
  });

  const [list, setList] = React.useState([]);

  function openNewTask() {
    setNewTaskOpen(true);
  }

  function closeNewTask() {
    setNewTaskOpen(false);
  }

  function addNewTask() {
    const listClone = [...list];
    listClone.push(newTask);
    setList(listClone);
    setNewTask(initialNewTask);
    closeNewTask();
  }

  // const taskList = [];

  // list.forEach((task, index) => {
  //   taskList.push(
  //     <Task
  //       key={`${task.name}-${index}`}
  //       name={task.name}
  //       color={task.color}
  //     ></Task>
  //   );
  // });

  // On homework, show edit form, show edits, allow user to edit, and then update change so it is whatever the user changed it to. edit task, open edit task, how the user be able to edit it. How the edit form have the values of the task and color already there so they can know what they are editing, and also have a cancel button.
  // For the three pieces of information, the third one has to be in the FORM, such as one you have to add.

  function editTask(index) {
    console.log("edit", index);
    const newList = list.map((task, i) => {
      if (i !== index) return task;
      return {
        name: `Edit ${task.name}`,
        color: task.color,
      };
    });
    setList(newList);
  }

  function deleteTask() {
    //Array.filter
  }

  const taskList = list.map((task, index) => {
    return (
      <Task
        key={`${task.name}-${index}`}
        name={task.name}
        color={task.color}
        editTask={editTask}
        index={index}
      ></Task>
    );
  });

  return (
    <React.Fragment>
      <Container>
        <Grid verticalAlign="middle" padded="vertically" columns="3">
          <Grid.Column width="4">
            <Button icon="bars"></Button>
          </Grid.Column>
          <Grid.Column width="8">
            <Header color="blue" dividing textAlign="center" as="h1">
              Todo List
            </Header>
          </Grid.Column>
          <Grid.Column textAlign="right" width="4">
            <Button color="green" icon="plus" onClick={openNewTask}></Button>
          </Grid.Column>
        </Grid>

        {/* Shorthand for if else statement */}
        {newTaskOpen ? (
          <NewTaskForm
            newTask={newTask}
            setNewTask={setNewTask}
            closeNewTask={closeNewTask}
            addNewTask={addNewTask}
          />
        ) : null}

        <List>{taskList}</List>
      </Container>
    </React.Fragment>
  );
};

export default HomePage;

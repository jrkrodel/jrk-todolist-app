import React from "react";
import "semantic-ui-css/semantic.css";
import {
  Header,
  Container,
  Button,
  Grid,
  List,
  Statistic,
  Icon,
} from "semantic-ui-react";

import Task from "../components/Task";
import NewTaskForm from "../components/NewTaskForm";

const HomePage = () => {
  const initialNewTask = {
    name: "",
    color: "",
    due: "",
    completed: false,
  };

  const [newTaskOpen, setNewTaskOpen] = React.useState(true);
  const [newTask, setNewTask] = React.useState({
    name: "",
    color: "",
    due: "",
    completed: false,
  });

  const [list, setList] = React.useState([]);
  const [totalTaskCompleted, setTotalTaskCompleted] = React.useState(0);
  const [totalTaskMade, setTotalTaskMade] = React.useState(0);
  const [totalTaskDeleted, setTotalTaskDeleted] = React.useState(0);
  const [showStats, setShowStats] = React.useState(false);

  function openNewTask() {
    setNewTaskOpen(true);
  }

  function closeNewTask() {
    setNewTaskOpen(false);
  }

  function openStats() {
    setShowStats(!showStats);
  }

  function addNewTask() {
    const listClone = [...list];
    listClone.push(newTask);
    setList(listClone);
    setNewTask(initialNewTask);
    closeNewTask();
    setTotalTaskMade(totalTaskMade + 1);
  }

  function deleteTask(index) {
    const filteredList = list.filter((task, i) => {
      if (i !== index) return task;
    });
    setList(filteredList);
    setTotalTaskDeleted(totalTaskDeleted + 1);
  }

  function completeTaskHandler(index) {
    const updateList = list.map((task, i) => {
      if (i === index) {
        if (task.completed === true) {
          setTotalTaskCompleted(totalTaskCompleted - 1);
        }
        if (task.completed === false) {
          setTotalTaskCompleted(totalTaskCompleted + 1);
        }
        return {
          ...task,
          completed: !task.completed,
        };
      }
      return task;
    });
    setList(updateList);
  }

  const taskList = list.map((task, index) => {
    return (
      <Task
        key={`${task.name}-${index}`}
        name={task.name}
        completed={task.completed}
        color={task.color}
        due={task.due}
        completeTaskHandler={completeTaskHandler}
        index={index}
        deleteTask={deleteTask}
        newTask={newTask}
        list={list}
        setList={setList}
      ></Task>
    );
  });

  return (
    <React.Fragment>
      <Container>
        <Grid verticalAlign="middle" padded="vertically" columns="3">
          <Grid.Column width="4">
            <Button icon="info" onClick={openStats}></Button>
          </Grid.Column>
          <Grid.Column textAlign="center" width="8">
            <Header color="blue" dividing textAlign="center" as="h1">
              Todo List
            </Header>
          </Grid.Column>
          <Grid.Column textAlign="right" width="4">
            <Button color="green" icon="plus" onClick={openNewTask}></Button>
          </Grid.Column>
        </Grid>
        {showStats ? (
          <Statistic.Group horizontal size="small">
            <Statistic>
              <Statistic.Value>
                <Icon color="blue" name="add"></Icon>&nbsp;&nbsp;
                {totalTaskMade}
              </Statistic.Value>
              <Statistic.Label>Tasks Created</Statistic.Label>
            </Statistic>
            <Statistic>
              <Statistic.Value>
                <Icon color="red" name="trash"></Icon>&nbsp;&nbsp;
                {totalTaskDeleted}
              </Statistic.Value>
              <Statistic.Label>Tasks Deleted</Statistic.Label>
            </Statistic>
            <Statistic>
              <Statistic.Value>
                <Icon color="green" name="check"></Icon>&nbsp;&nbsp;
                {totalTaskCompleted}
              </Statistic.Value>
              <Statistic.Label>Tasks Completed</Statistic.Label>
            </Statistic>
          </Statistic.Group>
        ) : null}
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

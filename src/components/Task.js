import React from "react";

import {
  List,
  Grid,
  Label,
  Button,
  Checkbox,
  Divider,
} from "semantic-ui-react";

const Task = ({ name, color, editTask, index }) => {
  // console.log(name, color);

  function editCurrentTask() {
    editTask(index);
  }

  return (
    <React.Fragment>
      <List.Item>
        <Grid verticalAlign="middle" columns="2">
          <Grid.Column>
            <Label color={color} size="big">
              {name}
            </Label>
          </Grid.Column>
          <Grid.Column textAlign="right">
            <Checkbox toggle label="&nbsp;&nbsp;&nbsp;"></Checkbox>
            <Button icon="trash" color="red"></Button>
            <Button
              onClick={editCurrentTask}
              icon="pencil"
              color="orange"
            ></Button>
          </Grid.Column>
        </Grid>
      </List.Item>
      <Divider></Divider>
    </React.Fragment>
  );
};

export default Task;

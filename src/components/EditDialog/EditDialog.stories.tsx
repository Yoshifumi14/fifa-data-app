/* eslint-disable import/no-anonymous-default-export */
import Paper from "@material-ui/core/Paper";
import React, { useState } from "react";
import { COMPONENT_NAME, EditDialog, EditDialogProps } from "./EditDialog";
import Button from "@material-ui/core/Button";

export default {
  title: COMPONENT_NAME,
  component: EditDialog,
};

const Template = (args: EditDialogProps) => {
  const [open, setOpen] = useState(false);
  return (
    <Paper style={{ margin: 5, padding: 5 }} elevation={0}>
      <Button variant="outlined" onClick={() => setOpen(true)}>
        dialog open
      </Button>
      <EditDialog {...args} open={open} onClickOk={() => setOpen(false)} onClickCancel={() => setOpen(false)} />
    </Paper>
  );
};

export const Default = Template.bind({});

// @ts-ignore: https://github.com/storybookjs/storybook/issues/11916
Default.args = {
  renderDialogContents: (
    <div>
      <div>hogehoge</div>
      <div>hogehoge,hogehoge</div>
      <div>hogehoge,hogehoge,hogehoge</div>
      <div>hogehoge,hogehoge,hogehoge,hogehoge,hogehoge</div>
    </div>
  ),
  title: "title",
};

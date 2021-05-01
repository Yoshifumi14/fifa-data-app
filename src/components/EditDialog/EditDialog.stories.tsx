/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { COMPONENT_NAME, EditDialog, EditDialogProps } from "./EditDialog";

export default {
  title: COMPONENT_NAME,
  component: EditDialog,
  decorators: [
    (Story: any) => (
      <Paper style={{ margin: 5, padding: 5 }} elevation={0}>
        <Story />
      </Paper>
    ),
  ],
};

const Template = (args: EditDialogProps) => {
  const [open, setOpen] = React.useState(false);
  return (
    <>
      <Button variant="outlined" onClick={() => setOpen(true)}>
        dialog open
      </Button>
      <EditDialog {...args} open={open} onClickOk={() => setOpen(false)} onClickCancel={() => setOpen(false)} />
    </>
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

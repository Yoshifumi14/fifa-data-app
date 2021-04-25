/* eslint-disable import/no-anonymous-default-export */
// import Paper from "@material-ui/core/Paper";
import React from "react";
import { COMPONENT_NAME, PaperContainer, PaperContainerProps } from "./PaperContainer";

export default {
  title: COMPONENT_NAME,
  component: PaperContainer,
};

const Template = (args: PaperContainerProps) => {
  return (
    // <Paper style={{ margin: 5, padding: 5 }} elevation={0}>
    <>
      <PaperContainer {...args} />
    </>
    // </Paper>
  );
};

export const Default = Template.bind({});

Default.args = {
  renderContents: (
    <div>
      <div>hogehoge,hogehoge,hogehoge</div>
      <div>hogehoge,hogehoge,hogehoge</div>
    </div>
  ),
  title: "TITLE",
};

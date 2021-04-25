/* eslint-disable import/no-anonymous-default-export */
// import Paper from "@material-ui/core/Paper";
import React from "react";
import { COMPONENT_NAME, AddingButton, AddingButtonProps } from "./AddingButton";

export default {
  title: COMPONENT_NAME,
  component: AddingButton,
};

const Template = (args: AddingButtonProps) => {
  return (
    <>
      <AddingButton {...args} />
    </>
  );
};

export const Default = Template.bind({});

// @ts-ignore: https://github.com/storybookjs/storybook/issues/11916
Default.args = {};

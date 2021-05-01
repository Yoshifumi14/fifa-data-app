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
    <PaperContainer {...args}>
      <div>
        <div>hogehoge,hogehoge,hogehoge</div>
        <div>hogehoge,hogehoge,hogehoge</div>
      </div>
    </PaperContainer>
  );
};

export const Default = Template.bind({});

// @ts-ignore: https://github.com/storybookjs/storybook/issues/11916
Default.args = {
  title: "TITLE",
};

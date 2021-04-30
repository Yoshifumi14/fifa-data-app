/* eslint-disable import/no-anonymous-default-export */
import { Checkbox, Divider, FormControlLabel, Select, TextField } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import React from "react";
import { COMPONENT_NAME, SettingElement, SettingElementProps } from "./SettingElement";
import MenuItem from "@material-ui/core/MenuItem";

export default {
  title: COMPONENT_NAME,
  component: SettingElement,
  decorators: [
    (Story: any) => (
      <Paper style={{ margin: 5, padding: 5 }} elevation={0}>
        <Story />
      </Paper>
    ),
  ],
};

const Template = (args: SettingElementProps) => {
  return (
    <>
      <SettingElement {...args}>
        <FormControlLabel control={<Checkbox checked={true} />} label="hoge" />
      </SettingElement>
      <Divider />
      <SettingElement {...args}>
        <TextField value="huga" />
      </SettingElement>
      <Divider />
      <SettingElement {...args}>
        <Select value="a">
          <MenuItem value={"a"}>AAAA</MenuItem>
          <MenuItem value={"b"}>BBBB</MenuItem>
          <MenuItem value={"c"}>CCCC</MenuItem>
        </Select>
      </SettingElement>
    </>
  );
};

export const Default = Template.bind({});

// @ts-ignore: https://github.com/storybookjs/storybook/issues/11916
Default.args = {
  title: "Title",
  description: "description",
};

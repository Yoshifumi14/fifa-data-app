/* eslint-disable import/no-anonymous-default-export */
import { COMPONENT_NAME, AddingButton, AddingButtonProps } from "./AddingButton";

export default {
  title: COMPONENT_NAME,
  component: AddingButton,
  decorators: [(Story: any) => <Story />],
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

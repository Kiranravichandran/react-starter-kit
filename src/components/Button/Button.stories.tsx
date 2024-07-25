import { Meta, StoryFn } from '@storybook/react';
import Button, { ButtonProps } from './Button';
import { EventProvider } from '../../utils/eventemitter/EventProvider';

// Define the metadata for the stories
const meta: Meta<ButtonProps> = {
  title: 'Components/Button',
  component: Button,
  decorators: [
    (Story) => (
      <EventProvider>
        <Story />
      </EventProvider>
    ),
  ],
};

export default meta;

// Define the template for stories
const Template: StoryFn<ButtonProps> = (args) => <Button {...args} />;

// Create a default story
export const Default: StoryFn<typeof Button> = Template.bind({});
Default.args = {
  inputText: 'Click Me',
  outputEvent: (data) => console.log(data),
};

// Create a story with custom text
export const CustomText: StoryFn<typeof Button> = Template.bind({});
CustomText.args = {
  inputText: 'Press Here',
  outputEvent: (data) => console.log(data),
};

// Create a story with event logging
export const WithEventLogging: StoryFn<typeof Button> = Template.bind({});
WithEventLogging.args = {
  inputText: 'Log Event',
  outputEvent: (data) => alert(`Event: ${data}`),
};
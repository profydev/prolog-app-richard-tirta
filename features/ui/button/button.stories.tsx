import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Button } from "./button";

export default {
  title: "UI/Button",
  component: Button,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "5rem",
    }}
  >
    <Button {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  children: "Button",
};

export const Primary = Template.bind({});
Primary.args = {
  color: "primary",
  children: "Primary Button",
  size: "medium",
};

export const Secondary = Template.bind({});
Secondary.args = {
  color: "secondary",
  children: "Secondary Button",
  size: "medium",
};

export const large = Template.bind({});
large.args = {
  size: "large",
  color: "primary",
  children: "Large Button",
};

export const WithLeadingIcon = Template.bind({});
WithLeadingIcon.args = {
  leadingIconSrc: "/icons/arrow-left.svg",
  children: "Button with Leading Icon",
  color: "primary",
  size: "medium",
};

export const WithTrailingIcon = Template.bind({});
WithTrailingIcon.args = {
  trailingIconSrc: "/icons/arrow-left.svg",
  children: "Button with Trailing Icon",
  size: "medium",
  color: "primary",
};

export const IconOnly = Template.bind({});
IconOnly.args = {
  iconOnlySrc: "/icons/arrow-left.svg",
  children: "Icon Only Button",
  size: "medium",
  color: "primary",
};

export const Combinations = () => {
  const colors: Array<
    | "primary"
    | "secondary"
    | "gray"
    | "empty"
    | "empty-gray"
    | "error"
    | "empty-error"
  > = [
    "primary",
    "secondary",
    "gray",
    "empty",
    "empty-gray",
    "error",
    "empty-error",
  ];
  const sizes: Array<"small" | "medium" | "large" | "xlarge"> = [
    "small",
    "medium",
    "large",
    "xlarge",
  ];

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "1rem",
        padding: "2rem",
      }}
    >
      {colors.map((color) =>
        sizes.map((size) => (
          <div
            key={`${color}-${size}`}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              border: "1px solid rgba(0,0,0,0.2)",
              padding: "1rem",
            }}
          >
            <Button color={color} size={size}>
              {`${color} ${size}`}
            </Button>
            <span style={{ margin: "0.5rem 0 0 0" }}>{`${color} ${size}`}</span>
          </div>
        )),
      )}
    </div>
  );
};

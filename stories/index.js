import React from "react";
import { storiesOf } from "@storybook/react";
import { Button } from "@storybook/react/demo";

storiesOf("Button", module)
  .add("with text", () => <Button>Hello Button</Button>)
  .add("with some emoji", () => (
    <Button>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

storiesOf("Navbar", module)
  .add("Order List", () => (
    <ol>
      <li>List 1</li>
      <li>List 2</li>
      <li>List 3</li>
      <li>List 4</li>
    </ol>
  ))
  .add("Bullet List", () => (
    <ul>
      <li>List 1</li>
      <li>List 2</li>
      <li>List 3</li>
      <li>List 4</li>
    </ul>
  ));

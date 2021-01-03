import React from "react";
import { Container, Icon, Menu } from "semantic-ui-react";

export default function NavBar() {
  return (
    <Menu inverted fixed="top">
      <Container>
        <Menu.Item header position="left">
          <Icon name="user" size="large" />
          Timropalo
        </Menu.Item>
        <Menu.Item position="right">Things on right</Menu.Item>
      </Container>
    </Menu>
  );
}

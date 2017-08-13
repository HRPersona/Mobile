import React, { Component } from 'react';
import {
  Container,
  Content,
  Form,
  Label,
  Input,
  Item,
  Button,
  Header
} from 'native-base';
import { View, Text } from 'react-native';
import styles from './styles.js';

class Login extends Component {
  render() {
    return (
      <Container>
        <Header>
        </Header>
        <Content>
          <Text style={styles.title}>Persona HR</Text>
          <Form style={styles.form}>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Password</Label>
              <Input secureTextEntry />
            </Item>
            <Button style={styles.btn} block><Text>Login</Text></Button>
          </Form>
        </Content>
      </Container>
    );
  }
}

export default Login;

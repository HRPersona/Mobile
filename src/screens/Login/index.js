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
          <Form>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input style={{ marginLeft: 0 }} />
            </Item>
            <Item floatingLabel>
              <Label>Password</Label>
              <Input secureTextEntry style={{ marginLeft: 0 }} />
            </Item>
            <Button style={styles.btn} block><Text>Login</Text></Button>
          </Form>
        </Content>
      </Container>
    );
  }
}

export default Login;

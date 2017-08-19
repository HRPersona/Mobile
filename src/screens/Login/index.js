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
import { View, Text, AsyncStorage } from 'react-native';
import Axios from 'axios';
import { API_BASE_URL } from '../../constants';
import styles from './styles.js';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      username: '',
      password: '',
      message: ''
    }
  }

  login = () => {
    const endpoint = `${API_BASE_URL}api/login.json`;
    this.setState({ isLoading:true, message: '' });

    Axios.post(endpoint, {
      username: this.state.username,
      password: this.state.password
    },{
      headers: { 'Content-type': 'application/json' }
    })
    .then((response) => {
      this.setState({ isLoading: false, message: 'Login Success' });
      try {
        AsyncStorage.setItem('accessToken', response.data.token);
      } catch(err) { console.log('failed store access token'); }
      console.log(response);
    })
    .catch((err) => {
      console.log(err.response)
      this.setState({
        isLoading: false,
        message: err.response.data.message
      });
    });
  }

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
              <Input
                style={{ marginLeft: 0 }}
                onChangeText={(username) => { this.setState({username}); }}
              />
            </Item>
            <Item floatingLabel>
              <Label>Password</Label>
              <Input
                secureTextEntry
                style={{ marginLeft: 0 }}
                onChangeText={(password) => { this.setState({password}); }}
              />
            </Item>
            <Button
              block
              style={styles.btn}
              onPress={() => { this.state.isLoading ? null: this.login() }}
            >
              <Text style={{ color: '#fff' }}>Login</Text>
            </Button>
          </Form>
          <Text
            style={styles.message}
          >
            {this.state.message}
          </Text>
        </Content>
      </Container>
    );
  }
}

export default Login;

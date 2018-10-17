import React, { Component } from 'react';
import { Container, Button, Content, Item, Input, Icon, Text } from 'native-base';

export default class Login extends Component {
  render() {
    return (
      <Container>
        <Content style={{ padding: 20 }}>
          <Item>
            <Icon active name='person' />
            <Input placeholder='PNRP'/>
          </Item>
          <Item>
            <Icon active name='lock' />
            <Input placeholder='Password' secureTextEntry/>
          </Item>
          <Button style={{ marginTop: 20 }} rounded info block onPress={() => this.props.navigation.navigate('HomeScreen')}>
            <Text>LOGIN</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
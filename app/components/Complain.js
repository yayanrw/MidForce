import React, { Component } from 'react'
import {
    AppRegistry,
    StyleSheet,
    Text,
    TouchableOpacity,
    Linking,
  } from 'react-native';
import { Container, Header, Body, Title, Right, Left, Button, Icon, Content } from "native-base";
import QRCodeScanner from 'react-native-qrcode-scanner';

export default class Complain extends Component {
    onSuccess(e) {
        Alert.alert(e)
        Linking
          .openURL(e.data)
          .catch(err => console.error('An error occured', err));
      }
    render() {
    return (
        <Container style={{ backgroundColor: "#FFF" }}>
            <Header>
                <Left>
                    <Button transparent onPress={()=> this.props.navigation.goBack()}>
                        <Icon name="arrow-back" />
                    </Button>
                </Left>
                <Body>
                    <Title>Complain</Title>
                </Body>
                <Right/>
            </Header>
            <Content>
                <QRCodeScanner
                    onRead={this.onSuccess.bind(this)}
                    topContent={
                    <Text style={styles.centerText}>
                        Go to <Text style={styles.textBold}>wikipedia.org/wiki/QR_code</Text> on your computer and scan the QR code.
                    </Text>
                    }
                    bottomContent={
                    <TouchableOpacity style={styles.buttonTouchable}>
                        <Text style={styles.buttonText}>OK. Got it!</Text>
                    </TouchableOpacity>
                    }
                />
            </Content>
        </Container>
    )
    }
}

const styles = StyleSheet.create({
    centerText: {
      flex: 1,
      fontSize: 18,
      padding: 32,
      color: '#777',
    },
    textBold: {
      fontWeight: '500',
      color: '#000',
    },
    buttonText: {
      fontSize: 21,
      color: 'rgb(0,122,255)',
    },
    buttonTouchable: {
      padding: 16,
    },
  });
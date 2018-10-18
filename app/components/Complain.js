import React, { Component } from 'react';
import { Container, Header, Body, Title, Right, Left, Button, Icon, Content } from "native-base";

export default class Complain extends Component {
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
            </Content>
        </Container>
    )
    }
}
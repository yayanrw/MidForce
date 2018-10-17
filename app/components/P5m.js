import React, { Component } from 'react'
import {
    Container,
    Header,
    Title,
    Fab,
    Button,
    Thumbnail,
    Left,
    Right,
    Body,
    Icon,
    View,
    List,
    ListItem,
    Content,
    Text
  } from "native-base";


  const sankhadeep = require("../assets/contacts/sankhadeep.png");
  const supriya = require("../assets/contacts/supriya.png");
  const shivraj = require("../assets/contacts/shivraj.png");
  const datas = [
    {
      img: sankhadeep,
      text: "Ikhwan",
      note: "12 Oktober 2018"
    },
    {
      img: supriya,
      text: "Fendi",
      note: "13 Oktober 2018"
    },
    {
      img: shivraj,
      text: "Rudi",
      note: "14 Oktober 2018"
    },
  ];

export default class P5m extends Component {
    constructor(props) {
        super(props);
        this.state = {
            active: false
        };
    }
    
    render() {
        return (
            <Container style={{ backgroundColor: "#FFF" }}>
              <Header>
                <Left>
                  <Button transparent onPress={() => this.props.navigation.goBack()}>
                    <Icon name="arrow-back" />
                  </Button>
                </Left>
                <Body>
                  <Title>P5M</Title>
                </Body>
                <Right>
                  <Button transparent onPress={() => this.props.navigation.goBack()}>
                    <Icon type="FontAwesome" name="filter" />
                  </Button>
                </Right>
              </Header>

             <Content>
                <List
                    dataArray={datas}
                    renderRow={data =>
                    <ListItem thumbnail>
                        <Left>
                        <Thumbnail source={data.img} />
                        </Left>
                        <Body>
                        <Text>
                            {data.text}
                        </Text>
                        <Text numberOfLines={1} note>
                            {data.note}
                        </Text>
                        </Body>
                        <Right>
                        <Button transparent>
                            <Text>View</Text>
                        </Button>
                        </Right>
                    </ListItem>}
                />
                </Content>

              <View style={{ flex: 1 }}>
                <Fab
                  active={this.state.active}
                  direction="up"
                  containerStyle={{}}
                  style={{ backgroundColor: "#5067FF" }}
                  position="bottomRight"
                >
                  <Icon type="FontAwesome" name="qrcode" />
                </Fab>
              </View>
            </Container>
          );
    }
}
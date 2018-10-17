import React, { Component } from "react";
import {
Container,
Header,
Title,
Content,
Button,
Icon,
CardItem,
Card,
Body,
Text,
Grid,
Col,
Thumbnail,
Left,
Right
} from "native-base";
import {StyleSheet} from 'react-native';
import { Row } from "react-native-easy-grid";

const cover = require("../assets/images/YAYAN.jpg");

class Home extends Component {
render() {
return (
<Container style={{ backgroundColor: "#FFF" }}>
    <Header style={{ backgroundColor: "#00b8d4" }} androidStatusBarColor="#0088a3" iosBarStyle="light-content">

        <Body>
            <Title style={{ color: "#FFF" }}>Mid-Force</Title>
        </Body>
    </Header>

    <Content>
        <Grid style={{ backgroundColor: "#f5f5f5", padding: 10 }}>
            <Thumbnail small source={cover} />
            <Text style={{ textAlign: 'center', marginLeft: 10, marginTop: 5 }}>Yayan Rahmat Wijaya</Text>
        </Grid>
        <Grid style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Row>
                <Col style={styles.textCenter}>
                <Button success bordered rounded style={styles.btnMenu} onPress={() => this.props.navigation.navigate('P5mScreen')}>
                    <Icon type="FontAwesome" name="users" />
                </Button>
                <Text style={styles.textMenu}>P5M</Text>
                </Col>
                <Col style={styles.textCenter}>
                <Button danger bordered rounded style={styles.btnMenu} onPress={() => this.props.navigation.navigate('ComplainScreen')}>
                    <Icon type="FontAwesome" name="exclamation-circle" />
                </Button>
                <Text style={styles.textMenu}>Complain</Text>
                </Col>
                <Col style={styles.textCenter}>
                <Button warning bordered rounded style={styles.btnMenu}>
                    <Icon type="FontAwesome" name="home" />
                </Button>
                <Text style={styles.textMenu}>Jobdone</Text>
                </Col>
                <Col style={styles.textCenter}>
                <Button info bordered rounded style={styles.btnMenu}>
                    <Icon type="FontAwesome" name="home" />
                </Button>
                <Text style={styles.textMenu}>Improve'Day</Text>
                </Col>
            </Row>
            <Row>
                <Col style={{ justifyContent: 'center', alignItems: 'center' }}>
                <Button success bordered rounded style={styles.btnMenu}>
                    <Icon type="FontAwesome" name="book" />
                </Button>
                <Text style={styles.textMenu}>Modul</Text>
                </Col>
                <Col style={styles.textCenter}>
                <Button danger bordered rounded style={styles.btnMenu}>
                    <Icon type="FontAwesome" name="book" />
                </Button>
                <Text style={styles.textMenu}>Modul</Text>
                </Col>
                <Col style={styles.textCenter}>
                <Button warning bordered rounded style={styles.btnMenu}>
                    <Icon type="FontAwesome" name="book" />
                </Button>
                <Text style={styles.textMenu}>Modul</Text>
                </Col>
                <Col style={styles.textCenter}>
                <Button info bordered rounded style={styles.btnMenu}>
                    <Icon type="FontAwesome" name="book" />
                </Button>
                <Text style={styles.textMenu}>Modul</Text>
                </Col>
            </Row>
        </Grid>
        <Grid style={{ backgroundColor: "#f5f5f5", padding: 10, marginTop: 10 }}>
            <Row>
                <Text>Recent News</Text>
            </Row>

        </Grid>
    </Content>
</Container>
);
}
}

const styles = StyleSheet.create({
btnMenu: {
marginLeft: 10,
marginTop: 10,
marginRight: 10
},
textMenu: {
fontSize: 12
},
textCenter: {
justifyContent: 'center',
alignItems: 'center'
}
})

export default Home;
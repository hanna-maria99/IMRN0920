import { Form, Icon, Input, Item, Button, Label } from 'native-base';
import React, { Component } from 'react';
import { Image, View , Text} from 'react-native';
import Style from '../Components/Styling';

export default class Login extends Component{
    state = {
        icon: "eye-off",
        password: true,
    };

    changeIcon() {
        this.setState(prevState => ({
            icon: prevState.icon === 'eye' ? 'eye-off' : 'eye',
            password: !prevState.password
        }));
    }

    render(){
        return(
          <View style={Style.baseContainer}>
                <View style={Style.container}>
                    <Image
                        style={Style.gambarLogin}
                        source={{
                            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQAFMXrYJkAhTLSlL3zkQd5wlo6VHpyNB9EWg&usqp=CAU',
                        }}/>
                        <Text style={Style.txtWelcome}>
                            Welcome
                        </Text>
                <Form style={Style.formbasic}>
                    <Item floatingLabel>
                        <Icon
                        type='Ionicons' 
                        name='person' 
                        />
                        {/* navigation={this.props.navigation} */}
                        <Label style={Style.labeling}> User </Label>
                    </Item>

                    <Item floatingLabel>
                        <Icon
                        type='SimpleLineIcons'
                        name='lock'/>

                        <Label style={Style.labeling}>Password</Label>
                        
                        <Input secureTextEntry={this.state.password}/>

                        <Icon 
                        name={this.state.icon}
                        onPress={() => this.changeIcon()} />
                    </Item>

                    <Button style={Style.btn} mode='contained'
                         onPress={()=> this.props.navigation.navigate('Bottom',
                         {
                            screen:'Dashboard'
                         })}>
                        <Text style={Style.txtButton}>Login</Text>
                    </Button>
                </Form>
                </View>
            </View>
        )
    }
}
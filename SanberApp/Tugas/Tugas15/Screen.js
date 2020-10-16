import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import {AuthContext} from './context';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
    },
    button: {
      paddingHorizontal: 20,
      paddingVertical: 10,
      marginVertical: 10,
      borderRadius: 5
    }
  });

export const Home = ({navigation}) =>(
    <ScreenContainer>
        <Text> Master </Text>
    </ScreenContainer>
)
  
  export const SignIn = ({ navigation }) => {
    const { signIn } = React.useContext(AuthContext);
  
    return (
      <ScreenContainer>
        <Text>Sign In Screen</Text>
        <Button title="Sign In" //onPress={() => signIn()} 
        onPress={()=> alert("Todo!")}
        />
        <Button
            title="Create Account"
            onPress={() => navigation.push("CreateAccount")}
        />
      </ScreenContainer>
    );
  };

  export const CreateAccount = () => {
    const { signUp } = React.useContext(AuthContext);
  
    return (
      <ScreenContainer>
        <Text>Create Account Screen</Text>
        <Button title="Sign Up" onPress={() => signUp()} />
      </ScreenContainer>
    );
  };
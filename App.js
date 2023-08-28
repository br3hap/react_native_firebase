import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import UserList from './screens/UserList';
import UserDetaillScreen from './screens/UserDetaillScreen';
import CreateUserScreen from './screens/CreateUserScreen';



const Stack = createStackNavigator()

function MyStack(){
  return(
    <Stack.Navigator>
      <Stack.Screen name='UserList' component={UserList} options={{title:'Users List'}}/>
      <Stack.Screen name='CreateUserScreen' component={CreateUserScreen} options={{title:'Create a New User'}}/>
      <Stack.Screen name='UserDetaillScreen' component={UserDetaillScreen} options={{title:'User Detail'}}/>
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

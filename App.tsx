import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { Body, Button, Container, Content, Header, Text } from 'native-base';
import TodoList from './TodoList';
import AddTodo from './AddTodo';

export default function App() {

  const [isReady,setIsReady] = useState(false);
  const [showAddTodoScreen, setShowAddTodoScreen] = useState(false);
  const [counter, setCounter] = useState(4);
  const [todoList, setTodoList] = useState([
    {
      id:1,
      title: "First Item",
      completed: false
    },
    {
      id:2,
      title: "second Item",
      completed: false
    },
    {
      id:3,
      title: "thrid Item",
      completed: false
    }
  ])

  useEffect(()=>{
    (
      async()=>{
        await Font.loadAsync({
          Roboto: require('native-base/Fonts/Roboto.ttf'),
          Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
          ...Ionicons.font,
        });
        setIsReady(true);
      }
    )();
  },[]);

  const addTodoItem = (todoText:string)=>{
    console.log("in add todo function in app");
    const todoItem = {
      id: counter,
      title: todoText,
      completed: false
    }
    setCounter(counter+1);
    setTodoList([...todoList,todoItem]);
    setShowAddTodoScreen(false);

  }

  if(!isReady) {
    return (
      <Text>Loading.....</Text>
    )
  }

  if(showAddTodoScreen) {
    return <AddTodo addTodoItem={addTodoItem} />
  }

  return (
    <Container>
      <Header>
        <Body style={{alignItems:"center"}}>
          <Text style={{color:"white"}}>Home Todo</Text>
        </Body>
      </Header>
      <Content>
          <Text>Hello Todo</Text>
          <Button full style={{backgroundColor:"green",marginHorizontal:30, marginBottom:10 }} 
            onPress={()=>{
              setShowAddTodoScreen(true);
            }}
          ><Text>Add Todo</Text></Button>
          <TodoList todoList={todoList} setTodoList={setTodoList} />
      </Content>
    </Container>
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

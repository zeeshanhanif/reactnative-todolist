import React, { useEffect, useState } from 'react';
import { Body, Button, CheckBox, Container, Content, Header, Icon, List, ListItem, Text, View } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
export default function TodoList(props:any) {
    const updateCheckbox = (id: number)=>{
        const updatedList = props.todoList.map((item:any)=>{
            if(item.id == id) {
                return {
                    ...item, completed: !item.completed
                }
            }
            return item;
        })
        props.setTodoList(updatedList);
    }

    const deleteTodoItem = (id:number)=>{
        const updateList = props.todoList.filter((item:any)=>{
            return item.id != id;
        })
        props.setTodoList(updateList);
    }
    return (
        <List>
            {
                props.todoList.map((item:any)=>(
                    <ListItem key={item.id}>
                        <Text style={{flex:1}}>{item.id}</Text>
                        <View style={{flex:1}}>
                            <CheckBox onPress={()=>{
                                updateCheckbox(item.id)
                            }} checked={item.completed} />
                        </View>
                        <Text style={{flex:6}}>{item.title}</Text>
                        <Icon style={{flex:1}} name="trash" onPress={()=>{
                            deleteTodoItem(item.id)
                        }} />
                        
                    </ListItem>   
                ))
            }
        </List>
    )
}
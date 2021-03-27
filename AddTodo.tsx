import React, { useEffect, useState } from 'react';
import { Body, Button, Container, Content, Form, Header, Input, Item, Label, Text } from 'native-base';
import { ProgressViewIOSComponent } from 'react-native';

export default function AddTodo(props:any) {
    const [text, setText] = useState("");
    return (
        <Container>
            <Header>
                <Body style={{alignItems:"center"}}>
                <Text style={{color:"white"}}>Add Todo</Text>
                </Body>
            </Header>
            <Content>
                <Form style={{margin:30}}>
                    <Item inlineLabel>
                        <Label>Todo Title</Label>
                        <Input onChangeText={setText}  />
                    </Item>
                    <Button onPress={()=>{
                        console.log("Text added  = ",text);
                        props.addTodoItem(text);
                    }} style={{marginTop:20}} full success><Text>Add</Text></Button>
                </Form>
            </Content>
        </Container>
    )
}
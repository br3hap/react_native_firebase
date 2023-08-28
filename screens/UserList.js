import { Button, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import firebase from '../database/firebase'
import { ListItem, Avatar } from 'react-native-elements'

const UserList = (props) => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        firebase.db.collection('users').onSnapshot((querySnapshot) => {
            const users = []
            querySnapshot.docs.forEach((doc) => {
                const { name, email, phone } = doc.data()
                users.push({
                    id: doc.id,
                    name,
                    email,
                    phone
                })
            });

            console.log(users);

            setUsers(users);

        });
    },[])

    return (

        <ScrollView>
            <Button
                title='Create User'
                onPress={() => props.navigation.navigate('CreateUserScreen')}
            />
            {
                users.map(user => {
                    return (
                        <ListItem
                            key={user.id}
                            bottomDivider
                            onPress={() => {
                                props.navigation.navigate('UserDetaillScreen',{
                                    userId: user.id
                                })
                            }}
                        >
                            <ListItem.Chevron />
                            <Avatar source={{uri:'https://randomuser.me/api/portraits/women/57.jpg'}} rounded />
                            <ListItem.Content>
                                <ListItem.Title>
                                    {user.name}
                                </ListItem.Title>
                            </ListItem.Content>
                        </ListItem>
                    )
                })
            }

        </ScrollView>
    )
}

export default UserList

const styles = StyleSheet.create({})
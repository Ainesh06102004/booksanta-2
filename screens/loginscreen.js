import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Alert, Modal, ScrollView, KeyboardAvoidingView } from 'react-native';
import db from '../config';
import firebase from 'firebase';
import Santalogo from '../components/logo';

export default class Loginscreen extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
            pass: '',
            showmodal: false,
        }
    }
    checkuser = async (email, pass) => {
        if (email && pass) {
            try {
                var response = await firebase
                    .auth()
                    .signInWithEmailAndPassword(email, pass);
                if (response) {
                    console.log(response);
                    //this.props.navigation.navigate('Navigatetab');
                    Alert.alert('Logged in successfully');
                }
            } catch (error) {
                Alert.alert(error);
            }
        } else {
            Alert.alert('Please enter email and password');
        }
    }

    showModal = () => {
        return (
            <Modal
                animationType="fade"
                transparent={true}
                visible={this.state.showmodal}
            > <View
            >
                    <KeyboardAvoidingView style={{ flex: 1 }}>
                        <TouchableOpacity

                            onPress={() => {
                                this.setState({
                                    showmodal: false
                                })
                            }}
                        >
                            <Text>Back</Text>
                        </TouchableOpacity>
                    </KeyboardAvoidingView>

                </View>
            </Modal>
        )
    }

    render() {

        return (
            <View>
                <View>
                    {this.showModal()}

                </View>
                <View>

                    <TextInput
                        style={{
                            width: 280,
                            height: 35,
                            borderColor: 'black',
                            borderWidth: 2,
                            alignSelf: 'center',
                            marginTop: 40,
                            borderRadius: 15,
                            textAlign: 'center',
                        }}
                        placeholder={'Email'}
                        onChangeText={(text) => {
                            this.setState({
                                email: text
                            })
                        }}
                    />
                    <TextInput
                        style={{
                            width: 280,
                            height: 35,
                            borderColor: 'black',
                            borderWidth: 2,
                            alignSelf: 'center',
                            marginTop: 20,
                            borderRadius: 15,
                            textAlign: 'center',
                        }}
                        placeholder={'Password'}
                        onChangeText={(text) => {
                            this.setState({
                                pass: text
                            })
                        }}
                        secureTextEntry={true}
                    />
                    <TouchableOpacity
                        style={{
                            backgroundColor: 'black',
                            width: 80,
                            height: 30,
                            alignSelf: 'center',
                            marginTop: 30,
                            borderRadius: 15,
                        }}
                        onPress={() => {
                            this.checkuser(this.state.email, this.state.pass);
                        }}>
                        <Text
                            style={{
                                color: 'white',
                                alignSelf: 'center',
                                fontWeight: 'bold',
                                marginTop: 5,
                            }}>
                            LOGIN
                    </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            backgroundColor: 'black',
                            width: 80,
                            height: 30,
                            alignSelf: 'center',
                            marginTop: 30,
                            borderRadius: 15,
                        }}
                        onPress={() => {
                            this.setState({
                                showmodal: true
                            })

                        }}>
                        <Text
                            style={{
                                color: 'white',
                                alignSelf: 'center',
                                fontWeight: 'bold',
                                marginTop: 5,
                            }}>
                            SIGN-UP
                    </Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
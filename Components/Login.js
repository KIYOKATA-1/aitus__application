import React, { useState } from "react";
import { Text, View, TextInput, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { Lstyle } from "../styles/login";
import { useNavigation } from "@react-navigation/native";

export default function Login() {
    const [barcode, setBarcode] = useState('');
    const [password, setPassword] = useState('');

    const navigation = useNavigation();

    const handleLogin = () => {
        if (barcode === '220522' && password === '123') {
            navigation.navigate("TeacherNavigation");
        } else {
            navigation.navigate("StudentNavigation");
        }
    };

    return (
        <SafeAreaView style={Lstyle.loginContainer}>
            <View>
                <Image source={require('../assets/img/aitu.png')} style={Lstyle.ImageStyle} />
            </View>
            <View style={Lstyle.inputContainer}>
                <TextInput
                    style={Lstyle.TextInputStyle}
                    placeholder="BARCODE"
                    placeholderTextColor={'black'}
                    keyboardType='numeric'
                    onChangeText={Int => setBarcode(Int)}
                    value={barcode}
                />
                <TextInput
                    style={Lstyle.TextInputStyle}
                    placeholder="PASSWORD"
                    placeholderTextColor={'black'}
                    secureTextEntry={true}
                    onChangeText={text => setPassword(text)}
                    value={password}
                />
                <TouchableOpacity onPress={() => console.log("Forgot password was pressed")}>
                    <Text style={Lstyle.linkStyle}>Forgot your password?</Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity 
                style={Lstyle.loginBtn} 
                onPress={handleLogin}
            >
                <Text style={Lstyle.loginBtnText}>LOGIN</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

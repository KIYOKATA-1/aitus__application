import React from "react";
import { View, Text } from "react-native";
import { Avatar } from 'react-native-elements';
import IMAGES from "./assets/img";
import { headerStyle } from "./styles/header";
const StudentHeader = () => {
    return (
        <View style={headerStyle.header}>
            <Avatar source={IMAGES.AVATAR} style={headerStyle.circle}/>
            <Text style={headerStyle.headerText}>Student {'\n'}
                <Text style={headerStyle.barcode}>220223</Text>
            </Text>
            <View style={headerStyle.help}>
                <Text style={headerStyle.helpText}>!</Text>
            </View>
        </View>
    );
};

export default StudentHeader;
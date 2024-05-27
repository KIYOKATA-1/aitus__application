import React, { useState } from "react";
import { View, Text, SafeAreaView, TouchableOpacity, ScrollView } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { Avatar } from 'react-native-elements';
import { Mstyle } from "../styles/main";
import TeacherHeader from "../TeacherHeader";
const TeacherMain = () => {
    return (
        <SafeAreaView style={Mstyle.mainContainer}>
            <TeacherHeader />
            <View>
                <Text>Teacher MAIN</Text>
            </View>
        </SafeAreaView>
    );
};

export default TeacherMain;

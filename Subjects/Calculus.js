import React from "react";
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export default function Calculus() {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={{ margin: 0, padding: 0, paddingTop: 20, flex: 1 }}>
            <TouchableOpacity 
                onPress={() => navigation.goBack()} 
                style={{ margin: 10, padding: 10, flexDirection: 'row', alignItems: 'center' }}
            >
                <FontAwesomeIcon icon={faArrowLeft} size={20} />
                <Text style={{ marginLeft: 5 }}>Back</Text>
            </TouchableOpacity>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Calculus</Text>
            </View>
        </SafeAreaView>
    );
}

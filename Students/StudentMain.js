import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView, TouchableOpacity, ScrollView, Modal, TouchableHighlight } from "react-native";
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { Avatar } from 'react-native-elements';
import { Mstyle } from "../styles/main";
import StudentHeader from "../StudentHeader";
import Calculus from "../Subjects/Calculus";
import PoliticalScience from "../Subjects/PoliticalScience";

const StudentMain = ({ navigation }) => {
    const [subjects, setSubjects] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedSubject, setSelectedSubject] = useState(null);

    useEffect(() => {
        const fetchSubjects = async () => {
            try {
                const data = JSON.stringify({
                    "session_id": "2082b55c-f150-4abb-8326-c9151c9feaee",
                    "code": "0710"
                });

                const config = {
                    method: 'get',
                    maxBodyLength: Infinity,
                    url: 'https://localhost:7044/api/StudentAttendance/1',
                    headers: { 
                        'Content-Type': 'application/json'
                    },
                    data: data
                };

                const response = await axios.request(config);
                const responseData = response.data;

                // Преобразование данных из API в нужный формат для subjects
                const formattedSubjects = responseData.map(subject => ({
                    id: subject.id,
                    name: subject.subject_name,
                    teacher: subject.teacher_name,
                    attendance: subject.attendance,
                    component: subject.subject_name === "Calculus 1" ? Calculus : PoliticalScience // Замените это на ваше соответствие компонентов
                }));

                setSubjects(formattedSubjects);
            } catch (error) {
                console.error(error);
            }
        };

        fetchSubjects();
    }, []);

    const getBorderColor = (percentage) => {
        if (percentage >= 90) {
            return '#00FF0A';  
        } else if (percentage >= 75 && percentage < 90) {
            return '#CCFF00';  
        } else {
            return '#FF0000';
        }
    };

    const getFontSize = (name) => {
        return name.length > 20 ? 16 : 18;
    };

    const handleSubjectPress = (subject) => {
        setSelectedSubject(subject);
        setModalVisible(true);
    };

    const navigateToSubject = (subject) => {
        setModalVisible(false);
        navigation.navigate('SubjectDetails', { screen: subject.name, component: subject.component });
    };

    return (
        <SafeAreaView style={Mstyle.mainContainer}>
            <StudentHeader />
            <ScrollView style={{ borderRadius: 10, marginVertical: 5 }}>
                {subjects.map((subject) => (
                    <TouchableOpacity key={subject.id} style={Mstyle.subject} onPress={() => handleSubjectPress(subject)}>
                        <View style={Mstyle.subjectData}>
                            <FontAwesomeIcon icon={faBook} size={25} style={{ paddingHorizontal: 25, marginRight: 20 }} />
                            <Text style={[Mstyle.subjectName, { fontSize: getFontSize(subject.name) }]}>{subject.name}</Text>
                            <Text style={Mstyle.stick}> | </Text>
                            <Text style={Mstyle.teacher}>{subject.teacher}</Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>

            {selectedSubject && (
                <Modal
                    visible={modalVisible}
                    animationType="slide"
                    transparent={true}
                    onRequestClose={() => setModalVisible(false)}
                >
                    <View style={Mstyle.modalWindow}>
                        <View style={Mstyle.subjectWindow}>
                            <View style={Mstyle.subjectData}>
                                <Text style={Mstyle.subjectName}>{selectedSubject.name} |</Text>
                                <Text style={Mstyle.teacher}> Teacher: {selectedSubject.teacher}</Text>
                            </View>
                            <View style={[{borderColor: getBorderColor(selectedSubject.attendance)}, Mstyle.attendance]}>
                                <Text style={Mstyle.attendanceText}>ATTENDANCE</Text>
                                <Text style={Mstyle.percentage}>{selectedSubject.attendance} %</Text>
                            </View>
                            <View style={Mstyle.btnGroup}>
                                <TouchableHighlight style={Mstyle.goToBtn} 
                                                    underlayColor="#0F6CBF"
                                                    onPress={() => navigateToSubject(selectedSubject)}> 
                                    <Text style={Mstyle.modalText}>GO TO SUBJECT</Text>
                                </TouchableHighlight>
                                <TouchableHighlight style={Mstyle.closeBtn}
                                                    underlayColor={'#757575'}
                                                    onPress={() => setModalVisible(false)}> 
                                    <Text style={Mstyle.modalText}>CLOSE</Text>
                                </TouchableHighlight>
                            </View>
                        </View>
                    </View>
                </Modal>
            )}
        </SafeAreaView>
    );
};

export default StudentMain;

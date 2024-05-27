import React, { useEffect, useRef } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Animated } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHouse, faGraduationCap, faBell, faUser } from '@fortawesome/free-solid-svg-icons';
import StudentMain from '../Students/StudentMain';
import StudentCourses from '../Students/StudentCourses';
import StudentNotifications from '../Students/StudentNotifications';
import StudentProfile from '../Students/StudentProfile';

const Tab = createBottomTabNavigator();

function TabBarIcon({ route, focused = false }) {
  const iconName = {
    StudentMain: faHouse,
    StudentCourses: faGraduationCap,
    StudentNotifications: faBell,
    StudentProfile: faUser,
  }[route.name];

  const animatedValue = useRef(new Animated.Value(0)).current; 

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: focused ? 10 : 0, 
      duration: 2000,
      useNativeDriver: true
    }).start();
  }, [focused]); 

  const backgroundColor = focused ? 'snow' : '#0F6CBF';
  const iconColor = focused ? '#0F6CBF' : 'snow';

  return (
    <Animated.View style={{
      width: 65,
      height: 35,
      borderRadius: 25,
      backgroundColor,
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: 'black',
      shadowOffset: { width: 1, height: 1 },
      shadowRadius: animatedValue, 
      shadowOpacity:25,
      elevation: animatedValue, 
      borderWidth: 1,
      borderColor: 'black',
      position: 'relative',
      bottom: 0,
    }}>
      <FontAwesomeIcon icon={iconName} size={20} color={iconColor} />
    </Animated.View>
  );
}

export default function StudentNavigation() {
    return (
      
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            
            <TabBarIcon route={route} focused={focused} />
          ),
          tabBarShowLabel: false,
          tabBarStyle: [{
            backgroundColor: '#fdfdfd',
            position: 'relative',
            borderTopWidth: 0,
            height: 60,
            elevation: 0,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            shadowOpacity: 0,
            display: 'flex',
  
          }, null],
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'snow',
        })}
      >
        <Tab.Screen name="StudentMain" component={StudentMain}  />
        <Tab.Screen name="StudentCourses" component={StudentCourses} />
        <Tab.Screen name="StudentNotifications" component={StudentNotifications} />
        <Tab.Screen name="StudentProfile" component={StudentProfile} />
      </Tab.Navigator>
    );
  }
  
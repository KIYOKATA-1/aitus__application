import { StyleSheet } from "react-native";
export const Lstyle = StyleSheet.create({
    loginContainer: {
        flex: 1,
        display: "flex",
        alignItems: 'center',
        position: 'relative',
        top: 12,
    },
      ImageStyle: {
        width: 300,
        height: 300,
        objectFit: 'contain',
        position: 'relative',

        top: 0,
      },
      TextInputStyle: {
        borderWidth: 1,
        borderRadius: 12,
        fontFamily: 'oswald',
        color: 'black',
        textDecorationLine: 'none',
        width: 300,
        padding: 7,
        margin: 7,
      },
      linkStyle: {
        width: 250,
        fontWeight: 'bold',
        color: "#0f6cbf",
        position: 'relative',
        paddingLeft: 10,
      },
      loginBtn:{
        width: 325,
        height: 40,
        backgroundColor: '#0f6cbf',
        textAlign: 'center',
        alignItems: 'center',
        display: 'flex',
        position: 'relative',
        justifyContent: 'center',
        top: 150,
        borderRadius: 12,
      },
      loginBtnText:{
        color: 'snow',
        fontSize: 20,
        fontFamily: 'oswald',
        position: 'relative',
        alignSelf: 'center',
        justifyContent: 'center',
        paddingBottom: 5,
      }
});

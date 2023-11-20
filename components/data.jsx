import { View,StyleSheet,Text,Modal,Pressable,Image } from "react-native";
import {useState,useEffect} from 'react';


export default function Data(props){


    return(
        <View style={[styles.view1]}>
            <View style={styles.first}>
            {/* <Text style={[{color:"white"},styles.textdata]}>{props.date}</Text> */}
            <Text style={[{color:"white"},styles.textdata]}>{props.date}</Text>
            </View>
            <View style={styles.middlecontent}>
            <Image source={{uri: "https://openweathermap.org/img/wn/"+props.icon+"@4x.png"}} style={{height: 50,width: 50}}/>
            <Text style={[{color:"white"},styles.textdata1]}>{props.desc}</Text>
            </View>
            <View style={styles.third}>
                <Text style={[{color:"white"},styles.textdata]}>{props.temp}°C</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    view1: {
        display: 'flex',
        backgroundColor: 'black',
        opacity: 0.6,
        margin: 5,
        height: 100,
        borderRadius: 36,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 25,
        flexDirection: 'row',
        gap: 30
    },
    textdata: {
        color: "white",
        opacity: 1,
        fontSize: 25
    },
    textdata1: {
        color: "white",
        opacity: 1,
        fontSize: 15
    },
    middlecontent: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: "30%",
        // backgroundColor: "green",
        height: "100%",
        width: "33%"
    },
    first: {
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        // backgroundColor: "red",
        height: "100%",
        // width: "10%",
        borderRadius: 36
    },
    third: {
        // backgroundColor: "yellow",
        height: "100%",
        display: "flex",
        justifyContent: 'center',
    }
})
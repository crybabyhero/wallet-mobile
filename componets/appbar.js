import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";

const AppBar = ({ title }) => {
    const navigate = useNavigation();
    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={() => { navigate.goBack() }} style={styles.iconContainer}>
                <Icon name="chevron-left" size={20} color="black" />
            </TouchableOpacity>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
};

export default AppBar;

const styles = StyleSheet.create({
    container: {
        height: 80,
        backgroundColor: "#FFF",
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 30,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
        position: "relative",
    },
    iconContainer: {
        position: "absolute",
        top: 34,
        left: 20,
        padding: 8,
        marginRight: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#000",
        textAlign: "start",
        paddingLeft: 40,
        paddingTop: 20
    },
});

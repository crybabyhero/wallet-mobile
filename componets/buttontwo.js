import React, { useState } from "react";
import { Modal, Pressable, StyleSheet, Text, View } from "react-native";

const ButtonTwo = ({ title, onPress }) => {

    return (
        <View style={styles.container}>
            <Pressable style={styles.button} onPress={onPress}>
                <Text style={styles.text}>{title}</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingVertical: 20,
    },
    button: {
        backgroundColor: '#19918F',
        width: 400,
        height: 55,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginTop: 230,
    },
    text: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: '#fff',
        width: '80%',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
        elevation: 5,
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    modalText: {
        fontSize: 16,
        marginBottom: 20,
        textAlign: 'center',
    },
    modalButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    modalButton: {
        flex: 1,
        paddingVertical: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginHorizontal: 5,
    },
    cancelButton: {
        backgroundColor: '#ccc',
    },
    confirmButton: {
        backgroundColor: '#19918F',
    },
    successModalContent: {
        backgroundColor: '#fff',
        width: '80%',
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
        elevation: 5,
    },
    successIconContainer: {
        backgroundColor: '#e0ffe0',
        width: 60,
        height: 60,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },
    successIcon: {
        fontSize: 40,
        color: '#1a7f37',
    },
    successTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#1a7f37',
        marginBottom: 10,
    },
    successText: {
        fontSize: 16,
        marginBottom: 5,
        textAlign: 'start',
    },
    modalButtonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    printButton: {
        backgroundColor: '#007AFF',
    },
    closeButton: {
        backgroundColor: '#19918F',
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default ButtonTwo;

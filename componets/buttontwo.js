import React, { useState } from "react";
import { Modal, Pressable, StyleSheet, Text, View } from "react-native";

const ButtonTwo = ({ title }) => {
    const [isModalVisible, setModalVisible] = useState(false);
    const [isSuccessModalVisible, setSuccessModalVisible] = useState(false);

    const handlePress = () => {
        setTimeout(() => {
            setSuccessModalVisible(true);
        }, 1000);
    };

    return (
        <View style={styles.container}>
            <Pressable style={styles.button} onPress={() => {
                setModalVisible(true);
                handlePress();
            }}>
                <Text style={styles.text}>{title}</Text>
            </Pressable>

            <Modal
                transparent={true}
                visible={isSuccessModalVisible}
                animationType="fade"
                onRequestClose={() => setSuccessModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.successModalContent}>
                        <View style={styles.successIconContainer}>
                            <Text style={styles.successIcon}>✔️</Text>
                        </View>
                        <Text style={styles.successTitle}>{title}</Text>
                        <Text style={styles.successText}>Amount: 1.000.000</Text>
                        <Text style={styles.successText}>Transaction Id: 338818239039011</Text>
                        <Text style={styles.successText}>From: 11234001000</Text>
                        <Text style={styles.successText}>To: 1234005001</Text>
                        <Text style={styles.successText}>Description: Bayar hutang dan beli Bakso</Text>

                        <View style={styles.modalButtonContainer}>
                            <Pressable
                                style={[styles.modalButton, styles.printButton]}
                            >
                                <Text style={styles.buttonText}>Print</Text>
                            </Pressable>
                            <Pressable
                                style={[styles.modalButton, styles.closeButton]}
                                onPress={() => setSuccessModalVisible(false)}
                            >
                                <Text style={styles.buttonText}>Close</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </Modal>
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

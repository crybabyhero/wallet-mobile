import { useState } from "react";
import { KeyboardAvoidingView, Modal, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { UseAuth } from "../context/authContext";
import { register, login } from "../api/restApi";

const Form = ({ state }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [avatarUrl, setAvatarUrl] = useState('');
    const [phone_number, setPhoneNumber] = useState('');
    const [error, setError] = useState({});
    const [isSelected, setIsSelected] = useState(false);
    const [isModalVisible, setModalVisible] = useState(false);
    const { login: setLoginState } = UseAuth();
    const navigation = useNavigation();

    const handleSubmit = async () => {
        try {
            const response = await register(name, email, password, phone_number);
            navigation.navigate('Login');
            alert('Selamat Datang ' + response.data.full_name);
        } catch (error) {
            alert('Error', error);
        }
    }

    const handleLogin = async () => {
        try {
            // AsyncStorage.setItem('userFullName', user.full_name);
            const response = await login(email, password);
            setLoginState(response.data.token);
            alert('Login successful');
            navigation.navigate('TabNavigator');
        } catch (error) {
            console.log(error, 'error');
            alert('Error', error.message);
        }
    }

    const validateForm = () => {
        const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        const validPassword = password.length >= 7;

        if (!validEmail) {
            setError({ email: 'Please enter a valid email' });
            return false;
        } else {
            setError({ email: '' });
        }

        if (!validPassword) {
            setError({ password: 'Password must be at least 7 characters' });
            return false;
        } else {
            setError({ password: '' });
        }
        return true;
    };

    const checkbox = () => {
        if (!isSelected) {
            setError({ checkbox: 'You must agree to the terms and conditions' });
            return false;
        } else {
            setError({ checkbox: '' });
        }
    }


    return (
        <KeyboardAvoidingView behavior="padding" style={{ alignItems: 'center' }}>
            <SafeAreaView>
                {state === 'register' && (
                    <TextInput
                        style={styles.container}
                        value={name}
                        onChangeText={setName}
                        placeholder="Full Name"
                    />
                )}

                <TextInput
                    style={styles.container}
                    value={email}
                    onChangeText={(text) => { validateForm(); setEmail(text); }}
                    placeholder="Email"
                    autoCorrect={false}
                    autoCapitalize="none"
                    keyboardType="email-address"
                />
                {error.email && <Text style={{ color: 'red' }}>{error.email}</Text>}

                <TextInput
                    style={styles.container}
                    value={password}
                    onChangeText={(text) => { validateForm(); setPassword(text); }}
                    placeholder="Password"
                    secureTextEntry
                />
                {error.password && <Text style={{ color: 'red' }}>{error.password}</Text>}

                {state === 'register' && (
                    <TextInput
                        style={styles.container}
                        value={phone_number}
                        onChangeText={setPhoneNumber}
                        placeholder="Phone Number"
                    />
                )}
                {state === 'register' && (
                    <TextInput
                        style={styles.container}
                        value={avatarUrl}
                        onChangeText={setAvatarUrl}
                        placeholder="Avatar URL"
                    />
                )}

                {state === 'register' && (
                    <>
                        <View style={styles.checkboxContainer}>
                            <TouchableOpacity
                                style={[styles.checkbox, isSelected && styles.checkboxSelected]}
                                onPress={() => setIsSelected(!isSelected)}
                            />
                            <Text style={styles.checkboxLabel}>I have read and agree to the
                            </Text>
                            <TouchableOpacity >
                                <Text style={styles.link} onPress={() => setModalVisible(true)}>Terms and Conditions</Text>
                            </TouchableOpacity>
                            <Text style={{ color: 'red' }}>*</Text>
                        </View>
                        {error.checkbox && <Text style={{ color: 'red' }}>{error.checkbox}</Text>}
                    </>
                )}

                <Modal
                    onRequestClose={() => setModalVisible(false)}
                    animationType="slide"
                    transparent={false}
                    visible={isModalVisible}
                >
                    <View style={styles.modalContainer}>
                        <View style={styles.modalContent}>
                            <Text style={styles.modalTitle}>Terms and Conditions</Text>
                            <ScrollView style={styles.modalScrollView}>
                                <Text style={styles.modalText}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </Text>
                                <Text style={styles.modalText}>
                                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </Text>
                                <Text style={styles.modalText}>
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                                </Text>
                                <Text style={styles.modalText}>
                                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </Text>
                            </ScrollView>
                            <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.modalButton}>
                                <Text style={styles.modalButtonText}>Close</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>

                {state === 'login' ? (
                    <TouchableOpacity onPress={handleLogin} style={styles.button}>
                        <Text style={{ color: 'white', fontWeight: 'bold' }}>Login</Text>
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity onPress={handleSubmit} style={styles.button}>
                        <Text style={{ color: 'white', fontWeight: 'bold' }}>Register</Text>
                    </TouchableOpacity>
                )}
            </SafeAreaView>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FAFBFD',
        height: 45,
        width: 350,
        justifyContent: 'center',
        borderRadius: 10,
        borderColor: 'black',
        borderWidth: 0.5,
        marginBottom: 10,
        paddingLeft: 20,
    },
    button: {
        backgroundColor: '#19918F',
        width: 350,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginTop: 10,
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        marginTop: 10
    },
    checkbox: {
        width: 20,
        height: 20,
        borderWidth: 1,
        borderColor: '#999',
        borderRadius: 3,
        marginRight: 10,
    },
    checkboxSelected: {
        backgroundColor: '#19918F',
        borderColor: '#19918F',
    },
    checkboxLabel: {
        fontSize: 14,
        color: '#333',
    },
    link: {
        marginLeft: 3,
        fontSize: 14,
        color: '#19918F',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    modalContent: {
        padding: 40,
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#19918F',
        marginBottom: 15,
        textAlign: 'center',
    },
    modalScrollView: {
        maxHeight: 300,
    },
    modalText: {
        fontSize: 16,
        lineHeight: 24,
        marginBottom: 10,
        textAlign: 'justify',
        color: '#333',
    },
    modalButton: {
        backgroundColor: '#19918F',
        paddingVertical: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 20,
    },
    modalButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        width: '50',
        textAlign: 'center',
    },
});

export default Form;

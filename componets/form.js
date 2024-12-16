import { useState } from "react";
import { KeyboardAvoidingView, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";


const Form = ({ state }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [avatarUrl, setAvatarUrl] = useState('');
    const [error, setError] = useState({});
    const [isSelected, setIsSelected] = useState(false);
    const navigation = useNavigation();

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
    const handleLogin = () => {
        if (validateForm()) {
            navigation.navigate('Home');
            console.log('ok')
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
                            <Text style={styles.checkboxLabel}>I agree to
                                the terms and conditions
                            </Text>
                        </View>
                        {error.checkbox && <Text style={{ color: 'red' }}>{error.checkbox}</Text>}
                    </>
                )}

                {state === 'login' ? (
                    <TouchableOpacity onPress={handleLogin} style={styles.button}>
                        <Text style={{ color: 'white', fontWeight: 'bold' }}>Login</Text>
                    </TouchableOpacity>
                ) : (
                    <TouchableOpacity onPress={validateForm} style={styles.button}>
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
});

export default Form;

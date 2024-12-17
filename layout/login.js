import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import Form from '../componets/form';
import Button from '../componets/button';

export default function Login({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Image
                    source={require('../assets/logo.png')}
                    style={{ width: 250, height: 60, alignContent: 'center', marginTop: 100 }}
                />
                <View style={styles.form}>
                    <Form state='login'></Form>
                </View>
                <View style={styles.container2}>
                    <Text style={styles.text}>Don't have an account? </Text>
                    <Pressable style={styles.Pressable} onPress={() => {
                        navigation.navigate('Signup')
                    }}>
                        <Text style={styles.signup}>{"Sign Up"}</Text>
                    </Pressable>
                </View>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flex: 1
    },
    form: {
        marginTop: 200,
        marginBottom: 10
    },
    container2: {
        flexDirection: 'row',
        alignItems: 'start',
        justifyContent: 'flex-start',
        marginRight: 120
    },
    Pressable: {
        alignSelf: "flex-start",
    },
    text: {
        color: 'black',
        fontSize: 16,
        marginTop: 10,
    },
    signup: {
        color: '#19918F',
        fontSize: 16,
        marginTop: 10
    }
});

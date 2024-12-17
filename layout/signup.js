import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import Form from '../componets/form';
import Button from '../componets/button';

export default function Signup() {
    return (
        <View style={styles.container}>
            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                <Image
                    source={require('../assets/logo.png')}
                    style={{ width: 250, height: 60, alignContent: 'center', marginTop: 100 }}
                />

                <View style={styles.form}>
                    <Form state={"register"}></Form>
                </View>
                <View style={styles.container2}>
                    <Text style={styles.text}>Already have an account?</Text>
                    <Pressable style={styles.Pressable} onPress={() => {
                        navigation.navigate('Login')
                    }}>
                        <Text style={styles.signup}>{"Login"}</Text>
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
        marginTop: 150,
        marginBottom: 10
    },
    container2: {
        flexDirection: 'row',
        alignItems: 'start',
        justifyContent: 'flex-start',
        marginRight: 150
    },
    Pressable: {
        alignSelf: "flex-start",
        marginLeft: 5
    },
    text: {
        color: 'black',
        fontSize: 16,
        marginTop: 10,
        paddingLeft: 35
    },
    signup: {
        color: '#19918F',
        fontSize: 16,
        marginTop: 10
    }
});

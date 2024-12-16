import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import Form from '../componets/form';
import Button from '../componets/button';

export default function Signup({navigation}) {
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
                <Pressable style={styles.Pressable} onPress={() => {
                    navigation.navigate('Login')
                }}>
                    <Text style={styles.text}>{"Already have an account? Login"}</Text>
                </Pressable>

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
    Pressable: {
        alignSelf: "flex-start"
    },
    text: {
        color: 'black',
        fontSize: 16,
        marginTop: 10,
        paddingLeft: 35
    }
});

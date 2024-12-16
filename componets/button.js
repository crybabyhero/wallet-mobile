import { Pressable, StyleSheet, Text, View } from "react-native"


const Button = ({ children, navigation}) => {
    return (
        <View>
            <Pressable style={styles.button} onPress={() => {
                navigation.navigate('Home')
            }}>
                <Text style={styles.text}>{children}</Text>
            </Pressable>
        </View>
    )

}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#19918F',
        width: 350,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginTop: 10
    },
    text: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    }
})
export default Button
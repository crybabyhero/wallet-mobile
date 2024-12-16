import { Pressable, StyleSheet, Text, View } from "react-native";

const ButtonTwo = ({ title }) => {
    return (
        <View style={styles.container}>
            <Pressable style={styles.button} onPress={() => { }}>
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
        marginTop: 320
    },
    text: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default ButtonTwo;

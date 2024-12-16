import { useNavigation } from "@react-navigation/native";
import { Alert, Pressable, StyleSheet, Text, View } from "react-native";

const ButtonTwo = ({ title }) => {
    const navigate = useNavigation();
    const handlePress = () => {
        Alert.alert(
            "Konfirmasi", 
            "Apakah Anda yakin ingin kembali?",
            [
                {
                    text: "Batal", 
                    onPress: () => console.log("Batal ditekan"),
                    style: "cancel",
                },
                {
                    text: "Ya",
                    onPress: () => navigate.goBack(),
                },
            ],
            { cancelable: true }
        );
    };
    return (
        <View style={styles.container}>
            <Pressable style={styles.button} onPress={() => {
                handlePress();
             }}>
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
        marginTop: 230
    },
    text: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
});

export default ButtonTwo;

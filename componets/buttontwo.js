import { useNavigation } from "@react-navigation/native";
import { Alert, Pressable, StyleSheet, Text, View } from "react-native";

const ButtonTwo = ({ title }) => {
    const navigate = useNavigation();
    const handlePress = () => {
        Alert.alert(
            "Konfirmasi", // Judul alert
            "Apakah Anda yakin ingin kembali?", // Pesan alert
            [
                {
                    text: "Batal", // Tombol batal
                    onPress: () => console.log("Batal ditekan"),
                    style: "cancel", // Gaya tombol
                },
                {
                    text: "Ya", // Tombol konfirmasi
                    onPress: () => navigate.goBack(),
                },
            ],
            { cancelable: true } // Membolehkan pengguna menutup alert di luar dialog
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

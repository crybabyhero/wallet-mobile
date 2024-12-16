import { StyleSheet, Text, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const Optionpayment = () => {
    return (
        <View style={styles.card}>
            <View style={styles.dropdown}>
                <Text style={styles.dropdownText}>BYOND Pay</Text>
                <Icon name="angle-down" size={20} color="black" />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        padding: 15,
        marginBottom: 10,
        backgroundColor: '#FFF',
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    dropdown: {
        paddingVertical: 10,
        paddingHorizontal: 5,
        position: 'relative',
        flexDirection: 'row',
        alignItems: 'center',
    },
    dropdownText: {
        flex: 1,
        fontSize: 16,
        color: '#333',
    },
});

export default Optionpayment;

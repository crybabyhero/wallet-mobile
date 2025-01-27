import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

const Amount = ({balance, nominal}) => {
    const [amount, setAmount] = useState('10000');

    return (
        <View style={styles.card}>
            <Text style={styles.label}>Amount</Text>
            <View style={styles.inputContainer}>
                <Text style={styles.currency}>IDR</Text>
                <TextInput
                    style={styles.input}
                    keyboardType="numeric"
                    value={amount}
                    onChangeText={setAmount}
                    placeholder="Enter amount"
                    placeholderTextColor="#888"
                />
            </View>
            <View style={styles.position}>
                <Text style={styles.balance}>{balance}</Text>
                <Text style={styles.nominal}>{nominal}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        marginVertical: 20,
        padding: 20,
        backgroundColor: '#FFF',
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    label: {
        fontWeight: '600',
        fontSize: 18,
        color: '#444',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        paddingVertical: 5,
    },
    currency: {
        fontWeight: '600',
        fontSize: 16,
        color: '#555',
        marginRight: 10,
    },
    input: {
        flex: 1,
        fontSize: 40,
        color: '#333',
    },
    position: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 10
    },
    balance: {
        fontWeight: 'regular',
        fontSize: 14,
        color: '#555',
    },
    nominal: {
        fontWeight: '600',
        fontSize: 14,
        color: '#19918F',
    },
});

export default Amount;

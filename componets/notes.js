import { useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

const Notes = () => {
    const [notes, setNotes] = useState('');

    return (
        <View style={styles.card}>
            <Text style={styles.label}>Notes</Text>
            <TextInput
                style={styles.input}
                multiline
                value={notes}
                onChangeText={setNotes}
                placeholder=""
                placeholderTextColor="#aaa" 
            />
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        marginVertical: 10,
        padding: 20,
        backgroundColor: '#FFF',
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
    },
    label: {
        fontSize: 18,
        fontWeight: '400',
        color: 'gray',
        marginBottom: 12,
    },
    input: {
        fontSize: 16,
        color: '#333', 
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        paddingVertical: 10,
        height: 40,
    },
});

export default Notes;

import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native"
import AppBar from "../componets/appbar"
import Amount from "../componets/formammount"
import Notes from "../componets/notes"
import ButtonTwo from "../componets/buttontwo"

const Transfer = () => {
    return (
        <ScrollView>
            <View>
                <AppBar
                    title="Transfer">
                </AppBar>
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.Text}>To:
                </Text>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Enter recipient"
                    placeholderTextColor={'#aaa'}
                    keyboardType="numeric"
                ></TextInput>
            </View>
            <View>
                <Amount balance="Balance" nominal="IDR 1.000.000.00"></Amount>
            </View>
            <View>
                <Notes></Notes>
            </View>
            <View>
                <ButtonTwo title="Transfer"></ButtonTwo>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    Text: {
        color: 'white',
        fontSize: 16,
        textAlign: 'start',
        textAlignVertical: 'center',
        paddingLeft: 20
    },
    inputContainer: {
        flexDirection: 'row',
        backgroundColor: '#19918F',
        height: 50,
        marginBottom: 20,
        fontSize: 16,
        alignItems: 'center',
    },
    TextInput: {
        justifyContent: 'center',
        paddingLeft: 20,
        textAlignVertical: 'top',
    }
})
export default Transfer
import { Alert, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import AppBar from "../componets/appbar";
import Amount from "../componets/formammount";
import Notes from "../componets/notes";
import ButtonTwo from "../componets/buttontwo";
import { useEffect, useState } from "react";
import { postTranscation } from "../api/restApi";

const Transfer = () => {
    const [amount, setAmount] = useState();
    const [type, setType] = useState("d");
    const [from_to, setFrom_to] = useState();
    const [description, setDescription] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleAmountChange = (newAmount) => {
        setAmount(newAmount);
    };

    const [user, setUser] = useState({});
    useEffect(() => {
        const getUser = async () => {
            setIsLoading(true);
            try {
                const response = await Transcation();
                setUser(response.data);
                setFrom_to(response.data.account_no);
            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        };
        getUser();
    }, []);

    const handleTransfer = async () => {
        console.log("Transfer Details:", { type, from_to, amount, description });
        if (!amount || !description || !from_to) {
            console.log("Validation Error: Please fill all fields.");
            return;
        }
        try {
            const response = await postTranscation(type, from_to, amount, description);
            console.log(response.data); 
            Alert.alert("Success", "Transfer berhasil dilakukan!");
            return response.data;
        } catch (error) {
            console.log("API Error:", error.response?.data || error.message);
        }
    };

    return (
        <ScrollView>
            <View>
                <AppBar title="Transfer" />
            </View>
            <View style={styles.inputContainer}>
                <Text style={styles.Text}>To:</Text>
                <TextInput
                    style={styles.TextInput}
                    placeholder="Enter recipient"
                    placeholderTextColor={"#aaa"}
                    keyboardType="numeric"
                    value={from_to}
                    onChangeText={setFrom_to}
                />
            </View>
            <View>
                <Amount amount={amount} onAmountChange={handleAmountChange} />
            </View>
            <View>
                <Notes notes={description} setNotes={setDescription} />
            </View>
            <View>
                <ButtonTwo title="Transfer" onPress={handleTransfer} />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    Text: {
        color: "white",
        fontSize: 16,
        paddingLeft: 20,
    },
    inputContainer: {
        flexDirection: "row",
        backgroundColor: "#19918F",
        height: 50,
        marginBottom: 20,
        alignItems: "center",
    },
    TextInput: {
        flex: 1,
        paddingLeft: 20,
    },
});

export default Transfer;

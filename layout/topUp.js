import { Alert, ScrollView, Text, View } from "react-native"
import AppBar from "../componets/appbar"
import Amount from "../componets/formammount"
import OptionPayment from "../componets/optionpayment"
import Notes from "../componets/notes"
import ButtonTwo from "../componets/buttontwo"
import { useEffect, useState } from "react"
import api, { postTranscation, Transcation } from "../api/restApi"


const TopUp = () => {
    const [amount, setAmount] = useState();
    const [type, setType] = useState('c');
    const [from_to, setFrom_to] = useState();
    const [description, setDescription] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleAmountChange = (newAmount) => {
        setAmount(newAmount);
    }

    const [user, setUser] = useState({});
    useEffect(() => {
        const getUser = async () => {
            setIsLoading(true);
            try {
                const response = await Transcation();
                setUser(response.data);
                setFrom_to(response.data.account_no)
                console.log(response.data.account_no);
            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false);
                console.log("user", user);
            }
        }
        getUser();
        console.log(user);
    }, []);

    const handleTopUp = async () => {
        console.log(type, from_to, amount, description)
        try {
            const response = await postTranscation(type, from_to, amount, description);
            console.log(response.data);
            Alert.alert("Success", "Top Up berhasil dilakukan!");
            return response.data
        } catch (error) {
            console.log(error.response.data);
        }
    }

    return (
        <ScrollView>
            <View>
                <AppBar
                    title="Top Up">
                </AppBar>
            </View>
            <View>
                <Amount amount={amount} onAmountChange={handleAmountChange}></Amount>
            </View>
            <View>
                <OptionPayment></OptionPayment>
            </View>
            <View>
                <Notes notes={description} setNotes={setDescription}></Notes>
            </View>
            <View>
                <ButtonTwo title="Top Up" onPress={handleTopUp}></ButtonTwo>
            </View>
        </ScrollView>
    )
}

export default TopUp
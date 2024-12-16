import { ScrollView, Text, View } from "react-native"
import AppBar from "../componets/appbar"
import Amount from "../componets/formammount"
import OptionPayment from "../componets/optionpayment"
import Notes from "../componets/notes"
import ButtonTwo from "../componets/buttontwo"

const TopUp = () => {
    return (
        <ScrollView>
            <View>
                <AppBar
                    title="Top Up">
                </AppBar>
            </View>
            <View>
                <Amount></Amount>
            </View>
            <View>
                <OptionPayment></OptionPayment>
            </View>
            <View>
                <Notes></Notes>
            </View>
            <View>
                <ButtonTwo title="Top Up"></ButtonTwo>
            </View>
        </ScrollView>
    )
}

export default TopUp
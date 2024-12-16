import { View, Text, ScrollView, StyleSheet, Image, TouchableHighlight, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import ListPengguna from '../componets/listPengguna';
import { use, useState } from "react";

const Home = ({ navigation }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const toggleEye = () => {
        setIsOpen(!isOpen);
    };
    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };
    return (
        <View style={styles.root}>
            <View>
                {/* ============== NAVBAR =============== */}
                <View style={styles.appBar}>
                    <View style={styles.profileContainer}>
                        <Image source={require('../assets/profil.png')} style={styles.profileImage} />
                        <View style={styles.appBarText}>
                            <Text style={styles.profileName}>Chelsea Immanuela</Text>
                            <Text style={styles.profileDesc}>Personal Account</Text>
                        </View>
                    </View>
                    <TouchableOpacity onPress={toggleDarkMode}>
                        {isDarkMode ? (
                            <Icon name="sun-o" size={24} color="orange" style={styles.icon} />
                        ) : (
                            <Icon name="moon-o" size={24} color="black" style={styles.icon} />
                        )}
                    </TouchableOpacity>
                </View>
                {/* ============== CONTENT =============== */}
                <View style={styles.textContent}>
                    <View style={styles.textContainer}>
                        <Text style={styles.textContent1}>Good Morning, Chelsea</Text>
                        <Text style={styles.textContent2}>Check all your incoming and outgoing transactions here</Text>
                    </View>
                    <Image source={require('../assets/mat.png')} style={styles.sun}></Image>
                </View>
                {/* ============== Account Information =============== */}
                <View style={styles.cardAccount}>
                    <View style={styles.textMain}>
                        <Text style={styles.TextAccount}>Account No.</Text>
                        <Text style={styles.textNumber}>21301303</Text>
                    </View>
                </View>
                {/* ============== Transaction History =============== */}
                <View style={styles.cardBalance}>
                    <View style={styles.posBalance}>
                        <View>
                            <Text style={styles.textBalance}>Balance</Text>
                            <View style={styles.balance}>
                                <Text style={styles.textBalance1}>
                                    {isOpen ? 'IDR 1.000.000.00' : '**********'}
                                </Text>
                                <TouchableOpacity onPress={toggleEye}>
                                    {isOpen ? (
                                        <Icon name="eye" size={24} style={styles.eye}></Icon>
                                    ) : (
                                        <Icon name="eye-slash" size={24} style={styles.eye}></Icon>
                                    )}
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.button}>
                            <TouchableHighlight onPress={() => {
                                navigation.navigate('TopUp')
                            }}>
                                <Icon name="plus" size={24} style={styles.plus}></Icon>
                            </TouchableHighlight>
                            <TouchableHighlight onPress={() => {
                                navigation.navigate('Transfer')
                            }}>
                                <Icon name="paper-plane" size={24} style={styles.paper} color="black"></Icon>
                            </TouchableHighlight>
                        </View>
                    </View>
                </View>
                <View style={styles.section}>

                    <ListPengguna />
                </View>
            </View>
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: '#FAFBFD',
    },
    appBar: {
        height: 100,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        paddingHorizontal: 20,
    },
    profileContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
        marginTop: 15,
        paddingHorizontal: 2
    },
    profileImage: {
        width: 60,
        height: 60,
        borderRadius: 30,
    },
    appBarText: {
        marginLeft: 10,
    },
    profileName: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    profileDesc: {
        fontSize: 12,
    },
    icon: {
        marginTop: 15,
        paddingRight: 10
    },
    textContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignContent: 'center',
        padding: 3,
        margin: 10
    },
    textContainer: {
        flex: 1,
        marginLeft: 10
    },
    textContent1: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'start',
        marginTop: 10
    },
    textContent2: {
        fontSize: 14,
        textAlign: 'start',
        marginTop: 4,
        color: 'grey',
    },
    sun: {
        color: 'orange',
        height: "100%",
        width: "20%",
        marginRight: 10,
        marginTop: 5
    },
    cardAccount: {
        marginHorizontal: 20,
        marginTop: 20,
        marginBottom: 5,
        backgroundColor: "#19918F",
        height: 50,
        width: 360,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        elevation: 2
    },
    textMain: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        gap: 160
    },
    TextAccount: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'semibold',
        color: 'white'
    },
    textNumber: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white'
    },
    cardBalance: {
        backgroundColor: 'white',
        marginHorizontal: 20,
        marginTop: 10,
        height: 160,
        width: 370,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: 'rgba(128, 128, 128, 0.2)',
    },
    posBalance: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        gap: 10,
        marginTop: 20
    },
    balance: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 15
    },
    textBalance1: {
        color: 'black',
        fontSize: 20,
        fontWeight: 'bold',
    },
    textBalance: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'semibold',
    },
    button: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        gap: 15,
        alignContent: 'center',
        alignItems: 'center'
    },
    eye: {
        color: 'black',
        marginTop: 1
    },
    plus: {
        backgroundColor: '#19918F',
        height: 50,
        width: 50,
        borderRadius: 8,
        padding: 15,
        color: 'white'

    },
    paper: {
        color: 'white',
        backgroundColor: '#19918F',
        height: 50,
        width: 50,
        borderRadius: 8,
        padding: 12
    },
});

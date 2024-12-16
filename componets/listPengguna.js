import React from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';

const transactionData = [
    { id: '1', name: 'Adityo Gizwanda', type: 'Transfer', date: '08 December 2024', amount: '- 75.000,00', isPositive: false },
    { id: '2', name: 'Adityo Gizwanda', type: 'Topup', date: '08 December 2024', amount: '+ 75.000,00', isPositive: true },
    { id: '3', name: 'Adityo Gizwanda', type: 'Transfer', date: '08 December 2024', amount: '- 75.000,00', isPositive: false },
    { id: '4', name: 'Adityo Gizwanda', type: 'Transfer', date: '08 December 2024', amount: '+ 75.000,00', isPositive: true },
    { id: '5', name: 'Adityo Gizwanda', type: 'Transfer', date: '08 December 2024', amount: '- 75.000,00', isPositive: false },
    { id: '6', name: 'Adityo Gizwanda', type: 'Transfer', date: '08 December 2024', amount: '+ 75.000,00', isPositive: true },
    { id: '', name: 'Adityo Gizwanda', type: 'Transfer', date: '08 December 2024', amount: '- 75.000,00', isPositive: false },
];

// Komponen untuk baris transaksi dalam bentuk tabel
const TransactionRow = ({ name, type, date, amount, isPositive }) => (
    <View style={styles.row}>
        <Image
            style={styles.profileImage}
            source= {{ uri: 'https://via.placeholder.com/40' }} 
        />
        <View style={styles.detailsContainer}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.type}>{type}</Text>
            <Text style={styles.date}>{date}</Text>
        </View>
        <Text style={[styles.amount, isPositive ? styles.positive : styles.negative]}>
            {amount}
        </Text>
    </View>
);

const ListPengguna = () => {
    return (
        <View style={styles.card}>
            <Text style={styles.header}>Transaction History</Text>
            <View style={styles.table}>
                <FlatList
                    data={transactionData}
                    nestedScrollEnabled
                    scrollEnable={false}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <TransactionRow
                            name={item.name}
                            type={item.type}
                            date={item.date}
                            amount={item.amount}
                            isPositive={item.isPositive}
                        />
                    )}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
        margin: 20,
        elevation: 2,
    },
    header: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    table: {
        borderTopWidth: 1,
        borderColor: '#ccc',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f0f0f0',
    },
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10,
    },
    detailsContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    name: {
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 2,
    },
    type: {
        fontSize: 12,
        color: '#777',
        marginBottom: 2, // Memberi jarak ke bawah
    },
    date: {
        fontSize: 10,
        color: '#A9A9A9',
    },
    amount: {
        fontSize: 14,
        fontWeight: 'bold',
        width: 80,
        textAlign: 'right',
    },
    positive: {
        color: '#34C759',
    },
    negative: {
        color: '#FF3B30',
    },
});

export default ListPengguna;

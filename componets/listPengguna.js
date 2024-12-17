import { View, Text, StyleSheet, FlatList, Image, ActivityIndicator } from 'react-native';
import { fetchPosts, historyTranscation } from '../api/restApi';
import { use, useEffect, useState } from 'react';

const transactionData = [
    // { id: '1', name: 'Adityo Gizwanda', type: 'Transfer', date: '08 December 2024', amount: '- 75.000,00', isPositive: false },
    // { id: '2', name: 'Adityo Gizwanda', type: 'Topup', date: '08 December 2024', amount: '+ 75.000,00', isPositive: true },
    // { id: '3', name: 'Adityo Gizwanda', type: 'Transfer', date: '08 December 2024', amount: '- 75.000,00', isPositive: false },
    // { id: '4', name: 'Adityo Gizwanda', type: 'Transfer', date: '08 December 2024', amount: '+ 75.000,00', isPositive: true },
    // { id: '5', name: 'Adityo Gizwanda', type: 'Transfer', date: '08 December 2024', amount: '- 75.000,00', isPositive: false },
    // { id: '6', name: 'Adityo Gizwanda', type: 'Transfer', date: '08 December 2024', amount: '+ 75.000,00', isPositive: true },
    // { id: '', name: 'Adityo Gizwanda', type: 'Transfer', date: '08 December 2024', amount: '- 75.000,00', isPositive: false },
];

const TransactionRow = ({ avatarUrl, name, type, date, amount, isPositive }) => (
    <View style={styles.row}>
        <Image
            style={styles.profileImage}
            source={{ uri: avatarUrl }}
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
    const [transactions, setTransactions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getTransactions = async () => {
            try {
                const data = await historyTranscation();
                setTransactions(data.data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }
        getTransactions();
        console.log(transactions);
    }, []);

    if (loading) {
        return <ActivityIndicator size="large" color="#0000ff" />;
    }

    if (error) {
        return (
            <View>
                <Text>Error: {error}</Text>
            </View>
        );
    }

    return (
        <View style={styles.card}>
            <Text style={styles.header}>Transaction History</Text>
            <View style={styles.table}>
                <FlatList
                    style={{ height: 300 }}
                    data={transactions}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <TransactionRow
                            avatarUrl={item.avatar || 'https://via.placeholder.com/40'}
                            name={ item.user_id}
                            type={item.type}
                            date={item.created_at}
                            amount={item.amount}
                            isPositive={item.isPositive || false}
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
        width: 50,
        height: 50,
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

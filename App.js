import { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const [points, setPoints] = useState(0);

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>My Profile</Text>
      </View>

      {/* Profile picture */}
      <View style={styles.avatarWrapper}>
        <Image source={require('./assets/profile.jpg')} style={styles.avatar} />
      </View>

      {/* Divider line */}
      <View style={styles.divider} />

      {/* Details */}
      <View style={styles.details}>
        <Text style={styles.label}>Name</Text>
        <Text style={styles.value}>Himeshi</Text>

        <Text style={styles.label}>Email</Text>
        <View style={styles.row}>
          <Ionicons name="mail" size={18} color="black" />
          <Text style={styles.rowText}>himeshi@students.nsbm.ac.lk</Text>
        </View>

        <Text style={styles.label}>Points</Text>
        <View style={styles.row}>
          <Ionicons name="star" size={18} color="black" />
          <Text style={styles.rowText}>{points}</Text>
        </View>
      </View>

      {/* Add button */}
      <TouchableOpacity style={styles.fab} onPress={() => setPoints(points + 1)}>
        <Ionicons name="add" size={26} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f4f4f4' },
  header: {
    backgroundColor: 'black',
    paddingTop: 50,
    paddingBottom: 14,
    alignItems: 'center',
  },
  headerTitle: { color: 'white', fontSize: 24, fontWeight: 'bold' },
  avatarWrapper: { alignItems: 'center', marginTop: 20 },
  avatar: { width: 100, height: 100, borderRadius: 50, backgroundColor: 'white' },
  divider: { height: 5, backgroundColor: 'black', marginHorizontal: 16, marginVertical: 14 },
  details: { paddingHorizontal: 16 },
  label: { fontWeight: '700', fontSize: 16, marginTop: 14 },
  value: { fontSize: 14, marginTop: 4 },
  row: { flexDirection: 'row', alignItems: 'center', marginTop: 4 },
  rowText: { fontSize: 14, marginLeft: 8 },
  fab: {
    position: 'absolute',
    right: 20,
    bottom: 30,
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
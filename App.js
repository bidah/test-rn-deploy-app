import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.badge}>UPDATE TEST</Text>
      <Text style={styles.title}>Update v3</Text>
      <Text style={styles.subtitle}>
        Edited on the Mac at 05:13:44 — no rebuild, no reinstall.
      </Text>
      <Text style={styles.version}>1.0.1 (2) · preview</Text>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#065f46',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 32,
  },
  badge: {
    color: '#c7d2fe',
    fontSize: 13,
    fontWeight: '700',
    letterSpacing: 2,
    marginBottom: 12,
  },
  title: {
    color: '#ffffff',
    fontSize: 40,
    fontWeight: '800',
    marginBottom: 16,
  },
  subtitle: {
    color: '#e0e7ff',
    fontSize: 17,
    lineHeight: 24,
    textAlign: 'center',
  },
  version: {
    color: '#a5b4fc',
    fontSize: 14,
    marginTop: 32,
    fontVariant: ['tabular-nums'],
  },
});

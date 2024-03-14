import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button
} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Sidimir Henrique de Paula Souza</Text>
      <Text>Desenvolvimento de dispositivos móveis 22/02/2024</Text>
      <Text>Desenvolvimento de dispositivos móveis 29/02/2024</Text>
      <Button title = 'Salvar'></Button> 
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

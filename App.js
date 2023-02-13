import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { getConexion, initDataBase, insertTipoTeniencia } from './src/utils/bd';

export default function App() {
  const insertPrueba = async () => {
    const db = getConexion()
    insertTipoTeniencia(db, 'propiedad con titulo')
    db.close()
  }

  useEffect(()=> [
    async () => {
      await initDataBase()
    } 
  ], [])
  return (
    <View style={styles.container}>
      <Text>Tabla tipo_teniencia</Text>
      <Button
        onPress={insertPrueba()}
        title={'ENVIAR DATOS'}
      />
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

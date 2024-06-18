import { StyleSheet, Text, View } from 'react-native';
import MainNavigation from './src/navigations/MainNavigation';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';




export default function App() {
  return (
    <Provider store={store}>
      <MainNavigation />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }

});

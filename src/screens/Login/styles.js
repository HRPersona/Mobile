import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    margin: 0
  },
  title: {
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 24
  },
  form: {
  },
  btn: {
    width: '90%',
    marginTop: 20,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  message: { width: '100%', textAlign: 'center', marginTop: 30 }
});

export default styles;

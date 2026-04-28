import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  hidden: {
    display: 'none',
  },     
  h1: {
    margin: 0,
  },
  pre: {
    marginTop: 0,
  },
  show: {
    display: 'block',
  },   
  content: {
    // 'line-height: normal' is default in RN; 
    // 1.2em requires a fixed number based on your base font size (e.g., 18)
    lineHeight: 20, 
    fontFamily: 'sans-serif',
    fontSize: 18, 
  },
  menumodalImg: {
    width: 150,
    // Note: React Native images often require a height to be visible
    height: 150, 
    resizeMode: 'contain',
  },
  menumodal: {
    position: 'absolute',
    width: 250,
    left: 0,
    top: 42,
    backgroundColor: 'hsl(34, 85%, 92%,1)',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#D2691E', // Opaque chocolate
  },
  menuHeader: {
    margin: 10,
    flexDirection: 'row',
  },
  menuInfo: {
    flexDirection: 'column',
    marginLeft: 10,
    marginBottom: 10,
  },
  menuInfoH3: {
    margin: 0,
    marginBottom: 5,
  },
  menuButton: {
    position: 'absolute',
    right: 0,
    margin: 8,
    marginTop: 7,
    height: 28,
  },
});
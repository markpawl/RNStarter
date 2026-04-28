import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  hidden: {
    display: 'none',
  },     
  h1: {
    fontSize: 24,
    fontWeight: 'bold',
    margin: 10,
    color: '#000000',
  },
  h3: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 0,
    marginBottom: 8,
    marginTop: 10,
    color: '#000000',
  },  
  pre: {
    fontFamily: 'monospace',
    marginTop: 0,
    marginBottom: 10,
    backgroundColor: '#f4f4f4',
    padding: 10,
    borderRadius: 4,
    fontSize: 14,
  },
  show: {
    display: 'block',
  },   
  content: {
    lineHeight: 20, 
    fontFamily: 'sans-serif',
    fontSize: 18, 
  },
  menumodalImg: {
    width: 150,
    height: 150, 
    resizeMode: 'contain',
  },
  menuFullScreen: {
    backgroundColor: '#F5DEB3',
    paddingTop: 10,
    alignSelf: 'flex-start',
  },
  closeButton: {
    position: 'absolute',
    right: 15,
    top: 15,
    padding: 5,
    zIndex: 10,
  },
  menuHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#D2691E',
  },
  menuContent: {
    flex: 1,
    padding: 15,
  },
  menuInfo: {
    flexDirection: 'column',
    marginLeft: 10,
    marginBottom: 10,
  },
  menuInfoH3: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 0,
    marginBottom: 5,
    marginTop: 15,
  },
  menuButton: {
    position: 'absolute',
    right: 0,
    margin: 8,
    marginTop: 7,
    height: 28,
  },
  link: {
    fontSize: 16,
    color: '#0066CC',
    marginBottom: 5,
  },
});
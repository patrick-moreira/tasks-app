import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    containerHeader:{
        backgroundColor: '#222',
        justifyContent: 'center',
        alignItems: 'center',
        height: 55
    },
    textHeader:{
        color: '#f1f1f1',
    },
    container:{
        paddingHorizontal: 10,
        paddingVertical: 8
    },
    inputContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    inputTask:{
        backgroundColor: '#fff',
        flex: 0.96
    },
    buttonAdd:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00f',
    },
    textButtonAdd:{
        color: '#f1f1f1',
        padding: 10
    },
    cardContainer:{
        marginTop: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    cardTask:{
        backgroundColor: '#fff',
        flex: 0.96,
        justifyContent: 'center',
    },
    buttonRmv:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f00',
    },
    textButtonRmv:{
        color: '#f1f1f1',
        padding: 10
    }
});


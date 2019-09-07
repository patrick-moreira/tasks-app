import React from 'react';

import { View, Text } from 'react-native';
import { styles } from './styles';

const Header = (props) => {
    return (
        <View style={styles.containerHeader}>
            <Text style={styles.textHeader}>{props.headertitle}</Text>
        </View>
    );

}

export default Header;

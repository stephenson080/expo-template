import {View, StyleSheet, ActivityIndicator} from 'react-native'
import {Colors} from '../../utils/constants'

export default function Loader(){
    return (
        <View style={styles.loader}>
            <ActivityIndicator size={40} color={Colors.PRIMARY} />
        </View>
    )
}

const styles = StyleSheet.create({
    loader: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    }
})
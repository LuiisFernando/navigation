import React from 'react'
import { ScrollView, View, Text, StyleSheet, AsyncStorage, TouchableOpacity } from 'react-native'
import { DrawerItems } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'

// import commonStyles from '../commonStyles'

export default props => {

    return (
        <ScrollView>
            <View styles={styles.header}>
                <Text style={styles.title}>SPBUS</Text>
                <View style={styles.userInfo}>
                    <View>
                        <Text style={styles.name}>
                            Luis
                        {/* {props.navigation.getParam("name")} */}
                        </Text>
                        <Text style={styles.email}>
                            lsh@mail.com
                        {/* {props.navigation.getParam("email")} */}
                        </Text>
                    </View>
                    <TouchableOpacity onPress={() => { }}>
                        <View style={styles.logoutIcon}>
                            <Icon name="sign-out" size={30} />
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
            <DrawerItems {...props} />
        </ScrollView>
    );

}

const styles = StyleSheet.create({
    header: {
        borderBottomWidth: 1,
        borderColor: '#DDD'
    },
    title: {
        backgroundColor: '#FFF',
        color: '#000',
        // fontFamily: commonstyles.fontFamily,
        fontSize: 30,
        paddingTop: 20,
        padding: 10
    },
    avatar: {
        width: 60,
        height: 60,
        borderWidth: 3,
        borderColor: '#AAA',
        borderRadius: 30,
        margin: 10
    },
    name: {
        // fontFamily: commonstyles.fontFamily,
        color: '#000',
        fontSize: 20,
        marginLeft: 10
    },
    email: {
        // fontFamily: commonstyles.fontFamily,
        color: '#000',
        fontSize: 15,
        marginLeft: 10,
        marginBottom: 10
    },
    menu: {
        justifyContent: 'center',
        alignItems: 'stretch'
    },
    userInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    logoutIcon: {
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 20
    }
})

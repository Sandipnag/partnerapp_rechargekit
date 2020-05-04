import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    StatusBar,
    Dimensions,
    SafeAreaView,
    Image,
    TouchableOpacity
} from 'react-native';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

const { width } = Dimensions.get('screen');
const items = [
    { name: 'bell', code: 'Mobile Prepaid' }, { name: 'bell', code: 'DTH' },
    { name: 'bell', code: 'Electricity' }, { name: 'bell', code: 'Book A Cyclinder' },
    { name: 'bell', code: 'Mobile Postpaid' }, { name: 'bell', code: 'Broadband' },
];
const Dashboard = () => {

    const [boxsize, setBoxsize] = useState(0);
    const [data, setData] = useState(items);
    calculate = (e) => {
        totalData = items.length;
        const numOfitemsPerRow = 4;
        mumberOfRow = Math.ceil(totalData / numOfitemsPerRow);
        setBoxsize((e.nativeEvent.layout.width - 3 * 10) / numOfitemsPerRow);
        let numberOfElementsLastRow = totalData - (mumberOfRow * numOfitemsPerRow);
        while (numberOfElementsLastRow !== numOfitemsPerRow && numberOfElementsLastRow !== 0) {
            items.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
            numberOfElementsLastRow++;
        }
        setData(items);
    }
    return (
        <View style={styles.container}>
            <StatusBar barStyle="dark-content" hidden={true} />
            <SafeAreaView>
                <View style={styles.appBar}>
                    <View style={styles.user}>
                        <View style={styles.userAvatar}>
                            <Image
                                resizeMode={'contain'}
                                style={{ width: null, height: null, flex: 1 }}
                                source={require('../../assets/images/demo_user.png')}
                            />
                        </View>
                        <Text style={styles.userName}>Hi, Subrata</Text>
                    </View>
                    <View style={styles.rightIcon}>
                        <AntDesign
                            color={'#586A7B'}
                            name="questioncircleo"
                            size={30}
                        />
                        <EvilIcons
                            color={'#586A7B'}
                            name="bell"
                            size={35}
                            style={{ marginLeft: 10 }}
                        />
                    </View>
                </View>
            </SafeAreaView>
            <View style={styles.walletContainer}>
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                    <Entypo
                        color={'#fff'}
                        name="wallet"
                        size={50}
                        style={{ marginLeft: 10 }}
                    />
                    <FontAwesome
                        color={'#fff'}
                        name="inr"
                        size={30}
                        style={{ marginLeft: 10 }}
                    >
                        <Text style={{ fontSize: width * .06 }}> 254.00</Text>
                    </FontAwesome>
                </View>
                <View style={{ flex: 1, alignItems: 'flex-end', justifyContent: 'center' }}>
                    <View style={[styles.addMoney]}>
                        <Ionicons
                            color={'#fff'}
                            name="md-add-circle-outline"
                            size={25}
                            style={{ position: 'absolute',left:'7%' }}
                        />
                        <Text style={styles.addMoneyText}>Add</Text>
                    </View>
                </View>
            </View>
            <Text style={styles.sectionHeader}>Recharge & Bills Pay</Text>
            <View onLayout={(e) => { this.calculate(e) }}
                style={styles.gridContainer}>
                {data.map((single, index) => (
                    <TouchableOpacity
                        onPress={() => { console.log('lklkl') }}
                        key={index}
                        style={
                            [ single.empty==true? {} : styles.item,
                            { 
                                width: boxsize, 
                                height: boxsize,
                                justifyContent:'space-around' 
                            }
                        ]}
                    >
                        <EvilIcons
                            color={'#7F11B5'}
                            name={single.name}
                            size={30}
                        />
                        <Text
                            style={{
                                textAlign: 'center',
                                color: '#3C3C44',
                                fontSize: boxsize * .15
                            }}>
                            {single.code}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>


        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FDFEFF'
    },
    appBar: {
        width: width,
        height: 80,
        // backgroundColor:'red',
        flexDirection: 'row',
        paddingHorizontal: 15
    },
    user: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    userAvatar: {
        height: 50,
        width: 50,
        borderRadius: 50 / 2
    },
    userName: {
        color: '#000000',
        fontSize: width * .04,
        marginLeft: 10
    },
    rightIcon: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end'
    },
    sectionHeader: {
        color: '#000000',
        fontSize: width * .05,
        marginLeft: 15
    },
    gridContainer: {
        marginHorizontal: 15,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginVertical: 15
    },
    item: {
        backgroundColor: '#FAEFFF',
        marginBottom: 10,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#E6B5FF',
    },
    walletContainer: {
        minHeight: 100,
        marginHorizontal: 15,
        borderRadius: 15,
        marginBottom: 20,
        paddingHorizontal: 15,
        flexDirection: 'row',
        overflow: 'hidden',
        backgroundColor: '#3044F2'
    },
    addMoney: {
        borderRadius: 30,
        borderWidth: 2,
        borderColor: '#fff',
        justifyContent: 'center',
        alignItems:'stretch',
        paddingVertical:10,
        paddingHorizontal:30
        // width: '65%',
    },
    addMoneyText: {
        alignSelf: 'flex-end',
        color: '#fff',
        textTransform: 'capitalize',
        fontSize: (width - 48) * .05,
        
        // lineHeight: (width-48) * .05
    }
});

export default Dashboard;

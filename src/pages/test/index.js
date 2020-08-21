import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { Colors } from '../../constants/colors';
import WheelOfFortune from 'react-native-wheel-of-fortune'
const participants = [
    { uri: `https://picsum.photos/20/30` },
    { uri: `https://picsum.photos/20/30` },
    { uri: `https://picsum.photos/20/30` },
    { uri: `https://picsum.photos/20/30` },
    { uri: `https://picsum.photos/20/30` },
    { uri: `https://picsum.photos/20/30` },
    { uri: `https://picsum.photos/20/30` },
    { uri: `https://picsum.photos/20/30` },
    { uri: `https://picsum.photos/20/30` },
    { uri: `https://picsum.photos/20/30` },
]
// const rewards = participants.map(e => ({ uri: `https://picsum.photos/20/30` }))
const colors = ['white', 'black', 'green'];
const AllPlans = (props) => {
    _renderPlayButton = () => {
        return (
          <Text style={styles.tapToStart}>TAP TO fuck</Text>
        );
      }
    var parentRef = React.useRef();
    return (
        <View style={styles.container}>
            <WheelOfFortune
                onRef={ref => (parentRef = ref)}
                duration={10000}
                rewards={participants}
                colors={colors}
                knobSize={30}
                borderWidth={3}
                borderColor={"#FFF"}
                winner={3}
                innerRadius={30}
                backgroundColor={"pink"}
                getWinner={(value, index) => alert(value)}
            />
            <Button title="Press me" onPress={() => { parentRef._onPress() }} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.pageBackground
    }
})

export default AllPlans;
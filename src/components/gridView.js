/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Dimensions,
  Text,
  TouchableOpacity,
} from 'react-native';
class GridView extends React.Component {
  constructor(props) {
    super(props);
  }

  renderItem = ({item, index}) => {
    //console.log(item)
    if (item.empty === true) {
      return <View style={[styles.item, styles.itemInvisible]} />;
    }
    return (
      <TouchableOpacity
        style={[
          styles.item,
          {
            height: Dimensions.get('window').width / this.props.numColumns,
            justifyContent: 'center',
          },
          styles.makeCenter,
        ]}>
        <View
          style={[
            {
              borderWidth: 1,
              borderRadius: 5,
              borderColor: 'blue',
              backgroundColor: 'red',
              height: 100,
              width: 100,
            },
            styles.makeCenter,
          ]}>
          <Text
            style={[styles.itemCustomText, {fontSize: 20, color: item.color}]}>
            {index + 1}
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  formatRow = (data, numColumns) => {
    const numberOfFullRows = Math.floor(data.length / numColumns);
    let numberOfElementsLastRow = data.length - numberOfFullRows * numColumns;
    while (
      numberOfElementsLastRow !== numColumns &&
      numberOfElementsLastRow !== 0
    ) {
      data.push({key: `blank-${numberOfElementsLastRow}`, empty: true});
      numberOfElementsLastRow++;
    }
    return data;
  };

  render() {
    return (
      <FlatList
        data={this.formatRow(this.props.data, this.props.numColumns)}
        style={styles.listContainer}
        renderItem={this.renderItem}
        numColumns={this.props.numColumns}
        keyExtractor={(info, index) => '' + index}
      />
    );
  }
}

const styles = StyleSheet.create({
  makeCenter: {
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  listContainer: {
    flex: 1,
  },
  item: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    flex: 1,
  },
  itemInvisible: {
    borderWidth: 0,
    backgroundColor: 'transparent',
  },
  itemText: {
    color: 'red',
    fontSize: 30,
    fontWeight: 'bold',
  },
  itemCustomText: {
    fontStyle: 'normal',
  },
});

export default GridView;

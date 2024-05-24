import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TreeSpecificNode} from '../../../models';
import {moderateScale, scale} from 'react-native-size-matters';
import {colors, globalStyles} from '../../../theme';

interface SelectionChipProps {
  selectedNodes: TreeSpecificNode[];
}
export const SelectionChip = ({selectedNodes}: SelectionChipProps) => {
  const formatedSelectedNodes = () => {
    const lookupTable: {[key: string]: TreeSpecificNode[]} = {};
    selectedNodes.forEach(node => {
      if (node?.parentNode?.title) {
        lookupTable[node.parentNode.title] = [];
      } else {
        lookupTable[node.title] = [];
      }
    });

    selectedNodes.forEach(node => {
      if (node.parentNode) {
        lookupTable[node.parentNode.title]?.push(node);
      } else {
        if (node.data) {
          lookupTable[node.title] = node.data;
        }
      }
    });

    return lookupTable;
  };

  const selectedNodesArray = Object.keys(formatedSelectedNodes()).map(key => {
    return {
      title: key,
      children: formatedSelectedNodes()
        [key].map(node => node.title)
        .join(', '),
    };
  });

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        columnWrapperStyle={styles.colWrapper}
        data={selectedNodesArray}
        renderItem={({item}) => (
          <View style={styles.chipContainer}>
            <Text style={styles.chipText}>{item.title}: </Text>
            <Text style={styles.chipText}>{item.children}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  colWrapper: {
    flexWrap: 'wrap',
  },
  chipContainer: {
    flexDirection: 'row',
    padding: 5,
    backgroundColor: colors.greyishBlue,
    ...globalStyles.shadow,
    margin: moderateScale(5),
  },
  chipText: {
    fontSize: scale(12),
    fontWeight: 'bold',
  },
});

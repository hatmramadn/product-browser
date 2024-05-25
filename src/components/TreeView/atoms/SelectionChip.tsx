import {FlatList, StyleSheet, Text, View, ViewStyle} from 'react-native';
import React from 'react';
import {TreeSpecificNode} from '../../../models';
import {moderateScale, scale} from 'react-native-size-matters';
import {colors, globalStyles} from '../../../theme';

export type SelectionChip = {
  title: string;
  isAll: boolean;
  selectedChildren: string;
  isLeaf: boolean | undefined;
  parentTitle: string | undefined;
};
interface SelectionChipProps {
  selectedNodes: TreeSpecificNode[];
  containerStyle?: ViewStyle;
  renderChip?: (chip: SelectionChip) => JSX.Element;
}
export const SelectionChip = ({
  selectedNodes,
  containerStyle,
  renderChip,
}: SelectionChipProps) => {
  const formatedSelectedNodes = () => {
    const lookupTable: {
      [key: string]: {
        isAllSelected: boolean;
        selectedNodes: string[];
        isLeaf?: boolean;
        parentTitle?: string;
      };
    } = {};

    selectedNodes.forEach(node => {
      if (node.data) {
        if (!lookupTable[node.title]) {
          lookupTable[node.title] = {
            isAllSelected: false,
            selectedNodes: [],
            isLeaf: false,
          };
        }
      } else {
        if (node.parentNode && node.parentNode.data) {
          if (!lookupTable[node.parentNode.title]) {
            lookupTable[node.parentNode.title] = {
              isAllSelected: false,
              selectedNodes: [],
              isLeaf: true,
            };
          }
        }
      }

      if (node.data && node.parentNode) {
        lookupTable[node.title].parentTitle = node.parentNode.title;
      }
    });

    selectedNodes.forEach(node => {
      if (node.data) {
        const isAllSelected = node.data.every(
          (child: TreeSpecificNode) => child.isSelected,
        );
        lookupTable[node.title].isAllSelected = isAllSelected;
        if (!isAllSelected) {
          lookupTable[node.title].selectedNodes = node.data
            .filter((child: TreeSpecificNode) => child.isSelected)
            .map((child: TreeSpecificNode) => child.title);
        }
      } else {
        if (node.parentNode && node.parentNode.data) {
          const isAllLeafsSelected = node.parentNode.data.every(
            (child: TreeSpecificNode) => child.isSelected,
          );
          lookupTable[node.parentNode.title].isAllSelected = isAllLeafsSelected;
          if (!isAllLeafsSelected) {
            lookupTable[node.parentNode.title].selectedNodes =
              node.parentNode.data
                .filter((child: TreeSpecificNode) => child.isSelected)
                .map((child: TreeSpecificNode) => child.title);
          }
        }
      }
    });

    return lookupTable;
  };

  const selectedNodesArray = Object.keys(formatedSelectedNodes()).map(key => {
    const nodes = formatedSelectedNodes()[key];
    return {
      title: key,
      isAll: nodes.isAllSelected,
      selectedChildren: nodes.selectedNodes.join(', '),
      isLeaf: nodes.isLeaf,
      parentTitle: nodes.parentTitle,
    };
  });

  return (
    <View style={styles.container} testID="selectionChip">
      <FlatList
        numColumns={2}
        columnWrapperStyle={styles.colWrapper}
        data={selectedNodesArray}
        renderItem={({item}) =>
          renderChip ? (
            renderChip(item)
          ) : (
            <View
              style={[styles.chipContainer, containerStyle && containerStyle]}>
              <Text style={styles.chipText}>
                {!item.isLeaf
                  ? `All: ${item.selectedChildren} ${item.title}`
                  : `${item.title}: ${item.selectedChildren}`}
              </Text>
              {item.parentTitle && (
                <Text style={styles.chipText}> {item.parentTitle}</Text>
              )}
            </View>
          )
        }
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

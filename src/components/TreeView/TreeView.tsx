import {FlatList, ListRenderItem, Text, View} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {TreeData, TreeSpecificNode} from '../../models';
import {useTreeHelpers} from './useTreeHelper';
import {LeafNode, ParentNode} from './atoms';
import {SelectionChip} from './atoms/SelectionChip';

interface TreeViewProps {
  data: TreeData;
  autoSelectChildren?: boolean;
  autoExpandChildren?: boolean;
  onSelect: (item: TreeSpecificNode[]) => void;
}

export function TreeView({
  data,
  autoSelectChildren = true,
  autoExpandChildren = true,
  onSelect,
}: TreeViewProps) {
  const {treeData, expandParent, onSelectPressed, selectedNodes} =
    useTreeHelpers({
      data,
      autoSelectChildren,
      autoExpandChildren,
      onSelectHandler: onSelect,
    });

  /*
    Render each item in the list recursively.
  */
  const renderItem = ({item}: {item: TreeSpecificNode}) => {
    const isParent = item?.data && item?.data?.length > 0;
    const isExpanded = item.isExpanded;
    return (
      <>
        {isParent ? (
          <ParentNode
            onExpand={expandParent}
            item={item}
            onSelect={onSelectPressed}
          />
        ) : (
          <LeafNode item={item} onSelect={onSelectPressed} />
        )}
        <View style={styles.nodeSublingsContainer}>
          {isParent && isExpanded && (
            <FlatList
              contentContainerStyle={styles.flatListContentContainer}
              data={item.data}
              renderItem={({item: currentItem}: {item: TreeSpecificNode}) => {
                if (!currentItem.parentNode) {
                  currentItem.parentNode = item;
                }
                return renderItem({item: currentItem});
              }}
              keyExtractor={item => item.objectId}
            />
          )}
        </View>
      </>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.flatListContentContainer}
        data={treeData}
        renderItem={renderItem}
        keyExtractor={item => item.objectId}
        ListFooterComponent={<SelectionChip selectedNodes={selectedNodes} />}
      />
    </View>
  );
}

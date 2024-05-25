import {FlatList, ListRenderItem, Text, View, ViewStyle} from 'react-native';
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
  onItemExpand?: (item: TreeSpecificNode) => void;
  onItemSelect?: (item: TreeSpecificNode) => void;
  renderParentItemContent?: (
    itemTitle: string,
    subNodeTitleCount: string,
    isExpanded: boolean,
  ) => React.ReactNode;
  renderLeafNodeContent?: (
    itemTitle: string,
    itemCount: string,
  ) => React.ReactNode;
  renderCheckMark?: (isSelected: boolean) => React.ReactNode;
  renderExpandCollapseIcon?: (isExpanded: boolean) => React.ReactNode;
  renderSelectionChip?: (chip: SelectionChip) => JSX.Element;
  nodeContainerStyle?: ViewStyle;
  selectionChipContainerStyle?: ViewStyle;
}

export function TreeView({
  data,
  autoSelectChildren = false,
  autoExpandChildren = false,
  onSelect,
  onItemExpand,
  onItemSelect,
  renderParentItemContent,
  renderLeafNodeContent,
  renderCheckMark,
  renderExpandCollapseIcon,
  nodeContainerStyle,
  renderSelectionChip,
  selectionChipContainerStyle,
}: TreeViewProps) {
  const {treeData, expandParent, onSelectPressed, selectedNodes} =
    useTreeHelpers({
      data,
      autoSelectChildren,
      autoExpandChildren,
      onSelectHandler: onSelect,
      onItemExpand,
      onItemSelect,
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
            renderParentItemContent={renderParentItemContent}
            renderExpandCollapseIcon={renderExpandCollapseIcon}
            renderCheckMark={renderCheckMark}
            nodeContainerStyle={nodeContainerStyle}
          />
        ) : (
          <LeafNode
            item={item}
            onSelect={onSelectPressed}
            renderItemContent={renderLeafNodeContent}
            renderCheckMark={renderCheckMark}
            nodeContainerStyle={nodeContainerStyle}
          />
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
    <View style={styles.container} testID="treeView">
      <FlatList
        contentContainerStyle={styles.flatListContentContainer}
        data={treeData}
        renderItem={renderItem}
        keyExtractor={item => item.objectId}
        ListFooterComponent={
          <SelectionChip
            selectedNodes={selectedNodes}
            containerStyle={selectionChipContainerStyle}
            renderChip={renderSelectionChip}
          />
        }
      />
    </View>
  );
}

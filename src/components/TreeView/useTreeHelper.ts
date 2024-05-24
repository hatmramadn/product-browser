import React, {useMemo} from 'react';
import {cloneDeep, set} from 'lodash';

import {TreeData, TreeSpecificNode} from '../../models';

let selectedNodes: Set<TreeSpecificNode> = new Set();

interface UseTreeHelpersProps {
  data: TreeData;
  autoSelectChildren?: boolean;
  autoExpandChildren?: boolean;
  onSelectHandler: (nodes: TreeSpecificNode[]) => void;
}
export const useTreeHelpers = ({
  data,
  autoSelectChildren,
  autoExpandChildren,
  onSelectHandler,
}: UseTreeHelpersProps) => {
  const [refresh, setRefresh] = React.useState(false);
  const [treeData, setTreeData] = React.useState<TreeSpecificNode[]>(
    cloneDeep(data),
  );

  const refreshTree = () => {
    setRefresh(!refresh);
  };

  const expandParent = (item: TreeSpecificNode) => {
    item.isExpanded = !item?.isExpanded;
    // should add onItemPress here
    refreshTree();
  };

  const selectChildrenNodes = (item: TreeSpecificNode, isChild: boolean) => {
    if (item.isSelected && !selectedNodes.has(item) && !isChild) {
      selectedNodes.add(item);
    } else {
      selectedNodes.delete(item);
    }
    if (item?.data) {
      (item.data as TreeSpecificNode[]).forEach(child => {
        child.isSelected = item.isSelected;
        selectChildrenNodes(child, true);
      });
    }
  };

  const onToggleSelection = (item: TreeSpecificNode) => {
    item.isSelected = !item.isSelected;
    if (autoSelectChildren) {
      selectChildrenNodes(item, false);
    } else {
      if (item.isSelected && !selectedNodes.has(item)) {
        selectedNodes.add(item);
      } else {
        selectedNodes.delete(item);
      }
    }
    if (item.parentNode) checkIsEveryNodesSelected(item.parentNode);
    refreshTree();
  };

  // recursive function to check if every children nodes are selected
  const checkIsEveryNodesSelected = (parentNode: TreeSpecificNode) => {
    if (parentNode?.data) {
      const isEveryNodeSelected = (parentNode.data as TreeSpecificNode[]).every(
        node => node.isSelected,
      );
      const isSomeNodeSelected = (parentNode.data as TreeSpecificNode[]).some(
        node => node.isSelected,
      );
      set(parentNode, 'isSelected', isEveryNodeSelected);

      if (!isSomeNodeSelected) {
        selectedNodes.delete(parentNode);
      }
    }

    if (parentNode.parentNode) {
      checkIsEveryNodesSelected(parentNode.parentNode);
    }
    refreshTree();
  };

  const onSelectPressed = (item: TreeSpecificNode) => {
    if (autoExpandChildren && item?.data && !item.isSelected) {
      item.isExpanded = true;
    }

    onToggleSelection(item);
    refreshTree();
    onSelectHandler([...selectedNodes]);
  };

  return {
    treeData,
    expandParent,
    onSelectPressed,
    selectedNodes: [...selectedNodes],
  };
};

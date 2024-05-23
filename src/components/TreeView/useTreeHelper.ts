import React from 'react';
import {cloneDeep, isNull, isObject, set} from 'lodash';

import {TreeData, TreeSpecificNode} from '../../models';

let selectedNodes: TreeSpecificNode[] = [];

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

  const selectChildrenNodes = (item: TreeSpecificNode) => {
    if (item.isSelected) {
      selectedNodes.push(item);
    } else {
      selectedNodes = selectedNodes.filter(
        node => node.objectId !== item.objectId,
      );
    }
    if (item?.data) {
      (item.data as TreeSpecificNode[]).forEach(child => {
        child.isSelected = item.isSelected;
        selectChildrenNodes(child);
      });
    }
  };

  const checkIsAnyNodesSelected = (parentNode: TreeSpecificNode) => {
    // recursive function to check if any of the children nodes are selected
    if (parentNode?.data) {
      const isAnyNodeSelected = (parentNode.data as TreeSpecificNode[]).some(
        node => node.isSelected,
      );
      set(parentNode, 'isSelected', isAnyNodeSelected);
      if (parentNode.parentNode) checkIsAnyNodesSelected(parentNode.parentNode);
    }
  };

  const onToggleSelection = (item: TreeSpecificNode) => {
    if (autoSelectChildren) {
      selectChildrenNodes(item);
    } else {
      item.isSelected = !item.isSelected;
      if (item.isSelected) {
        selectedNodes.push(item);
      } else {
        selectedNodes = selectedNodes.filter(
          node => node.objectId !== item.objectId,
        );
      }
    }
    if (item.parentNode) checkIsAnyNodesSelected(item.parentNode);
  };

  const onSelectPressed = (item: TreeSpecificNode) => {
    if (autoExpandChildren && item?.data && !item.isSelected) {
      item.isExpanded = true;
    }

    onToggleSelection(item);
    refreshTree();
    onSelectHandler(selectedNodes);
  };

  return {
    treeData,
    expandParent,
    onSelectPressed,
  };
};

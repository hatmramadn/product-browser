import React, {useMemo} from 'react';
import {add, cloneDeep, set} from 'lodash';

import {TreeData, TreeSpecificNode} from '../../models';

let selectedNodes: Set<TreeSpecificNode> = new Set();

interface UseTreeHelpersProps {
  data: TreeData;
  autoSelectChildren?: boolean;
  autoExpandChildren?: boolean;
  onSelectHandler: (nodes: TreeSpecificNode[]) => void;
  onItemExpand?: (item: TreeSpecificNode) => void;
  onItemSelect?: (item: TreeSpecificNode) => void;
}
export const useTreeHelpers = ({
  data,
  autoSelectChildren,
  autoExpandChildren,
  onSelectHandler,
  onItemExpand,
  onItemSelect,
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
    onItemExpand?.(item);
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
      if (isEveryNodeSelected) {
        parentNode.data.forEach(node => {
          selectedNodes.delete(node);
        });
        selectedNodes.add(parentNode);
      }
    }

    if (parentNode.parentNode) {
      checkIsEveryNodesSelected(parentNode.parentNode);
    }
    refreshTree();
  };

  const selectChildrenNodes = (item: TreeSpecificNode) => {
    if (item?.data) {
      (item.data as TreeSpecificNode[]).forEach(child => {
        child.isSelected = item.isSelected;
        selectChildrenNodes(child);
      });
    }
  };

  const unSelecAllChildrenNodes = (item: TreeSpecificNode) => {
    if (item?.data) {
      (item.data as TreeSpecificNode[]).forEach(child => {
        child.isSelected = false;
        if (selectedNodes.has(child)) {
          selectedNodes.delete(child);
        }
        unSelecAllChildrenNodes(child);
      });
    }
  };

  const checkBeforeSelect = (item: TreeSpecificNode) => {
    // Check if item has a parent node in the selected nodes and remove it
    if (item.parentNode && selectedNodes.has(item.parentNode)) {
      selectedNodes.delete(item.parentNode);
    }

    // Check if item is a parent and its childrens in the selected nodes and remove them.
    if (item.data) {
      unSelecAllChildrenNodes(item);
    }
  };

  const unpackSelectedNodesBeforeUnselect = (item: TreeSpecificNode) => {
    if (!item.parentNode) {
      return;
    }
    if (!item.isSelected && item.parentNode) {
      selectedNodes.delete(item);
      selectedNodes.delete(item.parentNode);

      item.parentNode.data?.forEach((child: TreeSpecificNode) => {
        if (child.isSelected) {
          selectedNodes.add(child);
        }
      });

      // if (item.parentNode.parentNode) {
      //   item.parentNode.parentNode.data?.forEach((child: TreeSpecificNode) => {
      //     if (child.isSelected) {
      //       selectedNodes.add(child);
      //     }
      //   });
      // }
    }
  };

  const onToggleSelection = (item: TreeSpecificNode) => {
    item.isSelected = !item.isSelected;
    if (item.isSelected) {
      checkBeforeSelect(item);
      selectedNodes.add(item);
    } else {
      selectedNodes.delete(item);
      checkBeforeSelect(item);
      unpackSelectedNodesBeforeUnselect(item);
    }

    if (autoSelectChildren) {
      selectChildrenNodes(item);
    }

    if (item.parentNode) {
      checkIsEveryNodesSelected(item.parentNode);
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
    onItemSelect?.(item);
  };

  return {
    treeData,
    expandParent,
    onSelectPressed,
    selectedNodes: [...selectedNodes],
  };
};

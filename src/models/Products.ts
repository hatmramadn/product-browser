/*
  id can be used for incremental id
  objectId can be used for unique id
*/
export type GenericTreeNode = {
  id: number;
  objectId: string;
  title: string;
  data?: GenericTreeNode[];
  count?: number;
};

export type TreeData = GenericTreeNode[];
export type TreeSpecificNode = GenericTreeNode & {
  isExpanded?: boolean;
  isSelected?: boolean;
  parentNode?: TreeSpecificNode;
};

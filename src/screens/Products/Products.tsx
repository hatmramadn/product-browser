import {View} from 'react-native';
import React from 'react';

import {styles} from './styles';
import {PRODUCT_LIST} from '../../constants';
import {TreeView} from '../../components';

export const Products = () => {
  return (
    <View style={styles.container}>
      <TreeView
        data={PRODUCT_LIST}
        autoSelectChildren={false}
        autoExpandChildren={false}
        onSelect={items => {
          // console.log('Selected items:', items);
        }}
        onItemExpand={item => {
          // console.log('Expanded item:', item);
        }}
        onItemSelect={item => {
          // console.log('Selected item:', item);
        }}
        // renderSelectionChip={chip => {
        //   return <></>;
        // }}
        // selectionChipContainerStyle={{backgroundColor: 'red'}}
        // nodeContainerStyle={{}}
        // renderExpandCollapseIcon={isExpanded => {
        //   console.log(isExpanded);
        //   return null;
        // }}
        // renderCheckMark={isSelected => {
        //   console.log(isSelected);
        //   return null;
        // }}
        // renderParentItemContent={(itemTitle, subNodeTitleCount, isExpanded) => {
        //   return null;
        // }}
        // renderLeafNodeContent={(itemTitle, itemCount) => {
        //   return null;
        // }}
      />
    </View>
  );
};

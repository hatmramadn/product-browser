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
        onSelect={items => {
          // console.log('Selected items:', items);
        }}
      />
    </View>
  );
};

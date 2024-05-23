import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {moderateScale, scale} from 'react-native-size-matters';
import {colors, globalStyles} from '../../../theme';
import {CONSTANTS} from '../../../constants';
import {TreeSpecificNode} from '../../../models';
import CheckMarkIcon from '../../../assets/icons/CheckMarkIcon';

interface LeafNodeProps {
  item: TreeSpecificNode;
  onSelect: (item: TreeSpecificNode) => void;
}
export const LeafNode = ({item, onSelect}: LeafNodeProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={CONSTANTS.activeTouchOpacity}
        onPress={() => onSelect(item)}>
        <View style={styles.row}>
          <View style={styles.checkmark}>
            {item.isSelected && (
              <CheckMarkIcon
                width={moderateScale(17)}
                height={moderateScale(17)}
                color={colors.secondary}
              />
            )}
          </View>
          <View>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.subTitle}>+{item.count} Device</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: moderateScale(10),
    marginLeft: moderateScale(15),
    backgroundColor: colors.white,
    marginBottom: moderateScale(10),
    borderRadius: moderateScale(5),
    ...globalStyles.shadow,
  },
  title: {
    fontSize: moderateScale(12),
    fontWeight: '600',
    color: colors.black,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  checkmark: {
    width: moderateScale(18),
    height: moderateScale(18),
    borderWidth: 1,
    borderColor: colors.lightGrey,
    borderRadius: moderateScale(2),
    marginEnd: moderateScale(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
  subTitle: {
    marginTop: moderateScale(5),
    fontSize: moderateScale(11),
    color: colors.grey,
  },
});

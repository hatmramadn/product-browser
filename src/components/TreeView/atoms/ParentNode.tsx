import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {moderateScale, scale} from 'react-native-size-matters';
import {colors, globalStyles} from '../../../theme';
import {TreeSpecificNode} from '../../../models';
import {CollapseIcon, ExpandIcon} from '../../../assets/icons';
import {CONSTANTS} from '../../../constants';
import CheckMarkIcon from '../../../assets/icons/CheckMarkIcon';

interface ParentNodeProps {
  item: TreeSpecificNode;
  onExpand: (item: TreeSpecificNode) => void;
  onSelect: (item: TreeSpecificNode) => void;
  isLastNode?: boolean;
}
export const ParentNode = ({
  item,
  onExpand,
  isLastNode,
  onSelect,
}: ParentNodeProps) => {
  return (
    <View style={[styles.container, isLastNode && {marginBottom: 0}]}>
      <TouchableOpacity
        activeOpacity={CONSTANTS.activeTouchOpacity}
        onPress={() => onExpand(item)}>
        <View style={styles.rowSpaced}>
          <View style={styles.row}>
            <TouchableOpacity
              activeOpacity={CONSTANTS.activeTouchOpacity}
              onPress={() => onSelect(item)}>
              <View style={styles.checkmark}>
                {item.isSelected && (
                  <CheckMarkIcon
                    width={moderateScale(17)}
                    height={moderateScale(17)}
                    color={colors.secondary}
                  />
                )}
              </View>
            </TouchableOpacity>
            <Text style={styles.title}>{item.title}</Text>
          </View>
          {item.isExpanded ? (
            <CollapseIcon
              width={scale(15)}
              height={scale(15)}
              color={colors.lightGrey}
            />
          ) : (
            <ExpandIcon
              width={scale(15)}
              height={scale(15)}
              color={colors.lightGrey}
            />
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: scale(10),
    backgroundColor: colors.white,
    marginBottom: scale(10),
    borderRadius: scale(5),
    ...globalStyles.shadow,
  },
  title: {
    fontSize: scale(13),
    fontWeight: 'bold',
    color: colors.black,
  },
  rowSpaced: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkmark: {
    width: scale(18),
    height: scale(18),
    borderWidth: 1,
    borderColor: colors.lightGrey,
    borderRadius: scale(2),
    marginEnd: scale(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
});

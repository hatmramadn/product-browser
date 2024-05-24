import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useMemo} from 'react';
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
}

export const ParentNode = ({item, onExpand, onSelect}: ParentNodeProps) => {
  const getNodeTitleAndCount = useMemo(() => {
    if (!item.isExpanded && item.data && item.data.length > 0) {
      return item.data
        .map(child => {
          return {
            title: `${child.title}`,
            count: child.count,
          };
        })
        .reduce((acc, curr, index, arr) => {
          const isLastElement = arr.length - 1 === index;
          return acc.concat(
            `+${curr.count} ${curr.title} devices ${isLastElement ? '' : ','} `,
          );
        }, '');
    }
  }, [item?.isExpanded]);

  return (
    <View style={[styles.container]}>
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
            <View>
              <Text style={styles.title}>{item.title}</Text>
              {getNodeTitleAndCount ? (
                <Text style={styles.subTitle}>{getNodeTitleAndCount}</Text>
              ) : null}
            </View>
          </View>
          <View style={{flex: 1, alignItems: 'flex-end'}}>
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
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: moderateScale(10),
    backgroundColor: colors.white,
    marginBottom: moderateScale(10),
    borderRadius: moderateScale(5),
    ...globalStyles.shadow,
  },
  title: {
    fontSize: moderateScale(13),
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
    flex: 5,
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

import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {moderateScale, scale} from 'react-native-size-matters';
import {colors, globalStyles} from '../../../theme';
import {CONSTANTS} from '../../../constants';
import {TreeSpecificNode} from '../../../models';
import CheckMarkIcon from '../../../assets/icons/CheckMarkIcon';

interface LeafNodeProps {
  item: TreeSpecificNode;
  onSelect: (item: TreeSpecificNode) => void;
  renderCheckMark?: (isSelected: boolean) => React.ReactNode;
  renderItemContent?: (itemTitle: string, itemCount: string) => React.ReactNode;
  nodeContainerStyle?: ViewStyle;
}
export const LeafNode = ({
  item,
  onSelect,
  nodeContainerStyle,
  renderCheckMark,
  renderItemContent,
}: LeafNodeProps) => {
  return (
    <View
      style={[styles.container, nodeContainerStyle && nodeContainerStyle]}
      testID={`${item.title}_leafNode`}>
      <TouchableOpacity
        activeOpacity={CONSTANTS.activeTouchOpacity}
        testID={`${item.title}_leafNodeSelectButton`}
        onPress={() => onSelect(item)}>
        <View style={styles.row}>
          {renderCheckMark ? (
            renderCheckMark(!!item.isSelected)
          ) : (
            <View style={styles.checkmark}>
              {item.isSelected && (
                <CheckMarkIcon
                  width={moderateScale(17)}
                  height={moderateScale(17)}
                  color={colors.secondary}
                />
              )}
            </View>
          )}

          {renderItemContent ? (
            renderItemContent(
              item.title,
              item.count ? item.count.toString() : '',
            )
          ) : (
            <View>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.subTitle}>+{item.count} Device</Text>
            </View>
          )}
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

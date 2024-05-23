import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

export const styles = StyleSheet.create({
  container: {},
  flatListContentContainer: {
    padding: moderateScale(16),
  },
  nodeSublingsContainer: {
    marginLeft: moderateScale(16),
    paddingHorizontal: moderateScale(5),
  },
});

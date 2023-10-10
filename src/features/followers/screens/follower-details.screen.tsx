import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {SafeAreaView} from 'react-native';
import {FollowersStackNavigatorParamList} from '../../../types/followers';
type Props = NativeStackScreenProps<
  FollowersStackNavigatorParamList,
  'FollowerDetails'
>;

export const FollowersDetailScreen = ({navigation}: Props) => {
  return <SafeAreaView></SafeAreaView>;
};

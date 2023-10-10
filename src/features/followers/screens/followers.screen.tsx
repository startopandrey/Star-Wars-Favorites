import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {SafeAreaView} from 'react-native';
import {FollowersStackNavigatorParamList} from '../../../types/followers';
type Props = NativeStackScreenProps<
  FollowersStackNavigatorParamList,
  'Followers'
>;
import {Header, Title} from '../components/followers.styles';
import {Text} from 'react-native';

export const FollowersScreen = ({navigation}: Props) => {
  return (
    <SafeAreaView>
      <Header>
        <Title variant="title">Title</Title>
        <Text>Title</Text>
      </Header>
    </SafeAreaView>
  );
};

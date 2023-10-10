import React from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {SafeAreaView} from 'react-native';
import {FollowersStackNavigatorParamList} from '../../../types/followers';
type Props = NativeStackScreenProps<
  FollowersStackNavigatorParamList,
  'Followers'
>;
import {
  ClearButton,
  CounterWrapper,
  Header,
  Title,
} from '../components/followers.styles';
import {Text} from 'react-native';
import {Button} from 'react-native-paper';
import {Card} from '../components/card.component';
import {SafeArea} from '../../../components/safe-area/safe-area.component';

export const FollowersScreen = ({navigation}: Props) => {
  return (
    <SafeArea>
      <Header>
        <Title variant="title">Fans</Title>
        <ClearButton mode="outlined" onPress={() => console.log('Pressed')}>
          Clear fans
        </ClearButton>
      </Header>
      <CounterWrapper>
        <Card count={0} title={'Female Fans'} />
        <Card count={0} title={'Male Fans'} />
        <Card count={0} title={'Others'} />
      </CounterWrapper>
    </SafeArea>
  );
};

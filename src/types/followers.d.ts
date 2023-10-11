export type FollowersStackNavigatorParamList = {
  Followers: undefined;
  FollowerDetails: undefined;
};
export interface FollowersContextType {}

export default interface Follower {
  _id?: string;
  birth_year: string;
  eye_color?: string;
  films?: string[];
  gender: string;
  hair_color?: string;
  height?: string;
  homeworld?: string;
  mass?: string;
  name: string;
  skin_color?: string;
  species?: string[];
  starships?: string[];
  vehicles?: string[];
} // eslint-disable-line

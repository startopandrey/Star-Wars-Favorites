import axios from 'axios';
import {serverUrl} from '../../utils/env.utils';

export const followersRequest = async () => {
  try {
    return await axios.get(`${serverUrl}/api/people/`).then(res => res);
  } catch (error) {
    return null;
  }
};

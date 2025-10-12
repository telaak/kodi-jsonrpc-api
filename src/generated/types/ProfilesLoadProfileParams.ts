import { ProfilesPassword } from './ProfilesPassword';

export interface ProfilesLoadProfileParams {
  profile: string;
  prompt?: boolean;
  password?: ProfilesPassword;
}
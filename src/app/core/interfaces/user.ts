export interface ClubInfo {
  id: number;
  name: string;
  logo: string;
}

export interface CoachInfo2 {
  first_name: string;
  last_name: string;
  date_joined: Date;
  email: string;
  coach__club__name: string;
  username: string;
}

export interface SubscriptionInfo {
  start_date: string;
  end_date: string;
  package_name: string;
}

export interface CoachInfo {
  id: number;
  checked: boolean;
  coach_info: CoachInfo2;
  group_info: string[];
  subscription_info: SubscriptionInfo[];
  pgs: string[];
  roles: string[];
  team_id: number;
  avatar: string;
  added_at: string;
  parent_account: number;
  club: number;
  User: number;
  postion_group?: number;
  coachpgs: number[];
  side_of_ball: string;
  pg_name: string;
}

export interface User {
  pk: number;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
  club_info: ClubInfo;
  coach_info: CoachInfo[];
  group_permissions: string[];
  user_permissions: string[];
  group_list: string[];
}

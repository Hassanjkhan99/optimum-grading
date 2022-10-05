export interface Season {
  id: number;
  name: string;
  year: string;
  user_id: string;
  default_season: boolean;
}

export interface Position {
  id: number;
  sob: string;
  name: string;
  description: string;
  checked: boolean;
  postion_group: number;
}

export interface GetPositionGroup {
  user_id: number;
  name: number;
  side_of_ball: string;
  pg_name: string;
  pg: string;
  positions: Position[];
}

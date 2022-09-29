

export interface Player {
  id: number;
  jersey: number;
  contact_info: any[];
  checked: boolean;
  selected: boolean;
  pg_name: string;
  roles: string[];
  pg_names: string[];
  positions: string[];
  playerpgs: number[];
  playerpositions: number[];
  updateser: boolean;
  seasons: number[];
  season_wise_positions: SeasonWisePositions;
  season_wise_pgs: SeasonWisePgs;
  avatar: string;
  firstname: string;
  lastname: string;
  role: string;
  user_id: number;
  postion_group?: number;
  position?: number;
}

export interface GetPlayerResponse{
  count: number;
  next: string;
  previous?: any;
  results: Player[];
}
export interface SeasonWisePositions{

}
export interface SeasonWisePgs{

}



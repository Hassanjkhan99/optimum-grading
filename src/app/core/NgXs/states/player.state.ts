import {Action, Selector, State, StateContext, Store} from '@ngxs/store';
import {Injectable} from '@angular/core';
import {Player} from "../../interfaces/player.interface";
import {PlayerActions} from "../actions/player.actions";
import {PlayerService} from "../../services/player.service";
import {tap} from "rxjs";
import {UIActions} from "../actions/UI.actions";
import Loading = UIActions.Loading;

export class PlayerStateModel {
 playersList:Player[]
}

@State<PlayerStateModel>({
  name: 'Player',
  defaults: {
   playersList:[
     {
       "id": 629,
       "jersey": 1,
       "contact_info": [],
       "checked": false,
       "selected": false,
       "pg_name": "Running Backs",
       "roles": [
         "Offense",
         "Offense",
         "Offense",
         "Defense",
         "Defense"
       ],
       "pg_names": [
         "Quarterbacks",
         "Tight Ends",
         "Running Backs",
         "Linebackers",
         "Defensive Line"
       ],
       "positions": [
         "Q",
         "Y",
         "T",
         "W",
         "DE"
       ],
       "playerpgs": [
         1153,
         1155,
         1154,
         1158,
         1157
       ],
       "playerpositions": [
         2813,
         2816,
         2814,
         2825,
         2820
       ],
       "updateser": false,
       "seasons": [
         288,
         370,
         580,
         590
       ],
       "season_wise_positions": {
         "288": [
           {
             "position_id": 2825,
             "position_id__name": "W",
             "position_id__postion_group": 1158,
             "position_id__postion_group__pg_name": "Linebackers"
           },
           {
             "position_id": 2813,
             "position_id__name": "Q",
             "position_id__postion_group": 1153,
             "position_id__postion_group__pg_name": "Quarterbacks"
           },
           {
             "position_id": 2816,
             "position_id__name": "Y",
             "position_id__postion_group": 1155,
             "position_id__postion_group__pg_name": "Tight Ends"
           },
           {
             "position_id": 2814,
             "position_id__name": "T",
             "position_id__postion_group": 1154,
             "position_id__postion_group__pg_name": "Running Backs"
           },
           {
             "position_id": 2820,
             "position_id__name": "DE",
             "position_id__postion_group": 1157,
             "position_id__postion_group__pg_name": "Defensive Line"
           }
         ],
         "370": [
           {
             "position_id": 2813,
             "position_id__name": "Q",
             "position_id__postion_group": 1153,
             "position_id__postion_group__pg_name": "Quarterbacks"
           },
           {
             "position_id": 2816,
             "position_id__name": "Y",
             "position_id__postion_group": 1155,
             "position_id__postion_group__pg_name": "Tight Ends"
           },
           {
             "position_id": 2817,
             "position_id__name": "U",
             "position_id__postion_group": 1155,
             "position_id__postion_group__pg_name": "Tight Ends"
           },
           {
             "position_id": 2825,
             "position_id__name": "W",
             "position_id__postion_group": 1158,
             "position_id__postion_group__pg_name": "Linebackers"
           },
           {
             "position_id": 2814,
             "position_id__name": "T",
             "position_id__postion_group": 1154,
             "position_id__postion_group__pg_name": "Running Backs"
           },
           {
             "position_id": 2815,
             "position_id__name": "F",
             "position_id__postion_group": 1154,
             "position_id__postion_group__pg_name": "Running Backs"
           }
         ],
         "580": [
           {
             "position_id": 2825,
             "position_id__name": "W",
             "position_id__postion_group": 1158,
             "position_id__postion_group__pg_name": "Linebackers"
           },
           {
             "position_id": 2813,
             "position_id__name": "Q",
             "position_id__postion_group": 1153,
             "position_id__postion_group__pg_name": "Quarterbacks"
           },
           {
             "position_id": 2816,
             "position_id__name": "Y",
             "position_id__postion_group": 1155,
             "position_id__postion_group__pg_name": "Tight Ends"
           },
           {
             "position_id": 2814,
             "position_id__name": "T",
             "position_id__postion_group": 1154,
             "position_id__postion_group__pg_name": "Running Backs"
           },
           {
             "position_id": 2815,
             "position_id__name": "F",
             "position_id__postion_group": 1154,
             "position_id__postion_group__pg_name": "Running Backs"
           },
           {
             "position_id": 2820,
             "position_id__name": "DE",
             "position_id__postion_group": 1157,
             "position_id__postion_group__pg_name": "Defensive Line"
           }
         ],
         "590": [
           {
             "position_id": 2814,
             "position_id__name": "T",
             "position_id__postion_group": 1154,
             "position_id__postion_group__pg_name": "Running Backs"
           }
         ]
       },
       "season_wise_pgs": {
         "288": [
           {
             "position_id__postion_group": 1158,
             "position_id__postion_group__pg_name": "Linebackers"
           },
           {
             "position_id__postion_group": 1153,
             "position_id__postion_group__pg_name": "Quarterbacks"
           },
           {
             "position_id__postion_group": 1155,
             "position_id__postion_group__pg_name": "Tight Ends"
           },
           {
             "position_id__postion_group": 1154,
             "position_id__postion_group__pg_name": "Running Backs"
           },
           {
             "position_id__postion_group": 1157,
             "position_id__postion_group__pg_name": "Defensive Line"
           }
         ],
         "370": [
           {
             "position_id__postion_group": 1153,
             "position_id__postion_group__pg_name": "Quarterbacks"
           },
           {
             "position_id__postion_group": 1155,
             "position_id__postion_group__pg_name": "Tight Ends"
           },
           {
             "position_id__postion_group": 1155,
             "position_id__postion_group__pg_name": "Tight Ends"
           },
           {
             "position_id__postion_group": 1158,
             "position_id__postion_group__pg_name": "Linebackers"
           },
           {
             "position_id__postion_group": 1154,
             "position_id__postion_group__pg_name": "Running Backs"
           },
           {
             "position_id__postion_group": 1154,
             "position_id__postion_group__pg_name": "Running Backs"
           }
         ],
         "580": [
           {
             "position_id__postion_group": 1158,
             "position_id__postion_group__pg_name": "Linebackers"
           },
           {
             "position_id__postion_group": 1153,
             "position_id__postion_group__pg_name": "Quarterbacks"
           },
           {
             "position_id__postion_group": 1155,
             "position_id__postion_group__pg_name": "Tight Ends"
           },
           {
             "position_id__postion_group": 1154,
             "position_id__postion_group__pg_name": "Running Backs"
           },
           {
             "position_id__postion_group": 1154,
             "position_id__postion_group__pg_name": "Running Backs"
           },
           {
             "position_id__postion_group": 1157,
             "position_id__postion_group__pg_name": "Defensive Line"
           }
         ],
         "590": [
           {
             "position_id__postion_group": 1154,
             "position_id__postion_group__pg_name": "Running Backs"
           }
         ]
       },
       "avatar": "https://og-fileupload.s3.amazonaws.com/playerd2.PNG?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3TSF4J3HYL3E2LPQ%2F20220929%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20220929T214921Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=a0f900d6ec418955ba68cec35b0555ecd5ebef95e5c68dde95cbffbe65778447",
       "firstname": "Robert",
       "lastname": "Shackelford",
       "role": "Offense",
       "user_id": 189,
       "postion_group": 1154,
       "position": 2814
     },
     {
       "id": 2217,
       "jersey": 1,
       "contact_info": [],
       "checked": false,
       "selected": false,
       "pg_name": "Defensive Line",
       "roles": [
         "Special Teams",
         "Offense"
       ],
       "pg_names": [
         "Punt",
         "Tight Ends"
       ],
       "positions": [
         "P",
         "Y"
       ],
       "playerpgs": [
         1160,
         1155
       ],
       "playerpositions": [
         5816,
         2816
       ],
       "updateser": false,
       "seasons": [
         288,
         370,
         580,
         590
       ],
       "season_wise_positions": {
         "288": [
           {
             "position_id": 2816,
             "position_id__name": "Y",
             "position_id__postion_group": 1155,
             "position_id__postion_group__pg_name": "Tight Ends"
           },
           {
             "position_id": 5816,
             "position_id__name": "P",
             "position_id__postion_group": 1160,
             "position_id__postion_group__pg_name": "Punt"
           }
         ],
         "370": [
           {
             "position_id": 2816,
             "position_id__name": "Y",
             "position_id__postion_group": 1155,
             "position_id__postion_group__pg_name": "Tight Ends"
           }
         ],
         "580": [
           {
             "position_id": 2816,
             "position_id__name": "Y",
             "position_id__postion_group": 1155,
             "position_id__postion_group__pg_name": "Tight Ends"
           }
         ],
         "590": [
           {
             "position_id": 2820,
             "position_id__name": "DE",
             "position_id__postion_group": 1157,
             "position_id__postion_group__pg_name": "Defensive Line"
           }
         ]
       },
       "season_wise_pgs": {
         "288": [
           {
             "position_id__postion_group": 1155,
             "position_id__postion_group__pg_name": "Tight Ends"
           },
           {
             "position_id__postion_group": 1160,
             "position_id__postion_group__pg_name": "Punt"
           }
         ],
         "370": [
           {
             "position_id__postion_group": 1155,
             "position_id__postion_group__pg_name": "Tight Ends"
           }
         ],
         "580": [
           {
             "position_id__postion_group": 1155,
             "position_id__postion_group__pg_name": "Tight Ends"
           }
         ],
         "590": [
           {
             "position_id__postion_group": 1157,
             "position_id__postion_group__pg_name": "Defensive Line"
           }
         ]
       },
       "avatar": null,
       "firstname": "John",
       "lastname": "Doe",
       "role": "Defense",
       "user_id": 189,
       "postion_group": 1157,
       "position": 2820
     },
     {
       "id": 1453,
       "jersey": 2,
       "contact_info": [],
       "checked": false,
       "selected": false,
       "pg_name": "Wide Receivers",
       "roles": [
         "Offense",
         "Defense"
       ],
       "pg_names": [
         "Wide Receivers",
         "Defensive Backs"
       ],
       "positions": [
         "X",
         "RCB"
       ],
       "playerpgs": [
         1156,
         1159
       ],
       "playerpositions": [
         2818,
         2831
       ],
       "updateser": false,
       "seasons": [
         288,
         370,
         580,
         590
       ],
       "season_wise_positions": {
         "288": [
           {
             "position_id": 2818,
             "position_id__name": "X",
             "position_id__postion_group": 1156,
             "position_id__postion_group__pg_name": "Wide Receivers"
           },
           {
             "position_id": 2831,
             "position_id__name": "RCB",
             "position_id__postion_group": 1159,
             "position_id__postion_group__pg_name": "Defensive Backs"
           }
         ],
         "370": [
           {
             "position_id": 2818,
             "position_id__name": "X",
             "position_id__postion_group": 1156,
             "position_id__postion_group__pg_name": "Wide Receivers"
           },
           {
             "position_id": 2831,
             "position_id__name": "RCB",
             "position_id__postion_group": 1159,
             "position_id__postion_group__pg_name": "Defensive Backs"
           }
         ],
         "580": [
           {
             "position_id": 2818,
             "position_id__name": "X",
             "position_id__postion_group": 1156,
             "position_id__postion_group__pg_name": "Wide Receivers"
           },
           {
             "position_id": 2831,
             "position_id__name": "RCB",
             "position_id__postion_group": 1159,
             "position_id__postion_group__pg_name": "Defensive Backs"
           }
         ],
         "590": [
           {
             "position_id": 2818,
             "position_id__name": "X",
             "position_id__postion_group": 1156,
             "position_id__postion_group__pg_name": "Wide Receivers"
           },
           {
             "position_id": 2831,
             "position_id__name": "RCB",
             "position_id__postion_group": 1159,
             "position_id__postion_group__pg_name": "Defensive Backs"
           }
         ]
       },
       "season_wise_pgs": {
         "288": [
           {
             "position_id__postion_group": 1156,
             "position_id__postion_group__pg_name": "Wide Receivers"
           },
           {
             "position_id__postion_group": 1159,
             "position_id__postion_group__pg_name": "Defensive Backs"
           }
         ],
         "370": [
           {
             "position_id__postion_group": 1156,
             "position_id__postion_group__pg_name": "Wide Receivers"
           },
           {
             "position_id__postion_group": 1159,
             "position_id__postion_group__pg_name": "Defensive Backs"
           }
         ],
         "580": [
           {
             "position_id__postion_group": 1156,
             "position_id__postion_group__pg_name": "Wide Receivers"
           },
           {
             "position_id__postion_group": 1159,
             "position_id__postion_group__pg_name": "Defensive Backs"
           }
         ],
         "590": [
           {
             "position_id__postion_group": 1156,
             "position_id__postion_group__pg_name": "Wide Receivers"
           },
           {
             "position_id__postion_group": 1159,
             "position_id__postion_group__pg_name": "Defensive Backs"
           }
         ]
       },
       "avatar": null,
       "firstname": "John",
       "lastname": "Aldridge",
       "role": "Offense",
       "user_id": 189,
       "postion_group": 1156,
       "position": 2818
     },
     {
       "id": 2218,
       "jersey": 2,
       "contact_info": [],
       "checked": false,
       "selected": false,
       "pg_name": "Wide Receivers",
       "roles": [
         "Offense",
         "Offense"
       ],
       "pg_names": [
         "Wide Receivers",
         "Running Backs"
       ],
       "positions": [
         "X",
         "T"
       ],
       "playerpgs": [
         1156,
         1154
       ],
       "playerpositions": [
         2818,
         2814
       ],
       "updateser": false,
       "seasons": [
         288,
         370,
         580,
         590
       ],
       "season_wise_positions": {
         "288": [
           {
             "position_id": 2818,
             "position_id__name": "X",
             "position_id__postion_group": 1156,
             "position_id__postion_group__pg_name": "Wide Receivers"
           },
           {
             "position_id": 2814,
             "position_id__name": "T",
             "position_id__postion_group": 1154,
             "position_id__postion_group__pg_name": "Running Backs"
           }
         ],
         "370": [
           {
             "position_id": 2818,
             "position_id__name": "X",
             "position_id__postion_group": 1156,
             "position_id__postion_group__pg_name": "Wide Receivers"
           },
           {
             "position_id": 2814,
             "position_id__name": "T",
             "position_id__postion_group": 1154,
             "position_id__postion_group__pg_name": "Running Backs"
           }
         ],
         "580": [
           {
             "position_id": 2818,
             "position_id__name": "X",
             "position_id__postion_group": 1156,
             "position_id__postion_group__pg_name": "Wide Receivers"
           },
           {
             "position_id": 2814,
             "position_id__name": "T",
             "position_id__postion_group": 1154,
             "position_id__postion_group__pg_name": "Running Backs"
           }
         ],
         "590": [
           {
             "position_id": 2818,
             "position_id__name": "X",
             "position_id__postion_group": 1156,
             "position_id__postion_group__pg_name": "Wide Receivers"
           },
           {
             "position_id": 2814,
             "position_id__name": "T",
             "position_id__postion_group": 1154,
             "position_id__postion_group__pg_name": "Running Backs"
           }
         ]
       },
       "season_wise_pgs": {
         "288": [
           {
             "position_id__postion_group": 1156,
             "position_id__postion_group__pg_name": "Wide Receivers"
           },
           {
             "position_id__postion_group": 1154,
             "position_id__postion_group__pg_name": "Running Backs"
           }
         ],
         "370": [
           {
             "position_id__postion_group": 1156,
             "position_id__postion_group__pg_name": "Wide Receivers"
           },
           {
             "position_id__postion_group": 1154,
             "position_id__postion_group__pg_name": "Running Backs"
           }
         ],
         "580": [
           {
             "position_id__postion_group": 1156,
             "position_id__postion_group__pg_name": "Wide Receivers"
           },
           {
             "position_id__postion_group": 1154,
             "position_id__postion_group__pg_name": "Running Backs"
           }
         ],
         "590": [
           {
             "position_id__postion_group": 1156,
             "position_id__postion_group__pg_name": "Wide Receivers"
           },
           {
             "position_id__postion_group": 1154,
             "position_id__postion_group__pg_name": "Running Backs"
           }
         ]
       },
       "avatar": null,
       "firstname": "David",
       "lastname": "Wacker",
       "role": "Offense",
       "user_id": 189,
       "postion_group": 1156,
       "position": 2818
     },
     {
       "id": 631,
       "jersey": 3,
       "contact_info": [],
       "checked": false,
       "selected": false,
       "pg_name": "Quarterbacks",
       "roles": [
         "Offense",
         "Offense",
         "Defense"
       ],
       "pg_names": [
         "Quarterbacks",
         "Tight Ends",
         "Linebackers"
       ],
       "positions": [
         "Q",
         "Y",
         "M"
       ],
       "playerpgs": [
         1153,
         1155,
         1158
       ],
       "playerpositions": [
         2813,
         2816,
         2826
       ],
       "updateser": false,
       "seasons": [
         288,
         370,
         580,
         590
       ],
       "season_wise_positions": {
         "288": [
           {
             "position_id": 2826,
             "position_id__name": "M",
             "position_id__postion_group": 1158,
             "position_id__postion_group__pg_name": "Linebackers"
           },
           {
             "position_id": 2813,
             "position_id__name": "Q",
             "position_id__postion_group": 1153,
             "position_id__postion_group__pg_name": "Quarterbacks"
           },
           {
             "position_id": 2816,
             "position_id__name": "Y",
             "position_id__postion_group": 1155,
             "position_id__postion_group__pg_name": "Tight Ends"
           }
         ],
         "370": [
           {
             "position_id": 2826,
             "position_id__name": "M",
             "position_id__postion_group": 1158,
             "position_id__postion_group__pg_name": "Linebackers"
           },
           {
             "position_id": 2813,
             "position_id__name": "Q",
             "position_id__postion_group": 1153,
             "position_id__postion_group__pg_name": "Quarterbacks"
           },
           {
             "position_id": 2816,
             "position_id__name": "Y",
             "position_id__postion_group": 1155,
             "position_id__postion_group__pg_name": "Tight Ends"
           },
           {
             "position_id": 2817,
             "position_id__name": "U",
             "position_id__postion_group": 1155,
             "position_id__postion_group__pg_name": "Tight Ends"
           }
         ],
         "580": [
           {
             "position_id": 2826,
             "position_id__name": "M",
             "position_id__postion_group": 1158,
             "position_id__postion_group__pg_name": "Linebackers"
           },
           {
             "position_id": 2813,
             "position_id__name": "Q",
             "position_id__postion_group": 1153,
             "position_id__postion_group__pg_name": "Quarterbacks"
           },
           {
             "position_id": 2816,
             "position_id__name": "Y",
             "position_id__postion_group": 1155,
             "position_id__postion_group__pg_name": "Tight Ends"
           }
         ],
         "590": [
           {
             "position_id": 2826,
             "position_id__name": "M",
             "position_id__postion_group": 1158,
             "position_id__postion_group__pg_name": "Linebackers"
           },
           {
             "position_id": 2813,
             "position_id__name": "Q",
             "position_id__postion_group": 1153,
             "position_id__postion_group__pg_name": "Quarterbacks"
           },
           {
             "position_id": 2816,
             "position_id__name": "Y",
             "position_id__postion_group": 1155,
             "position_id__postion_group__pg_name": "Tight Ends"
           }
         ]
       },
       "season_wise_pgs": {
         "288": [
           {
             "position_id__postion_group": 1158,
             "position_id__postion_group__pg_name": "Linebackers"
           },
           {
             "position_id__postion_group": 1153,
             "position_id__postion_group__pg_name": "Quarterbacks"
           },
           {
             "position_id__postion_group": 1155,
             "position_id__postion_group__pg_name": "Tight Ends"
           }
         ],
         "370": [
           {
             "position_id__postion_group": 1158,
             "position_id__postion_group__pg_name": "Linebackers"
           },
           {
             "position_id__postion_group": 1153,
             "position_id__postion_group__pg_name": "Quarterbacks"
           },
           {
             "position_id__postion_group": 1155,
             "position_id__postion_group__pg_name": "Tight Ends"
           },
           {
             "position_id__postion_group": 1155,
             "position_id__postion_group__pg_name": "Tight Ends"
           }
         ],
         "580": [
           {
             "position_id__postion_group": 1158,
             "position_id__postion_group__pg_name": "Linebackers"
           },
           {
             "position_id__postion_group": 1153,
             "position_id__postion_group__pg_name": "Quarterbacks"
           },
           {
             "position_id__postion_group": 1155,
             "position_id__postion_group__pg_name": "Tight Ends"
           }
         ],
         "590": [
           {
             "position_id__postion_group": 1158,
             "position_id__postion_group__pg_name": "Linebackers"
           },
           {
             "position_id__postion_group": 1153,
             "position_id__postion_group__pg_name": "Quarterbacks"
           },
           {
             "position_id__postion_group": 1155,
             "position_id__postion_group__pg_name": "Tight Ends"
           }
         ]
       },
       "avatar": "https://og-fileupload.s3.amazonaws.com/Osei-Asibey_Kingsley_Headshot_081416_1MJ1708.JPG?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3TSF4J3HYL3E2LPQ%2F20220929%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20220929T214921Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=6a948039ee643a3a0ad192bc72a8836b22c7078f1ba2af390386dc2624e1427d",
       "firstname": "Eric",
       "lastname": "Burr",
       "role": "Offense",
       "user_id": 189,
       "postion_group": 1153,
       "position": 2813
     },
     {
       "id": 2219,
       "jersey": 4,
       "contact_info": [],
       "checked": false,
       "selected": false,
       "pg_name": "Wide Receivers",
       "roles": [
         "Special Teams",
         "Offense"
       ],
       "pg_names": [
         "Punt Return",
         "Wide Receivers"
       ],
       "positions": [
         "LC",
         "Z"
       ],
       "playerpgs": [
         1163,
         1156
       ],
       "playerpositions": [
         2839,
         2819
       ],
       "updateser": false,
       "seasons": [
         288,
         370,
         580,
         590
       ],
       "season_wise_positions": {
         "288": [
           {
             "position_id": 2819,
             "position_id__name": "Z",
             "position_id__postion_group": 1156,
             "position_id__postion_group__pg_name": "Wide Receivers"
           },
           {
             "position_id": 2839,
             "position_id__name": "LC",
             "position_id__postion_group": 1163,
             "position_id__postion_group__pg_name": "Punt Return"
           }
         ],
         "370": [
           {
             "position_id": 2819,
             "position_id__name": "Z",
             "position_id__postion_group": 1156,
             "position_id__postion_group__pg_name": "Wide Receivers"
           },
           {
             "position_id": 2839,
             "position_id__name": "LC",
             "position_id__postion_group": 1163,
             "position_id__postion_group__pg_name": "Punt Return"
           }
         ],
         "580": [
           {
             "position_id": 2819,
             "position_id__name": "Z",
             "position_id__postion_group": 1156,
             "position_id__postion_group__pg_name": "Wide Receivers"
           },
           {
             "position_id": 2839,
             "position_id__name": "LC",
             "position_id__postion_group": 1163,
             "position_id__postion_group__pg_name": "Punt Return"
           }
         ],
         "590": [
           {
             "position_id": 2819,
             "position_id__name": "Z",
             "position_id__postion_group": 1156,
             "position_id__postion_group__pg_name": "Wide Receivers"
           },
           {
             "position_id": 2839,
             "position_id__name": "LC",
             "position_id__postion_group": 1163,
             "position_id__postion_group__pg_name": "Punt Return"
           }
         ]
       },
       "season_wise_pgs": {
         "288": [
           {
             "position_id__postion_group": 1156,
             "position_id__postion_group__pg_name": "Wide Receivers"
           },
           {
             "position_id__postion_group": 1163,
             "position_id__postion_group__pg_name": "Punt Return"
           }
         ],
         "370": [
           {
             "position_id__postion_group": 1156,
             "position_id__postion_group__pg_name": "Wide Receivers"
           },
           {
             "position_id__postion_group": 1163,
             "position_id__postion_group__pg_name": "Punt Return"
           }
         ],
         "580": [
           {
             "position_id__postion_group": 1156,
             "position_id__postion_group__pg_name": "Wide Receivers"
           },
           {
             "position_id__postion_group": 1163,
             "position_id__postion_group__pg_name": "Punt Return"
           }
         ],
         "590": [
           {
             "position_id__postion_group": 1156,
             "position_id__postion_group__pg_name": "Wide Receivers"
           },
           {
             "position_id__postion_group": 1163,
             "position_id__postion_group__pg_name": "Punt Return"
           }
         ]
       },
       "avatar": null,
       "firstname": "Robert",
       "lastname": "Topete",
       "role": "Offense",
       "user_id": 189,
       "postion_group": 1156,
       "position": 2818
     },
     {
       "id": 630,
       "jersey": 5,
       "contact_info": [],
       "checked": false,
       "selected": false,
       "pg_name": "Running Backs",
       "roles": [
         "Offense",
         "Defense",
         "Defense",
         "Defense"
       ],
       "pg_names": [
         "Running Backs",
         "Defensive Backs",
         "Linebackers",
         "Linebackers"
       ],
       "positions": [
         "T",
         "LCB",
         "S",
         "W"
       ],
       "playerpgs": [
         1154,
         1159,
         1158,
         1158
       ],
       "playerpositions": [
         2814,
         2830,
         2827,
         2825
       ],
       "updateser": false,
       "seasons": [
         288,
         370,
         580,
         590
       ],
       "season_wise_positions": {
         "288": [
           {
             "position_id": 2830,
             "position_id__name": "LCB",
             "position_id__postion_group": 1159,
             "position_id__postion_group__pg_name": "Defensive Backs"
           },
           {
             "position_id": 2827,
             "position_id__name": "S",
             "position_id__postion_group": 1158,
             "position_id__postion_group__pg_name": "Linebackers"
           },
           {
             "position_id": 2825,
             "position_id__name": "W",
             "position_id__postion_group": 1158,
             "position_id__postion_group__pg_name": "Linebackers"
           },
           {
             "position_id": 2814,
             "position_id__name": "T",
             "position_id__postion_group": 1154,
             "position_id__postion_group__pg_name": "Running Backs"
           }
         ],
         "370": [
           {
             "position_id": 2830,
             "position_id__name": "LCB",
             "position_id__postion_group": 1159,
             "position_id__postion_group__pg_name": "Defensive Backs"
           },
           {
             "position_id": 2827,
             "position_id__name": "S",
             "position_id__postion_group": 1158,
             "position_id__postion_group__pg_name": "Linebackers"
           },
           {
             "position_id": 2825,
             "position_id__name": "W",
             "position_id__postion_group": 1158,
             "position_id__postion_group__pg_name": "Linebackers"
           },
           {
             "position_id": 2814,
             "position_id__name": "T",
             "position_id__postion_group": 1154,
             "position_id__postion_group__pg_name": "Running Backs"
           }
         ],
         "580": [
           {
             "position_id": 2830,
             "position_id__name": "LCB",
             "position_id__postion_group": 1159,
             "position_id__postion_group__pg_name": "Defensive Backs"
           },
           {
             "position_id": 2827,
             "position_id__name": "S",
             "position_id__postion_group": 1158,
             "position_id__postion_group__pg_name": "Linebackers"
           },
           {
             "position_id": 2825,
             "position_id__name": "W",
             "position_id__postion_group": 1158,
             "position_id__postion_group__pg_name": "Linebackers"
           },
           {
             "position_id": 2814,
             "position_id__name": "T",
             "position_id__postion_group": 1154,
             "position_id__postion_group__pg_name": "Running Backs"
           }
         ],
         "590": [
           {
             "position_id": 2830,
             "position_id__name": "LCB",
             "position_id__postion_group": 1159,
             "position_id__postion_group__pg_name": "Defensive Backs"
           },
           {
             "position_id": 2827,
             "position_id__name": "S",
             "position_id__postion_group": 1158,
             "position_id__postion_group__pg_name": "Linebackers"
           },
           {
             "position_id": 2825,
             "position_id__name": "W",
             "position_id__postion_group": 1158,
             "position_id__postion_group__pg_name": "Linebackers"
           },
           {
             "position_id": 2814,
             "position_id__name": "T",
             "position_id__postion_group": 1154,
             "position_id__postion_group__pg_name": "Running Backs"
           }
         ]
       },
       "season_wise_pgs": {
         "288": [
           {
             "position_id__postion_group": 1159,
             "position_id__postion_group__pg_name": "Defensive Backs"
           },
           {
             "position_id__postion_group": 1158,
             "position_id__postion_group__pg_name": "Linebackers"
           },
           {
             "position_id__postion_group": 1158,
             "position_id__postion_group__pg_name": "Linebackers"
           },
           {
             "position_id__postion_group": 1154,
             "position_id__postion_group__pg_name": "Running Backs"
           }
         ],
         "370": [
           {
             "position_id__postion_group": 1159,
             "position_id__postion_group__pg_name": "Defensive Backs"
           },
           {
             "position_id__postion_group": 1158,
             "position_id__postion_group__pg_name": "Linebackers"
           },
           {
             "position_id__postion_group": 1158,
             "position_id__postion_group__pg_name": "Linebackers"
           },
           {
             "position_id__postion_group": 1154,
             "position_id__postion_group__pg_name": "Running Backs"
           }
         ],
         "580": [
           {
             "position_id__postion_group": 1159,
             "position_id__postion_group__pg_name": "Defensive Backs"
           },
           {
             "position_id__postion_group": 1158,
             "position_id__postion_group__pg_name": "Linebackers"
           },
           {
             "position_id__postion_group": 1158,
             "position_id__postion_group__pg_name": "Linebackers"
           },
           {
             "position_id__postion_group": 1154,
             "position_id__postion_group__pg_name": "Running Backs"
           }
         ],
         "590": [
           {
             "position_id__postion_group": 1159,
             "position_id__postion_group__pg_name": "Defensive Backs"
           },
           {
             "position_id__postion_group": 1158,
             "position_id__postion_group__pg_name": "Linebackers"
           },
           {
             "position_id__postion_group": 1158,
             "position_id__postion_group__pg_name": "Linebackers"
           },
           {
             "position_id__postion_group": 1154,
             "position_id__postion_group__pg_name": "Running Backs"
           }
         ]
       },
       "avatar": "https://og-fileupload.s3.amazonaws.com/playerd1.PNG?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3TSF4J3HYL3E2LPQ%2F20220929%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20220929T214921Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=0373591a7f2dc9a75c6af046c92f8ad1b4806a826dd7bc354f9d84c09daceb3e",
       "firstname": "Richard",
       "lastname": "Hotchkiss",
       "role": "Offense",
       "user_id": 189,
       "postion_group": 1154,
       "position": 2814
     },
     {
       "id": 633,
       "jersey": 5,
       "contact_info": [],
       "checked": false,
       "selected": false,
       "pg_name": "Quarterbacks",
       "roles": [
         "Offense"
       ],
       "pg_names": [
         "Quarterbacks"
       ],
       "positions": [
         "Q"
       ],
       "playerpgs": [
         1153
       ],
       "playerpositions": [
         2813
       ],
       "updateser": false,
       "seasons": [
         288,
         370,
         580,
         590
       ],
       "season_wise_positions": {
         "288": [
           {
             "position_id": 2813,
             "position_id__name": "Q",
             "position_id__postion_group": 1153,
             "position_id__postion_group__pg_name": "Quarterbacks"
           }
         ],
         "370": [
           {
             "position_id": 2813,
             "position_id__name": "Q",
             "position_id__postion_group": 1153,
             "position_id__postion_group__pg_name": "Quarterbacks"
           }
         ],
         "580": [
           {
             "position_id": 2813,
             "position_id__name": "Q",
             "position_id__postion_group": 1153,
             "position_id__postion_group__pg_name": "Quarterbacks"
           }
         ],
         "590": [
           {
             "position_id": 2813,
             "position_id__name": "Q",
             "position_id__postion_group": 1153,
             "position_id__postion_group__pg_name": "Quarterbacks"
           }
         ]
       },
       "season_wise_pgs": {
         "288": [
           {
             "position_id__postion_group": 1153,
             "position_id__postion_group__pg_name": "Quarterbacks"
           }
         ],
         "370": [
           {
             "position_id__postion_group": 1153,
             "position_id__postion_group__pg_name": "Quarterbacks"
           }
         ],
         "580": [
           {
             "position_id__postion_group": 1153,
             "position_id__postion_group__pg_name": "Quarterbacks"
           }
         ],
         "590": [
           {
             "position_id__postion_group": 1153,
             "position_id__postion_group__pg_name": "Quarterbacks"
           }
         ]
       },
       "avatar": "https://og-fileupload.s3.amazonaws.com/download_o4a378S.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA3TSF4J3HYL3E2LPQ%2F20220929%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20220929T214921Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=252e2aff7355b04a1bded3f6ca4e892be887cda43872dc29cf823c0d9b77d525",
       "firstname": "Jose",
       "lastname": "Haskell",
       "role": "Offense",
       "user_id": 189,
       "postion_group": 1153,
       "position": 2813
     },
     {
       "id": 634,
       "jersey": 6,
       "contact_info": [],
       "checked": false,
       "selected": false,
       "pg_name": "Defensive Backs",
       "roles": [
         "Defense"
       ],
       "pg_names": [
         "Defensive Backs"
       ],
       "positions": [
         "SS"
       ],
       "playerpgs": [
         1159
       ],
       "playerpositions": [
         2833
       ],
       "updateser": false,
       "seasons": [
         288,
         370,
         580,
         590
       ],
       "season_wise_positions": {
         "288": [
           {
             "position_id": 2833,
             "position_id__name": "SS",
             "position_id__postion_group": 1159,
             "position_id__postion_group__pg_name": "Defensive Backs"
           }
         ],
         "370": [
           {
             "position_id": 2833,
             "position_id__name": "SS",
             "position_id__postion_group": 1159,
             "position_id__postion_group__pg_name": "Defensive Backs"
           }
         ],
         "580": [
           {
             "position_id": 2833,
             "position_id__name": "SS",
             "position_id__postion_group": 1159,
             "position_id__postion_group__pg_name": "Defensive Backs"
           }
         ],
         "590": [
           {
             "position_id": 2833,
             "position_id__name": "SS",
             "position_id__postion_group": 1159,
             "position_id__postion_group__pg_name": "Defensive Backs"
           }
         ]
       },
       "season_wise_pgs": {
         "288": [
           {
             "position_id__postion_group": 1159,
             "position_id__postion_group__pg_name": "Defensive Backs"
           }
         ],
         "370": [
           {
             "position_id__postion_group": 1159,
             "position_id__postion_group__pg_name": "Defensive Backs"
           }
         ],
         "580": [
           {
             "position_id__postion_group": 1159,
             "position_id__postion_group__pg_name": "Defensive Backs"
           }
         ],
         "590": [
           {
             "position_id__postion_group": 1159,
             "position_id__postion_group__pg_name": "Defensive Backs"
           }
         ]
       },
       "avatar": null,
       "firstname": "George",
       "lastname": "Scriber",
       "role": "Defense",
       "user_id": 189,
       "postion_group": 1159,
       "position": 2833
     },

   ]
  },
})
@Injectable()
export class PlayersState {
  constructor(private playersService: PlayerService ,     private store: Store) {

  }

  @Selector()
  static getPlayers(state: PlayerStateModel) {
    return state.playersList;
  }

  @Action(PlayerActions.GetPlayers)
  getPlayers(
    {getState, patchState}: StateContext<PlayerStateModel>,
  ) {
    this.store.dispatch(new Loading(true));
    this.playersService.getPlayers().pipe(tap(
      (response) => {
        this.store.dispatch(new Loading(false));
        patchState({
          playersList: response.results

        })
      },
      () => {
      }
    )).subscribe()


  }
}

import {Component, OnInit} from '@angular/core';
import {SidebarItem} from '../../../../../interfaces/sidebar.interface';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.scss'],
})
export class SidebarMenuComponent implements OnInit {
  sidebarItems: SidebarItem[] = [
    {
      title: 'Seasons',
      root: true,
      icon: 'assets/optimum-grading/flaticonmenu/calendar.svg',
      page: '/player/Season',
      bullet: 'dot',
      permissions: ['add_season'],
    },
    {
      title: 'Opponents',
      root: true,
      bullet: 'dot',
      icon: 'assets/optimum-grading/flaticonmenu/versus.svg',
      permissions: ['view_opponent'],
      submenu: [
        // show-Opponent
        // {
        //   title: 'Add Opponent',
        //   page: '/player/Opponent'
        // },
        {
          title: 'View Opponent',
          page: '/player/show-Opponent',
          permissions: ['view_opponent'],
        },
        {
          title: 'Weeks',
          page: '/player/show-Week',
          permissions: ['view_week'],

          // submenu: [
          //   // {
          //   //   title: 'Add Weeks',
          //   //   page: '/player/Week',
          //   // },
          //   {
          //     title: 'Show Weeks',
          //     page: '/player/show-Week',
          //   },

          //   ]
        },
      ],
    },
    {
      title: 'Position',
      root: true,
      icon: 'assets/optimum-grading/flaticonmenu/position.svg',
      page: '/settings/view-position',
      bullet: 'dot',
      permissions: ['view_position'],
    },
    {
      title: 'Coach',
      root: true,
      icon: 'assets/optimum-grading/flaticonmenu/coach.svg',
      bullet: 'dot',
      permissions: ['view_coach'],
      submenu: [
        {
          title: 'Show Coach',
          page: '/player/user',
          permissions: ['view_coach'],
        },
        {
          title: 'Add Coach',
          page: '/player/add-coach',
          permissions: ['add_coach'],
        },
      ],
    },
    {
      title: 'Roster',
      root: true,
      icon: 'assets/optimum-grading/flaticonmenu/american-football-player.svg',
      permissions: ['view_player'],
      bullet: 'dot',
      submenu: [
        {
          title: 'Player',
          page: '/player/get',
          permissions: ['view_player'],
        },
        {
          title: 'Player Substitution',
          page: '/settings/player-substitution',
          permissions: ['view_substitution'],
        },
      ],
    },
    {
      title: 'Production',
      root: true,
      bullet: 'dot',
      icon: 'assets/optimum-grading/flaticonmenu/monitoring.svg',
      page: '/grade/show-mtp',
      permissions: ['view_mtp_types'],
      // submenu: [
      // {
      //   title: 'Add PROD item(s)',
      //   page: '/grade/add-mtp'
      // },
      // {
      //   title: 'P.O.A Tuner',
      //   page: '/grade/grade-tuner',
      //   permissions:['add_mtp_types'],
      // },
      // {
      //   title: 'Show P.O.A List',
      //   page: '/grade/show-mtp',
      //   permissions:['view_mtp_types'],

      // },
      // {
      //   title: 'Player Matches',
      //   page: '/player/player-match',
      // }
      // ]
    },
    {
      title: 'Grade',
      root: true,
      icon: 'assets/optimum-grading/flaticonmenu/qualification.svg',
      page: '/player/show-matches',
      permissions: ['view_matches'],
      bullet: 'dot',
    },
    {
      title: 'Reports',
      root: true,
      bullet: 'dot',
      icon: 'assets/optimum-grading/flaticonmenu/monitor.svg',
      permissions: ['view_reports'],
      submenu: [
        {
          title: 'Play by Play',
          page: '/player/show-playbyplay/1',
          permissions: ['view_matches'],
        },
        {
          title: 'Grading Report',
          page: '/player/playerreport',
          permissions: ['view_grading_report'],
        },
        {
          title: 'Player Comparison',
          page: '/player/player-comparison',
          permissions: ['view_player_comparison_report'],
        },
        {
          title: 'Player Production',
          page: '/player/player-production',
          permissions: ['view_player_production_report'],
        },
        {
          title: 'Production Summary Report',
          page: '/player/production-summary-report',
          permissions: ['view_player_comparison_report'],
        },
        {
          title: 'Gridiron Report',
          page: '/player/gridiron-report',
          permissions: ['view_gridiron_leaders_report'],
        },
        {
          title: 'Position Group',
          page: '/player/position-group-report',
          permissions: ['view_position_group_report'],
        },
        {
          title: 'Player Report',
          page: '/player/player-graph-report',
          permissions: ['view_player_report'],
        },
      ],
    },
    {
      title: 'Data Import',
      root: true,
      bullet: 'dot',
      icon: 'assets/optimum-grading/flaticonmenu/data-transfer.svg',
      permissions: ['view_reports'],
      submenu: [
        {
          title: 'Import Grading Data',
          page: '/player/match-upload',
          permissions: ['add_reports'],
        },
        {
          title: 'View Uploaded Data',
          page: '/player/show-reports',
          permissions: ['view_reports'],
        },
        {
          title: 'Map Data',
          page: '/player/map-report',
          permissions: ['add_reports'],
        },
      ],
    },
    {
      title: 'System Setting',
      root: true,
      icon: 'assets/optimum-grading/flaticonmenu/computer.svg',
      page: '/system-setting',
      permissions: ['view_matches'],
      bullet: 'dot',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}

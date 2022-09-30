import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {LayoutType} from '../../../core/configs/config';
import {LayoutInitService} from '../../../core/layout-init.service';
import {LayoutService} from '../../../core/layout.service';
import {FormControl} from '@angular/forms';
import {Select} from '@ngxs/store';
import {SeasonState} from '../../../../../NgXs/states/season.state';
import {Observable} from 'rxjs';
import {Season} from '../../../../../interfaces/season.interface';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.scss'],
})
export class HeaderMenuComponent implements OnInit {
  type = [
    { label: 'Offence' },
    { label: 'Defence' },
    { label: 'Special Teams' },
  ];
  teamType = new FormControl('');

  @Select(SeasonState.seasons) seasons: Observable<Season[]>;

  constructor(
    private router: Router,
    private layout: LayoutService,
    private layoutInit: LayoutInitService
  ) {}

  ngOnInit(): void {
    console.log(this.layout.getBaseLayoutTypeFromRouteOrLocalStorage());
    // this.layoutInit.setBaseLayoutType('light-sidebar');
  }

  calculateMenuItemCssClass(url: string): string {
    return checkIsActive(this.router.url, url) ? 'active' : '';
  }

  setBaseLayoutType(layoutType: LayoutType) {
    this.layoutInit.setBaseLayoutType(layoutType);
  }

  setToolbar(
    toolbarLayout: 'classic' | 'accounting' | 'extended' | 'reports' | 'saas'
  ) {
    const currentConfig = { ...this.layout.layoutConfigSubject.value };
    if (currentConfig && currentConfig.app && currentConfig.app.toolbar) {
      currentConfig.app.toolbar.layout = toolbarLayout;
      this.layout.saveBaseConfig(currentConfig);
    }
  }
}

const getCurrentUrl = (pathname: string): string => {
  return pathname.split(/[?#]/)[0];
};

const checkIsActive = (pathname: string, url: string) => {
  const current = getCurrentUrl(pathname);
  if (!current || !url) {
    return false;
  }

  if (current === url) {
    return true;
  }

  if (current.indexOf(url) > -1) {
    return true;
  }

  return false;
};

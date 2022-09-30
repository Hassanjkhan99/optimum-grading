export interface Submenu {
  title: string;
  page: string;
  permissions: string[];
}

export interface SidebarItem {
  title: string;
  root: boolean;
  icon: string;
  page?: string;
  bullet: string;
  permissions: string[];
  submenu?: Submenu[];
}

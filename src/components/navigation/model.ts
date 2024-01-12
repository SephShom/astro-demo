export interface NavDropDownItem {
  id: number;
  title: string;
  description: string;
  route: string;
}

// Dropdown Menu Container
export interface MenuTrigger {
  id: number;
  name: string;
  navItems?: NavDropDownItem[];
  banner: boolean;
  bannerTitle?: string;
  bannerDescription?: string,
  bannerIcon?: string;
  route?: string;
  type: 'dropdown' | 'button' | 'link';
}

// Dropdown Menu Transporter
export type NavDropDown = {
  updateState: React.Dispatch<React.SetStateAction<boolean>>;
  dpItems: NavDropDownItem[];
  banner: boolean;
  bannerTitle?: string;
  bannerDescription?: string;
  bannerIcon?: string;
};

export type BreadcrumbModel = {
  id: number;
  name: string;  
  route: string;
}
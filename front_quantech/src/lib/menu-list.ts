import {
  Tag,
  Users,
  Settings,
  Bookmark,
  SquarePen,
  ContactRound,
  LayoutGrid,
  LucideIcon, Umbrella, WalletCards, SquareArrowDownRight, RefreshCw
} from "lucide-react";

type Submenu = {
  href: string;
  label: string;
  active?: boolean;
};

type Menu = {
  href: string;
  label: string;
  active?: boolean;
  icon: LucideIcon;
  submenus?: Submenu[];
};

type Group = {
  groupLabel: string;
  menus: Menu[];
};

export function getMenuList(pathname: string): Group[] {
  return [
    {
      groupLabel: "",
      menus: [
        {
          href: "/dashboard",
          label: "Dashboard",
          icon: LayoutGrid,
          submenus: []
        }
      ]
    },
    {
      groupLabel: "",
      menus: [
        {
          href: "/comptes",
          label: "Mes comptes",
          icon: ContactRound
        },
        {
          href: "/assurances",
          label: "Mes Assurances",
          icon: Umbrella
        },
        {
          href: "/cartes",
          label: "Mes Cartes",
          icon: WalletCards
        },
        {
          href: "/finances",
          label: "Finances Personnelles",
          icon: SquareArrowDownRight
        },
        {
          href: "/devises",
          label: "Devises & Changes",
          icon: RefreshCw
        },
      ]
    },
  ];
}

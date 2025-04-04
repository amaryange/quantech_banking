"use client";

import Link from "next/link";
import {Ellipsis, LogOut, User} from "lucide-react";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { getMenuList } from "@/lib/menu-list";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { CollapseMenuButton } from "@/components/admin-panel/collapse-menu-button";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider
} from "@/components/ui/tooltip";
import useAuthStore from "@/hooks/auth-store";
import {useShallow} from "zustand/react/shallow";

interface MenuProps {
  isOpen: boolean | undefined;
}

export function Menu({ isOpen }: MenuProps) {
  const pathname = usePathname();
  const menuList = getMenuList(pathname);

    const {logout} = useAuthStore(
        useShallow((s) => ({
            logout: s.logout,
        }))
    )

    const handleLogout = () => {
        logout()
    }

  return (
      <ScrollArea className="[&>div>div[style]]:!block">
        <nav className="mt-8 h-full w-full">
            <ul className="flex flex-col min-h-[calc(100vh-48px-36px-16px-32px)] lg:min-h-[calc(100vh-32px-40px-32px)] items-start space-y-1 px-2">
                {menuList.map(({groupLabel, menus}, index) => (
                    <li className={cn("w-full", groupLabel ? "pt-5" : "")} key={index}>
                        {(isOpen && groupLabel) || isOpen === undefined ? (
                            <p className="text-sm font-medium text-muted-foreground px-4 pb-2 max-w-[248px] truncate">
                                {groupLabel}
                            </p>
                        ) : !isOpen && isOpen !== undefined && groupLabel ? (
                            <TooltipProvider>
                                <Tooltip delayDuration={100}>
                                    <TooltipTrigger className="w-full">
                                        <div className="w-full flex justify-center items-center">
                                            <Ellipsis className="h-5 w-5"/>
                                        </div>
                                    </TooltipTrigger>
                                    <TooltipContent side="right">
                                        <p>{groupLabel}</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        ) : (
                            <p className="pb-2"></p>
                        )}
                        {menus.map(
                            ({href, label, icon: Icon, active, submenus}, index) =>
                                !submenus || submenus.length === 0 ? (
                                    <div className="w-full" key={index}>
                                        <TooltipProvider disableHoverableContent>
                                            <Tooltip delayDuration={100}>
                                                <TooltipTrigger asChild>
                                                    <div className="relative w-full">
                                                        {/* Barre verticale rouge pour les éléments actifs lorsque la sidebar est ouverte */}
                                                        {isOpen !== false && ((active === undefined && pathname.startsWith(href)) || active) && (
                                                            <div
                                                                className="absolute left-0 top-0 w-1.5 h-10 bg-red-600 rounded-r-sm"></div>
                                                        )}
                                                        <Button
                                                            variant="ghost"
                                                            className={cn(
                                                                "w-full justify-start h-10 mb-1",
                                                                (active === undefined && pathname.startsWith(href)) || active
                                                                    ? isOpen !== false
                                                                        ? "pl-5 text-red-600"
                                                                        : "border border-red-500 bg-red-400/15"
                                                                    : ""
                                                            )}
                                                            asChild
                                                        >
                                                            <Link href={href}>
                                                      <span
                                                          className={cn(
                                                              isOpen === false ? "" : "mr-4",
                                                              (active === undefined && pathname.startsWith(href)) || active
                                                                  ? isOpen !== false
                                                                      ? "text-red-600"
                                                                      : ""
                                                                  : ""
                                                          )}
                                                      >
                                                        <Icon size={18}/>
                                                      </span>
                                                                <p
                                                                    className={cn(
                                                                        "max-w-[200px] truncate",
                                                                        isOpen === false
                                                                            ? "-translate-x-96 opacity-0"
                                                                            : "translate-x-0 opacity-100",
                                                                        (active === undefined && pathname.startsWith(href)) || active
                                                                            ? isOpen !== false
                                                                                ? "text-red-600"
                                                                                : ""
                                                                            : ""
                                                                    )}
                                                                >
                                                                    {label}
                                                                </p>
                                                            </Link>
                                                        </Button>
                                                    </div>
                                                </TooltipTrigger>
                                                {isOpen === false && (
                                                    <TooltipContent side="right" className={"bg-red-500"}>
                                                        {label}
                                                    </TooltipContent>
                                                )}
                                            </Tooltip>
                                        </TooltipProvider>
                                    </div>
                                ) : (
                                    <div className="w-full" key={index}>
                                        <CollapseMenuButton
                                            icon={Icon}
                                            label={label}
                                            active={
                                                active === undefined
                                                    ? pathname.startsWith(href)
                                                    : active
                                            }
                                            submenus={submenus}
                                            isOpen={isOpen}
                                            activeClassName={isOpen !== false ? "bg-red-500" : ""}
                                        />
                                    </div>
                                )
                        )}
                    </li>
                ))}
                <li className="w-full grow flex items-end">
                    <TooltipProvider disableHoverableContent>
                        <Tooltip delayDuration={100}>
                            <TooltipTrigger asChild>
                                <Button
                                    onClick={handleLogout}
                                    variant="outline"
                                    className="w-full justify-center h-10 mt-5"
                                >
                                    <span className={cn(isOpen === false ? "" : "mr-4")}>
                                      <LogOut size={18}/>
                                    </span>
                                    <p
                                        className={cn(
                                            "whitespace-nowrap",
                                            isOpen === false ? "opacity-0 hidden" : "opacity-100"
                                        )}
                                    >
                                        Se déconnecter
                                    </p>
                                </Button>
                            </TooltipTrigger>
                            {isOpen === false && (
                                <TooltipContent side="right">Se déconnecter</TooltipContent>
                            )}
                        </Tooltip>
                    </TooltipProvider>
                </li>
            </ul>
        </nav>
      </ScrollArea>
  );
}

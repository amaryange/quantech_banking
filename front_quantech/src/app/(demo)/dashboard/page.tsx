"use client";
import Link from "next/link";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip";
import { useSidebar } from "@/hooks/use-sidebar";
import { useStore } from "@/hooks/use-store";
import {Dashboard} from "@/components/app-component/dashboard";
import {useShallow} from "zustand/react/shallow";
import {useSession} from "@/hooks/use-session";
import {useEffect} from "react";

export default function DashboardPage() {

  const {fetchUser, loading, user} = useSession(
      useShallow((s) => ({
        fetchUser: s.fetchUser,
        user: s.user,
        loading: s.isLoading,
      }))
  )

  const handleSession = () => {
    fetchUser()
  }

  useEffect(() => {
    handleSession()
  }, [])

  const sidebar = useStore(useSidebar, (x) => x);
  if (!sidebar) return null;

  const { settings, setSettings } = sidebar;

  return (
    <ContentLayout title={`Hi, ${user?.fullName.split(' ')[0]}`} description="👋🏾 Bienvenue sur ton dasboard">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/">Home</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Dashboard</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <TooltipProvider>
        <div className="flex gap-6 mt-6">
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="flex items-center space-x-2">
                <Switch
                  id="is-hover-open"
                  onCheckedChange={(x) => setSettings({ isHoverOpen: x })}
                  checked={settings.isHoverOpen}
                />
                <Label htmlFor="is-hover-open">Hover Open</Label>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>When hovering on the sidebar in mini state, it will open</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="flex items-center space-x-2">
                <Switch
                  id="disable-sidebar"
                  onCheckedChange={(x) => setSettings({ disabled: x })}
                  checked={settings.disabled}
                />
                <Label htmlFor="disable-sidebar">Disable Sidebar</Label>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p>Hide sidebar</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </TooltipProvider>

      <Dashboard />

    </ContentLayout>
  );
}

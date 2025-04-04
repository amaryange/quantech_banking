"use client"

import Link from "next/link";

import PlaceholderContent from "@/components/demo/placeholder-content";
import { ContentLayout } from "@/components/admin-panel/content-layout";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator
} from "@/components/ui/breadcrumb";
import {useSession} from "@/hooks/use-session";
import {useShallow} from "zustand/react/shallow";
import {useEffect} from "react";

export default function AccountPage() {

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
            <BreadcrumbLink asChild>
              <Link href="/dashboard">Dashboard</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Account</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </ContentLayout>
  );
}

'use client'

import {
  Bell,
  Bookmark,
  Home,
  List,
  Mail,
  MoreHorizontal,
  User,
  Users,
} from 'lucide-react';
import { SidebarDesktop } from '@/Components/Custom/Sidebar-Desktop';
import { SidebarItems } from '@/types/types';
import { SidebarButton } from '@/Components/Custom/Sidebar-Button';
import { TooltipProvider } from '@/Components/ui/tooltip';

const sidebarItems: SidebarItems = {
  links: [
    { label: 'Home', href: '/home', icon: Home },
    { label: 'Notification', href: '/notification', icon: Bell },
    { label: 'Messages', href: '/messages', icon: Mail },
    {
      href: '/lists',
      icon: List,
      label: 'Lists',
    },
    {
      href: '/bookmarks',
      icon: Bookmark,
      label: 'Bookmarks',
    },
    {
      href: '/communities',
      icon: Users,
      label: 'Communities',
    },
    {
      href: '/profile',
      icon: User,
      label: 'Profile',
    },
  ],
  extras: (
    <div className='flex flex-col gap-2'>
      <SidebarButton icon={MoreHorizontal} className='w-full'>
        More
      </SidebarButton>
      <SidebarButton
        className='justify-center w-full text-white'
        variant='default'
      >
        Tweet
      </SidebarButton>
    </div>
  ),
};

export function Sidebar() {
  return <TooltipProvider>
    <SidebarDesktop sidebarItems={sidebarItems} />
  </TooltipProvider>;
}
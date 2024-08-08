'use client';

import { SidebarButton } from '@/Components/Custom/Sidebar-Button';
import { SidebarItems } from '@/types/types';
import { Separator } from '../ui/separator';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import Link from "next/link"
import {
  CalendarClock,
  CalendarX2,
  Coins,
  FileIcon,
  Home,
  LogOut,
  MailQuestionIcon,
  Printer,
  Settings,
  UserCheck,
} from "lucide-react"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/Components/ui/tooltip"
import ActiveLink from './ActiveLink';
import { PayslipDrawer } from './PayslipDrawer';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from '../ui/alert-dialog';
import { useState } from 'react';

interface SidebarDesktopProps {
  sidebarItems: SidebarItems;
}
export function SidebarDesktop(props: SidebarDesktopProps) {

  const [isAlertDialogOpen, setIsAlertDialogOpen] = useState<boolean>(false)

  return (
    <>
      <aside className="fixed inset-y-0 left-0 z-10 flex-col hidden border-r w-14 bg-background sm:flex">
        <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
          <Popover>
            <PopoverTrigger asChild>
              <Link href="#"
                className="flex items-center justify-center gap-2 text-lg font-semibold rounded-full group h-9 w-9 shrink-0 bg-primary text-primary-foreground md:h-8 md:w-8 md:text-base"
              >
                <Avatar>
                  <AvatarImage src={`${route('images')}/7335189409555283986.jpeg`} />
                  <AvatarFallback>JC</AvatarFallback>
                </Avatar>
                <span className="sr-only">Jerome Cafranca</span>
              </Link>
            </PopoverTrigger>
            <PopoverContent className='mt-2 ml-5 w-60 p-0 rounded-[0.8rem]'>
              <div className="flex flex-col p-2 pb-1 mt-2 ml-3 space-y-1">
                <p className="text-sm font-medium leading-none">Cafranca, Jerome E.</p>
                <p className="text-xs leading-none text-muted-foreground">
                  jerome.cafranca@ddcgroup.asia
                </p>
              </div>
              <Separator className="w-full my-3 mb-1" />
              <div className='pb-1 mt-2 space-y-1'>
                <div className='mx-2 my-2 space-y-1'>
                  <Link href="/">
                    <SidebarButton size='sm' icon={UserCheck} className='w-full'>
                      Profile
                    </SidebarButton>
                  </Link>
                  <Link href="/">
                    <SidebarButton size='sm' icon={Settings} className='w-full'>
                      Account Settings
                    </SidebarButton>
                  </Link>
                  <Link href="/">
                    <SidebarButton size='sm' icon={FileIcon} className='w-full'>
                      File Resignation
                    </SidebarButton>
                  </Link>
                </div>
                <Separator className="w-full my-5" />
                <div className='pb-2 mx-2'>
                  <SidebarButton size='sm' icon={LogOut} className='w-full' onClick={() => setIsAlertDialogOpen(true)}>
                    Log Out
                  </SidebarButton>
                </div>
              </div>
            </PopoverContent>
          </Popover>
          <Tooltip>
            <TooltipTrigger>
              <ActiveLink href='home' title='Dashboard'>
                <Home className="w-5 h-5" />
              </ActiveLink>
            </TooltipTrigger>
            <TooltipContent side="right">Dashboard</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger>
              <ActiveLink href='timelogs' title='Timelogs'>
                <CalendarClock className="w-5 h-5" />
              </ActiveLink>
            </TooltipTrigger>
            <TooltipContent side="right">Time Logs</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger>
              <ActiveLink href='leave' title='Leave'>
                <CalendarX2 className="w-5 h-5" />
              </ActiveLink>
            </TooltipTrigger>
            <TooltipContent side="right">Leave</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger>
              <ActiveLink href='memo' title='Memo'>
                <MailQuestionIcon className="w-5 h-5" />
              </ActiveLink>
            </TooltipTrigger>
            <TooltipContent side="right">Memo</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger>
              <ActiveLink href='incentives' title='Allowance/Incentives'>
                <Coins className="w-5 h-5" />
              </ActiveLink>
            </TooltipTrigger>
            <TooltipContent side="right">Allowance / Incentives</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger>
              <Link
                href="#"
                className="flex items-center justify-center transition-colors rounded-lg h-9 w-9 text-muted-foreground hover:text-foreground md:h-8 md:w-8"
              >
                <Printer className="w-5 h-5" />
                <span className="sr-only">Print</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Print</TooltipContent>
          </Tooltip>
        </nav>
        <nav className="flex flex-col items-center gap-4 px-2 mt-auto sm:py-5">
          <Tooltip>
            <TooltipTrigger>
              <Link
                href="#"
                className="flex items-center justify-center transition-colors rounded-lg h-9 w-9 text-muted-foreground hover:text-foreground md:h-8 md:w-8"
              >
                <PayslipDrawer />
                <span className="sr-only">Payslip</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Payslip</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger>
              <ActiveLink href='settings' title='Settings'>
                <Settings className="w-5 h-5" />
              </ActiveLink>
            </TooltipTrigger>
            <TooltipContent side="right">Settings</TooltipContent>
          </Tooltip>
        </nav>
      </aside>
      <AlertDialog open={isAlertDialogOpen} onOpenChange={setIsAlertDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Ready to Leave?</AlertDialogTitle>
            <AlertDialogDescription>
              Select "Logout" below if you are ready to end your current session.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => setIsAlertDialogOpen(false)}>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={() => window.location.href = route("login")}>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
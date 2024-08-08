import { SidebarMobile } from "@/Components/Custom/Sidebar-Mobile";
import ChangeThemeToggle from "@/Components/Custom/ThemeToogle";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/Components/ui/breadcrumb";
import { Button } from "@/Components/ui/button";
import { Calendar, Link, MailQuestionIcon, MessageCircleQuestionIcon, MessagesSquare, MessagesSquareIcon, Share, Slash, SunIcon } from "lucide-react";
import { redirect } from "next/dist/server/api-utils";

interface HeaderProps {
    title?: string
    subtitle?: string
}

export function Header({ title, subtitle }: HeaderProps) {
    return (
        <header className="sticky top-0 z-30 flex items-center gap-4 px-4 mt-1 border-b h-14 bg-background sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
            <SidebarMobile />
            <div className="flex flex-col space-y-1.5">
                <h3 className="text-3xl font-semibold leading-none tracking-tight">{title}</h3>
                <p className="hidden text-sm text-muted-foreground sm:inline">{subtitle}</p>
            </div>
            <div className="flex items-center gap-2 sm:ml-auto">
                <Button
                    variant="outline"
                    size="default"
                    className="ml-auto gap-1.5 text-sm" >
                    <MessagesSquareIcon className="size-3.5" />
                    Chat with HR
                </Button>
                <ChangeThemeToggle />
                <Button
                    variant="outline"
                    size="default"
                    className="ml-auto gap-1.5 text-sm" onClick={() => {
                        window.location.href = 'http://idcsi-officesuites.com:8080/hrms/howto/TIME%20-%20HOW%20TOs.pdf'
                    }}>
                    <MessageCircleQuestionIcon className="size-3.5" />
                    Help
                </Button>
            </div>

        </header>
    )
}
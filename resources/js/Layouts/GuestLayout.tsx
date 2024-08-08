import { TooltipProvider } from '@/Components/ui/tooltip';
import { Sidebar } from '@/Pages/Template/Sidebar';
import { Head } from '@inertiajs/react';
import { ThemeProvider } from 'next-themes';
import React, { PropsWithChildren } from 'react';

interface GuestProps{
    title ?: string,
    children ?: React.ReactNode
}

export default function Guest({ title, children }: GuestProps) {

    return (
        <ThemeProvider defaultTheme="light" attribute="class">
            <Head title={title} />
            <div className="flex flex-col w-auto min-h-screen bg-background">
                <Sidebar />
                <TooltipProvider>{children}</TooltipProvider>
            </div>
        </ThemeProvider>
    );
}

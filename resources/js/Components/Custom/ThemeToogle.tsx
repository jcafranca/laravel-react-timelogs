import { useState, useEffect } from 'react';
import { Button } from '../ui/button';
import { MoonIcon, MoonStarIcon, SunIcon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Popover, PopoverTrigger } from '../ui/popover';
import { PopoverContent } from '@radix-ui/react-popover';

function ChangeThemeToggle() {
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  return (
    <Popover>
      <PopoverTrigger>
        <Button variant="outline" size="icon" className="w-10 h-10 text-sm" onClick={toggleTheme}>
          {theme == 'dark' ? <MoonStarIcon className='w-5 h-5' /> : <SunIcon className='w-5 h-5' />}
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        
      </PopoverContent>
    </Popover>
  );
}

export default ChangeThemeToggle;

"use client"
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex justify-between items-center py-4 px-6">
      <div className="text-2xl font-bold">
            Mohamad Anas
      </div>

      <div className="flex items-center space-x-6 font-mono font-medium text-sm">
        <Link href="#about" className="hover:text-primary transition-colors">
          About
        </Link>
        <Link href="#skills" className="hover:text-primary transition-colors">
          Skills
        </Link>
        <Link href="#projects" className="hover:text-blue-800 transition-colors">
          Projects
        </Link> 
        <Link href="#experience" className="hover:text-primary transition-colors">
          Experience
        </Link>
        <Link href="#resume" className="hover:text-primary transition-colors">
            Resume
        </Link>
        </div>

        <div className="flex items-center space-x-2">
            <Button 
                variant="outline" 
                className="ml-4"
                onClick={() => window.open('/resume.pdf', '_blank')}
            >
                <Download className="w-4 h-4 mr-2" />
                Download Resume
            </Button>
        </div>
     
    </nav>
  );
}

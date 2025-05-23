"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { NAV_LINKS, SERVER_NAME, JOIN_BUTTON_TEXT } from '@/lib/constants';
import SaLogoIcon from '@/components/icons/SaLogoIcon';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { SERVER_IP } from '@/lib/constants';

const NavigationBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isJoinModalOpen, setIsJoinModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItemClasses = "relative px-3 py-2 text-sm font-medium transition-all duration-200 ease-out hover:text-primary hover:glow-primary transform hover:-translate-y-px before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-0 before:h-0.5 before:bg-primary before:transition-all before:duration-300 hover:before:w-full";
  const mobileNavItemClasses = "block px-3 py-3 text-base font-medium text-foreground hover:bg-muted hover:text-primary rounded-md transition-all duration-200 ease-out transform hover:-translate-y-px";

  const JoinModal = () => (
    <Dialog open={isJoinModalOpen} onOpenChange={setIsJoinModalOpen}>
      <DialogContent className="sm:max-w-[425px] bg-card border-primary shadow-lg shadow-primary/30">
        <DialogHeader>
          <DialogTitle className="text-2xl text-primary glow-primary text-center">Join Storage Attendance</DialogTitle>
        </DialogHeader>
        <DialogDescription className="text-center mt-2 mb-4 text-muted-foreground">
          Connect to our Minecraft server using the IP address below:
        </DialogDescription>
        <div className="p-4 my-4 bg-muted rounded-md text-center">
          <p className="text-lg font-mono text-accent glow-accent">{SERVER_IP}</p>
        </div>
        <p className="text-sm text-muted-foreground text-center">
          Launch Minecraft, click "Multiplayer", then "Add Server" (or "Direct Connect"), and enter the IP. See you there!
        </p>
        <Button onClick={() => setIsJoinModalOpen(false)} className="w-full mt-4" variant="outline">Close</Button>
      </DialogContent>
    </Dialog>
  );

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-background/95 shadow-lg backdrop-blur-md' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link href="#home" className="flex items-center space-x-2 group">
              <SaLogoIcon className="h-10 w-10 text-primary transition-transform group-hover:scale-110 group-hover:glow-primary" />
              <span className="font-bold text-xl text-foreground group-hover:text-primary transition-colors group-hover:glow-primary">
                {SERVER_NAME}
              </span>
            </Link>

            <div className="hidden md:flex items-center space-x-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                  className={`${navItemClasses} ${link.disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : ''}`}
                  aria-disabled={link.disabled}
                  onClick={(e) => link.disabled && e.preventDefault()}
                >
                  {link.label}
                  {link.disabled && link.note && <span className="text-xs text-muted-foreground ml-1">({link.note})</span>}
                </Link>
              ))}
            </div>
            
            <div className="hidden md:block">
               <Button 
                variant="default" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-md hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105 glow-primary"
                onClick={() => setIsJoinModalOpen(true)}
              >
                {JOIN_BUTTON_TEXT}
              </Button>
            </div>

            <div className="md:hidden flex items-center">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle mobile menu"
                className="text-foreground hover:text-primary"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-background/95 shadow-lg pb-4">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                  className={`${mobileNavItemClasses} ${link.disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : ''}`}
                  aria-disabled={link.disabled}
                  onClick={(e) => {
                    if (link.disabled) e.preventDefault();
                    else setMobileMenuOpen(false);
                  }}
                >
                  {link.label}
                  {link.disabled && link.note && <span className="text-xs text-muted-foreground ml-1">({link.note})</span>}
                </Link>
              ))}
            </div>
             <div className="px-4 mt-2">
              <Button 
                variant="default" 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-md hover:shadow-lg hover:shadow-primary/50 transition-all duration-300 transform hover:scale-105 glow-primary"
                onClick={() => { setIsJoinModalOpen(true); setMobileMenuOpen(false);}}
              >
                {JOIN_BUTTON_TEXT}
              </Button>
            </div>
          </div>
        )}
      </nav>
      <JoinModal />
    </>
  );
};

export default NavigationBar;

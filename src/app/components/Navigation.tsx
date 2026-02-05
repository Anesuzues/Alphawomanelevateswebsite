import { Menu } from 'lucide-react';
import { Button } from '@/app/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/app/components/ui/sheet';
import logo from '../../assets/Alpha Women Logo.jpeg';

export function Navigation() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="border-b bg-white/95 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button 
            onClick={() => scrollToSection('home')}
            className="flex items-center gap-3 hover:scale-105 transition-transform"
          >
            <img src={logo} alt="Alpha Woman Elevates Logo" className="h-20 w-20" />
          </button>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="hover:text-purple-600 transition-colors font-medium">Home</button>
            <button onClick={() => scrollToSection('about')} className="hover:text-purple-600 transition-colors font-medium">About</button>
            <button onClick={() => scrollToSection('programs')} className="hover:text-purple-600 transition-colors font-medium">Programs</button>
            <button onClick={() => scrollToSection('contact')} className="hover:text-purple-600 transition-colors font-medium">Contact</button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger>
                <Button variant="ghost" size="icon">
                  <div className="flex flex-col gap-1">
                    <div className="w-5 h-0.5 bg-gray-900"></div>
                    <div className="w-5 h-0.5 bg-gray-900"></div>
                    <div className="w-5 h-0.5 bg-gray-900"></div>
                  </div>
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col space-y-4 mt-8">
                  <button onClick={() => scrollToSection('home')} className="text-lg hover:text-purple-600 transition-colors text-left">Home</button>
                  <button onClick={() => scrollToSection('about')} className="text-lg hover:text-purple-600 transition-colors text-left">About</button>
                  <button onClick={() => scrollToSection('programs')} className="text-lg hover:text-purple-600 transition-colors text-left">Programs</button>
                  <button onClick={() => scrollToSection('contact')} className="text-lg hover:text-purple-600 transition-colors text-left">Contact</button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
import { Navigation } from '@/app/components/Navigation';
import { Home } from '@/app/pages/Home';
import { Toaster } from '@/app/components/ui/sonner';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Home />
      <Toaster />
    </div>
  );
}

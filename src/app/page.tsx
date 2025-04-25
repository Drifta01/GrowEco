



import GamingCard from '@/components/pages/forms/GamingCard';
import './globals.css';
import { Home } from '@/components/Home';

export default async function Page() {
    await new Promise(resolve => setTimeout(resolve, 1000));

    return (
        <div>
          <Home />
          
     
         
   
          
       
          
        </div>
    );
}

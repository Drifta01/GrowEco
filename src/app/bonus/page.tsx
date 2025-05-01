
import  Bonuses  from './Bonuses';
import bonus from '@/data/bonus.json'; // Assuming you have a JSON file with casino data


export default function Page(
    data = bonus, // Assuming you have a JSON file with casino data
) {

    return (
    <Bonuses  {...bonus}/>
  );
}


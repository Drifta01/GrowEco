/* eslint-disable @typescript-eslint/no-unused-vars */
import getBonuses from '../../actions/getBonuses';
import { Bonuses } from './Bonuses';
import bonuses from '@/db/bonuses.json'; // Assuming you have a JSON file with casino data

export default async function Page() {
  const bonusData = await getBonuses();
  return <Bonuses {...bonuses} />;
}

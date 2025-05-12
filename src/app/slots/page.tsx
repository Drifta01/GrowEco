/* eslint-disable @typescript-eslint/no-unused-vars */
import getSlots from '../../actions/getSlots';
import { Slots } from './Slots';

export default async function Page() {
  const slots = await getSlots();
  return <Slots {...slots} />;
}

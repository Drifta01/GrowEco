/* eslint-disable @typescript-eslint/no-unused-vars */

import { Casinos } from './Casinos';
import casinos from '@/db/casinos.json'; // Assuming you have a JSON file with casino data

export default async function Page() {
  return <Casinos data={casinos} />;
}

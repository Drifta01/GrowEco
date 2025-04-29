/* eslint-disable @typescript-eslint/no-unused-vars */
import getSlots from "../../actions/getSlots";
import {Slots} from "./Slots";
import slots from "../../data/slots.json"; // Assuming you have a JSON file with casino data




export default async function Page() {
const slots = await getSlots();
    return (
<Slots {...slots}/>

    )};




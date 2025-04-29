/* eslint-disable @typescript-eslint/no-unused-vars */
import getCasinos from "../../actions/getCasinos";
import {Casinos} from "./Casinos";
import casinos from "@/data/casinos.json"; // Assuming you have a JSON file with casino data

export default async function Page() {
    const casinoData = await getCasinos();

   
    return (
<Casinos data={casinos}/>

    );
}
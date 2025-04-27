import getWildz from "../../actions/getWildz";
import {Casinos} from "./Casinos";
import casinos from "@/data/casinos.json"; // Assuming you have a JSON file with casino data

export default async function Page() {
    const wildzData = await getWildz();

   
    return (
<Casinos data={casinos}/>

    );
}
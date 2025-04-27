import getWildz from "../../actions/getWildz";
import {Betting} from "./Betting";
import betting from "@/data/betting.json"; // Assuming you have a JSON file with casino data

export default async function Page() {
    const wildzData = await getWildz();

   
    return (
<Betting data={betting}/>

    );
}
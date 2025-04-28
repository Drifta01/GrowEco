import getSportBet from "../../actions/getSportBet";
import {SportsBet} from "./SportsBet";
import sportsbetting from "@/data/sportsbetting.json"; // Assuming you have a JSON file with casino data

export default async function Page() {
    const sportsBetData = await getSportBet();

   
    return (
<SportsBet data={sportsbetting}/>

    );
}
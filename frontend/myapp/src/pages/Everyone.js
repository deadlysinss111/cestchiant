import { getAll } from "../api/Fetch";
import Menu from "../components/Menu";
import PrintAll from "../components/PrintAll";


function Everyone(props){
    return <div>
        <Menu />
        <h1>Everyone is here !</h1>
        <PrintAll sort={getAll()}/>
    </div>
};

export default Everyone;
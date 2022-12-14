import Menu from "../components/Menu";
import PrintAll from "../components/PrintAll";


function Everyone(props){
    return <><div>
        <Menu />
        <h1>Everyone is here !</h1>
        <PrintAll />
    </div>
    <footer id="foot" className="hidden">AntoineLeBG</footer>
    </>
};

export default Everyone;
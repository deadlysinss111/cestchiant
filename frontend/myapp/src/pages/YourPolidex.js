import Menu from "../components/Menu";
import PrintOwned from "../components/PrintOwned";

function YourPolidex(props){
    return <>
    <div>
        <Menu />
        <h1>Here your Polidex !</h1>
        <PrintOwned />
    </div>
    <footer id="foot" className="hidden">AntoineLeBG</footer>
    </>

    
};

export default YourPolidex;
import Menu from "../components/Menu";

function Home(props){
    return(<div>
    <Menu />
    <h1>Bienvenu dans le monde <span id="merveilleux">merveilleux</span> des politiques !</h1><br /><br />
    <h2>kécécé ?</h2><br />
    <p>En gros c'est un site où tu va pouvoir réaliser ton rêve : capturer des politiciens (pokepo =&gt; pocket politicians)</p><br />
    <h2>OH MON DIEU COMMENT JE FAIS ?</h2><br />
    <p>C'est très simple, tu va sur la page everyone et tu captures qui tu veux, tu pourra   ensuite les retrouver dans ton polidex</p><br />
    <h2>Formidable ! Et c'est quoi le but ?</h2><br />
    <p>Pose pas de questions et catch 'em all !</p>
    </div>
    );
}



export default Home;
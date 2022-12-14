import { CustomFooter } from "../components/Footer";
import Menu from "../components/Menu";
import PrintAdmin from "../components/PrintAdmin";


function Admin(props){
    return <><div>
        <Menu />
        <h1>Admin Pannel</h1>
        <PrintAdmin/>
    </div>
    <CustomFooter />
    </>
};

export default Admin;
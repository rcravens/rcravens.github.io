import Layout from "./Layout";
import app_data from "./app_data";

function App() {

    const data = app_data();

    return (
        <Layout data={data}/>
    );
}

export default App;

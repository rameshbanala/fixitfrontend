import { Component } from "react";
import WorkerNavbar from "../WorkerNavbar";
import Footer from "../Footer";

//api status should be initialized and api status should be sent to navbar

class WorkerProfile extends Component{
    render() {
        return (
            <>
                <WorkerNavbar />
                <Footer />
            </>
        )
    }
}

export default WorkerProfile
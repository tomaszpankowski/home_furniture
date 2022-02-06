import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import LivingroomS1 from "../components/livingroom-s1";
import LivingroomS2 from "../components/livingroom-s2";
import LivingroomS3 from "../components/livingroom-s3";

class Livingroom extends Component{
    render(){
        return(        
            <Container fluid className="minh-footer-adj p-0">
                <LivingroomS1/>
                <LivingroomS2/>
                <LivingroomS3/>
            </Container>    
        );
    }
}

export default Livingroom;
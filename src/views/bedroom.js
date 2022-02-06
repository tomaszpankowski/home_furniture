import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import BedroomS1 from "../components/bedroom-s1";
import BedroomS2 from "../components/bedroom-s2";
import BedroomS3 from "../components/bedroom-s3";

class Bedroom extends Component{
    render(){
        return(        
            <Container fluid className="minh-footer-adj p-0">
                <BedroomS1/>
                <BedroomS2/>
                <BedroomS3/>
            </Container>    
        );
    }
}

export default Bedroom;
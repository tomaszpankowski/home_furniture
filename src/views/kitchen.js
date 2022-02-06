import React,{Component} from "react";
import Container from "../../node_modules/react-bootstrap/Container";
import KitchenS1 from "../components/kitchen-s1";
import KitchenS2 from "../components/kitchen-s2";
import KitchenS3 from "../components/kitchen-s3";

class Kitchen extends Component{
    render(){
        return(        
            <Container fluid className="minh-footer-adj p-0">
                <KitchenS1/>
                <KitchenS2/>
                <KitchenS3/>
            </Container>    
        );
    }
}

export default Kitchen;
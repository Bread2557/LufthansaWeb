import React from 'react'
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import {Sidebar} from "./components/Sidebar";


interface HomeProps {
    att1: string | undefined
}

const Home: React.FC<HomeProps> = props => {

    return (
        <>
            <Sidebar/>
            <div style={{width: "100vh", height: "100vh", display: "block", padding: "2vh"}}>
                <Button variant={"primary"}>
                    asd
                </Button>
                <br/>
                <Dropdown>
                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Dropdown Button
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>

        </>
    )

}

export default Home;
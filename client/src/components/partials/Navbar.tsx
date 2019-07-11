import * as React from "react";
import { NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export interface Props {
    toggleSidebar: any;
}

class Navbar extends React.Component<Props, {}> {
    render() {
        const { toggleSidebar } = this.props;
        
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
                <div className="container-fluid">
                    <button 
                        type="button" 
                        id="sidebarCollapse" 
                        className="btn"
                        onClick={toggleSidebar}
                    >
                        <i className="fas fa-bars"></i>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto">
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;
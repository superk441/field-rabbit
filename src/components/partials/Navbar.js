import React from "react";
import { Link } from 'react-router-dom';

class Navbar extends React.Component {
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

                </div>
            </nav>
        );
    }
}

export default Navbar;
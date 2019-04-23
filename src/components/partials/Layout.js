import React from "react";
import { connect } from 'react-redux';
import { toggleSidebar } from '../../actions/layoutActions';

// components
import Navbar from './Navbar';
import Sidebar from "./Sidebar";


class Layout extends React.Component {
    constructor(props) {
        super(props);

        this.toggleSidebar = this.toggleSidebar.bind(this);
    }

    toggleSidebar() {
        const { active } = this.props.sidebar;
        const { toggleSidebar } = this.props;
        
        // call action
        toggleSidebar(active);
    }

    render() {
        const { active } = this.props.sidebar;

        return (
            <div className="wrapper">
                <Sidebar
                    active={active}
                />
                <div className="bg-light" id="content" style={{width: active ? 'calc(100% - 80px)' : 'calc(100% - 220px)'}}>
                    <Navbar
                        toggleSidebar={this.toggleSidebar}
                    />
                    <div className="container-fluid">
                        { this.props.children }
                    </div>
                </div>

            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    sidebar: state.layout.sidebar
});

const mapActionsToProps = { toggleSidebar };

export default connect(mapStateToProps, mapActionsToProps)(Layout);
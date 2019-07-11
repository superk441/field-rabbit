import * as React from "react";
import { connect } from 'react-redux';
import { toggleSidebar } from '../../actions/layoutActions';

// components
import Navbar from './Navbar';
import Sidebar from "./Sidebar";

export interface Props {
    section: string;
    sidebar: { active: boolean };
    toggleSidebar: any;
}

class Layout extends React.Component<Props, {}> {
    constructor(props: any) {
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
        const { section } = this.props;

        return (
            <div className="wrapper">
                <Sidebar
                    active={active}
                    section={section}
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

const mapStateToProps = (state: any) => ({
    sidebar: state.layout.sidebar,
});

const mapActionsToProps = { toggleSidebar };

export default connect(mapStateToProps, mapActionsToProps)(Layout);
import * as React from "react";
import { Link } from 'react-router-dom';

export interface Props {
    active?: boolean;
    section: string;
}

class Sidebar extends React.Component<Props, {}> {
    render() {
        const { active, section } = this.props;

        return (
            <div className={active ? 'active' : null} id="sidebar">
                <ul>
                    <li className={section == 'overview' ? 'active' : null}>
                        <Link className="sidebar-item" to="/" data-toggle="tooltip" data-placement="right" title="Overview">
                            <i className="fas fa-globe-americas"></i>
                            <span>Overview</span>
                        </Link>
                    </li>
                    <li className={section == 'customers' ? 'active' : null}>
                        <Link className="sidebar-item" to="/customers">
                            <i className="fas fa-user-friends"></i>
                            <span>Customers</span>
                        </Link>
                    </li>
                    <li>
                        <Link className="sidebar-item" to="/inspections">
                            <i className="fas fa-file-signature"></i>
                            <span>Inspections</span>
                        </Link>
                    </li>
                    <li className={section == 'work-orders' ? 'active' : null}>
                        <Link className="sidebar-item" to="/work-orders">
                            <i className="fas fa-wrench"></i>
                            <span>Work Orders</span>
                        </Link>
                    </li>
                    <li>
                        <Link className="sidebar-item" to="/invoices">
                            <i className="fas fa-file-alt"></i>
                            <span>Invoices</span>
                        </Link>
                    </li>
                    <li>
                        <Link className="sidebar-item" to="/inventory">
                            <i className="fas fa-box"></i>
                            <span>Parts Inventory</span>
                        </Link>
                    </li>
                    <li>
                        <Link className="sidebar-item" to="/users">
                            <i className="fas fa-users-cog"></i>
                            <span>Users</span>
                        </Link>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Sidebar;
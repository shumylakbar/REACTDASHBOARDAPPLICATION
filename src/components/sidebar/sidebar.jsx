import "./sidebar.css"
import { LineStyle, Timeline, TrendingUp, PeopleAlt, AddShoppingCart, Receipt, Assessment, Report, BorderColor

    ,Mail, Feedback, Forum} from "@material-ui/icons"
import RoomIcon from '@material-ui/icons/Room';
import StorageIcon from '@material-ui/icons/Storage';
import HomeIcon from '@material-ui/icons/Home';
import {Link} from "react-router-dom";    

export default function sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
               <div className="sidebarMenu">
                   <h3 className="sidebarTitle">Dashboard</h3>
                   <ul className="sidebarList">
                       <li className="sidebarListItem active">
                         <HomeIcon className="sidebarIcons" />
                         <Link to="/">
                         Home
                         </Link>
                       </li>
                       <li className="sidebarListItem">
                         <Timeline className="sidebarIcons" />
                         <Link to="/users">
                         Analytics
                         </Link>
                       </li>
                       <li className="sidebarListItem">
                         <RoomIcon className="sidebarIcons" />
                         <Link to="map2">
                         Maps
                         </Link>
                       </li>
                       <li className="sidebarListItem">
                         <StorageIcon className="sidebarIcons" />
                         <Link to="/datalog2">
                         Datalog
                         </Link>
                       </li>
                   </ul>
               </div>
               <div className="sidebarMenu">
                   <h3 className="sidebarTitle">Quick Menu</h3>
                   <ul className="sidebarList">
                       <li className="sidebarListItem">
                         <PeopleAlt className="sidebarIcons" />
                         Users
                       </li>
                       <li className="sidebarListItem">
                         <AddShoppingCart className="sidebarIcons" />
                         Products
                       </li>
                       <li className="sidebarListItem">
                         <Receipt className="sidebarIcons" />
                         Transcations
                       </li>
                       <li className="sidebarListItem">
                         <Assessment className="sidebarIcons" />
                         Reports
                       </li>
                   </ul>
               </div>
               <div className="sidebarMenu">
                   <h3 className="sidebarTitle">Notifications</h3>
                   <ul className="sidebarList">
                       <li className="sidebarListItem">
                         <Mail className="sidebarIcons" />
                         Mail
                       </li>
                       <li className="sidebarListItem">
                         <Feedback className="sidebarIcons" />
                         Feedback
                       </li>
                       <li className="sidebarListItem">
                         <Forum className="sidebarIcons" />
                         Messages
                       </li>
                   </ul>
               </div>
            </div>
        </div>
    );
}

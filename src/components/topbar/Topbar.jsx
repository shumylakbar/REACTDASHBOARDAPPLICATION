import React from 'react'
import "./topbar.css"
import {NotificationsNone, Language, Settings} from "@material-ui/icons";

export default function Topbar() {
    return (
        <div className="topbar">
             <div className="topbarWrapper">
                 <div className="topLeft">
                     <span className="logo">Lets Innovate</span>
                 </div> 
                 <div>
                 <img src="https://media-exp1.licdn.com/dms/image/C4D0BAQGxaBKf7ov_Mw/company-logo_200_200/0/1519912196409?e=2159024400&v=beta&t=DplDPkpAzWgBRY5rGyixOhDBRRnYAAm2RDHoIQdi6Fg" alt="" className="topAvatar2" />
                 </div>   
                 <div className="topRight">
                     <div className="topbarIconContainer">
                         <NotificationsNone/>
                         <span className="topIconBadge">2</span>
                     </div>
                     <div className="topbarIconContainer">
                         <Language/>
                         <span className="topIconBadge">2</span>
                     </div>
                     <div className="topbarIconContainer">
                         <Settings/>
                     </div>
                     <img src="https://media-exp1.licdn.com/dms/image/C4D0BAQGxaBKf7ov_Mw/company-logo_200_200/0/1519912196409?e=2159024400&v=beta&t=DplDPkpAzWgBRY5rGyixOhDBRRnYAAm2RDHoIQdi6Fg" alt="" className="topAvatar" />
                 </div>
             </div>
        </div>
    )
}

import "./featuredinfo.css"
import { ArrowDownward, ArrowUpward } from "@material-ui/icons"
import Brightness6Icon from '@material-ui/icons/Brightness6'
import CloudIcon from '@material-ui/icons/Cloud';
import fire from '../../fire';
{/* <span id="temp" className="featuredtime">Time: {currTime}</span>  */}
{/* <span id="temp" className="featuredtime">Date: {currDate}</span> */}
export default function featuredinfo() {
    const currDate =  new Date().toLocaleDateString();
    const currTime =  new Date().toLocaleTimeString();
    return (
        <div className="featured">
          <div className="featuredItem">
              <span className="featuredTitle">Temperature</span>
              <div className="featuredMoneyContainer">
                  <span id="temp" className="featuredMoney">Temperature</span> 
                  
              </div>
              <span><CloudIcon className="featuredIconcloud"/></span>
          </div>
          <div className="featuredItem">
              <span className="featuredTitle">Humidity</span>
              <div className="featuredMoneyContainer">
                  <span id = "temp2"className="featuredMoney">Humidity</span>
                
              </div>
              <span><Brightness6Icon className="featuredIconsun"/></span>
          </div>
          <div className="featuredItem">
              <span className="featuredTitleTime">{currTime}</span>
              <div className="featuredMoneyContainer">
                  <span id="temp" className="featuredMoneyDate">{currDate}</span> 
                  
              </div>
             
          </div>  
           
        </div>
    );
}

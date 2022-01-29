import Featuredinfo from "../../components/featuredinfo/featuredinfo"
import "./home.css"
import Chart1 from "../../components/chart/chart1";
import ApexChart2 from "../../components/chart/chart2";
import PopChart2 from "../../components/chart/chart4";
import SimpleMap from "../../components/map/map";
import { MapContainer } from "../../components/map/map2";

export default function home() {
    return (
        <div className="test">
           <div className="featuredinfo">
           <Featuredinfo />
           </div>
           <div className="Chart1">
           <PopChart2/>
           </div>
           <div className="Chart2">
           <Chart1/>
           </div>
           <div className="Chart3">
           <ApexChart2/>
           </div>
           <div className="map">
               <SimpleMap/>
           </div>
        </div>
    );
}

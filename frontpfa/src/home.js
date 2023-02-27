import Navbar from "./navbar";
import './Home.css';
function Home(){
    return( 
        <div className="Home">
    <Navbar></Navbar>
    <div class="sidebar">
            <ul>
                <li className="container"><a href="#">
                    <i class="fa fa-desktop" aria-hidden="true"></i></a>
                    <div className="details">
                    <i class="fa fa-television VM" aria-hidden="true"></i>
                    <div class="row align-items-start ligne1">
    <div class="col ">
    VM-Name: VM1
    </div>
    <div class="col">
    Status: online
    </div>
  </div> 
  <br></br>
  <div class="row align-items-start ligne2">
    <div class="col ">
    Usage-time: 3hrs 
    </div>
    <div class="col">
    Image: windows
    </div>
  </div>
                    </div>
                    </li>

            </ul>
        </div>
    
        <div className="CPU">           
            <p className="OCU"> CPU usage
            </p>
        </div>
        <div className="consommation">           
            <p className="OCO"> Application Map
            </p>
        </div>
        <div className="networking">           
            <p className="ONU">  Network Usage
            </p>
        </div>
        </div>
    )
}
export default Home;
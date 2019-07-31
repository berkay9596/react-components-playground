import React, { Component } from 'react';
import './Main.css';
import addonData from '../data/addonData';
import Addon1 from "./Addon1";
import Addon2 from "./Addon2";
import Addon3 from "./Addon3";
import Addon4 from "./Addon4";
import Addon5 from "./Addon5";
import Addon6 from "./Addon6";
import Addon7 from "./Addon7";
import Addon8 from "./Addon8";
import Addon9 from "./Addon9";
import Addon10 from "./Addon10";
import Addon11 from "./Addon11";
import Addon12 from "./Addon12";
import Addon13 from "./Addon13";
import Addon14 from "./Addon14";
import Addon15 from "./Addon15";
import Addon16 from "./Addon16";
import Addon17 from "./Addon17";
import Addon18 from "./Addon18";
import Addon19 from "./Addon19";
import Addon20 from "./Addon20";
import Addon21 from "./Addon21";
import Addon22 from "./Addon22";
import Addon23 from "./Addon23";
import Addon24 from "./Addon24";
import Addon25 from "./Addon25";
import Addon26 from "./Addon26";
import Addon27 from "./Addon27";
import Addon28 from "./Addon28";
import Addon29 from "./Addon29";
import Addon30 from "./Addon30";
import Addon31 from "./Addon31";
import Addon32 from "./Addon32";
import Addon33 from "./Addon33";
import Addon34 from "./Addon34";
import Addon35 from "./Addon35";
import Addon36 from "./Addon36";
import Addon37 from "./Addon37";
import Addon38 from "./Addon38";
import Addon39 from "./Addon39";

class Main extends Component {

    state = {
      selectedAddonId: undefined
    };

    handleAddonSelect = (addonInfoId) => {
        this.setState({selectedAddonId: addonInfoId});
    };

    render() {

        let addonComponentsMap = addonData.map((addonInfo, addonIndex) => {
            return (
                <tr key={addonIndex} >
                    <td><button onClick={() => this.handleAddonSelect(addonInfo.id)} >Seç</button></td>
                    <td>{addonInfo.isim}</td>
                    <td>{addonInfo.url}</td>
                </tr>
            );
        });

        let addonListTable =  (
            <table className="AddonTable" >
                <thead>
                    <tr>
                        <th>Seç</th>
                        <th>İsim</th>
                        <th>Link</th>
                    </tr>
                </thead>
                <tbody>
                    {addonComponentsMap}
                </tbody>
            </table>
        );

        let addonListOrSelectedAddon = null;
        if(this.state.selectedAddonId){
            if(this.state.selectedAddonId === 1){
                addonListOrSelectedAddon = <Addon1></Addon1>;
            }
            else if(this.state.selectedAddonId === 2){
                addonListOrSelectedAddon = <Addon2></Addon2>;
            }
            else if(this.state.selectedAddonId === 3){
                addonListOrSelectedAddon = <Addon3></Addon3>;
            }
            else if(this.state.selectedAddonId === 4){
                addonListOrSelectedAddon = <Addon4></Addon4>;
            }
            else if(this.state.selectedAddonId === 5){
                addonListOrSelectedAddon = <Addon5></Addon5>;
            }
            else if(this.state.selectedAddonId === 6){
                addonListOrSelectedAddon = <Addon6></Addon6>;
            }
            else if(this.state.selectedAddonId === 7){
                addonListOrSelectedAddon = <Addon7></Addon7>;
            }
            else if(this.state.selectedAddonId === 8){
                addonListOrSelectedAddon = <Addon8></Addon8>;
            }
            else if(this.state.selectedAddonId === 9){
                addonListOrSelectedAddon = <Addon9></Addon9>;
            }
            else if(this.state.selectedAddonId === 10){
                addonListOrSelectedAddon = <Addon10></Addon10>;
            }
            else if(this.state.selectedAddonId === 11){
                addonListOrSelectedAddon = <Addon11></Addon11>;
            }
            else if(this.state.selectedAddonId === 12){
                addonListOrSelectedAddon = <Addon12></Addon12>;
            }
            else if(this.state.selectedAddonId === 13){
                addonListOrSelectedAddon = <Addon13></Addon13>;
            }
            else if(this.state.selectedAddonId === 14){
                addonListOrSelectedAddon = <Addon14></Addon14>;
            }
            else if(this.state.selectedAddonId === 15){
                addonListOrSelectedAddon = <Addon15></Addon15>;
            }
            else if(this.state.selectedAddonId === 16){
                addonListOrSelectedAddon = <Addon16></Addon16>;
            }
            else if(this.state.selectedAddonId === 17){
                addonListOrSelectedAddon = <Addon17></Addon17>;
            }
            else if(this.state.selectedAddonId === 18){
                addonListOrSelectedAddon = <Addon18></Addon18>;
            }
            else if(this.state.selectedAddonId === 19){
                addonListOrSelectedAddon = <Addon19></Addon19>;
            }
            else if(this.state.selectedAddonId === 20){
                addonListOrSelectedAddon = <Addon20></Addon20>;
            }
            else if(this.state.selectedAddonId === 21){
                addonListOrSelectedAddon = <Addon21></Addon21>;
            }
            else if(this.state.selectedAddonId === 22){
                addonListOrSelectedAddon = <Addon22></Addon22>;
            }
            else if(this.state.selectedAddonId === 23){
                addonListOrSelectedAddon = <Addon23></Addon23>;
            }
            else if(this.state.selectedAddonId === 24){
                addonListOrSelectedAddon = <Addon24></Addon24>;
            }
            else if(this.state.selectedAddonId === 25){
                addonListOrSelectedAddon = <Addon25></Addon25>;
            }
            else if(this.state.selectedAddonId === 26){
                addonListOrSelectedAddon = <Addon26></Addon26>;
            }
            else if(this.state.selectedAddonId === 27){
                addonListOrSelectedAddon = <Addon27></Addon27>;
            }
            else if(this.state.selectedAddonId === 28){
                addonListOrSelectedAddon = <Addon28></Addon28>;
            }
            else if(this.state.selectedAddonId === 29){
                addonListOrSelectedAddon = <Addon29></Addon29>;
            }
            else if(this.state.selectedAddonId === 30){
                addonListOrSelectedAddon = <Addon30></Addon30>;
            }
            else if(this.state.selectedAddonId === 31){
                addonListOrSelectedAddon = <Addon31></Addon31>;
            }
            else if(this.state.selectedAddonId === 32){
                addonListOrSelectedAddon = <Addon32></Addon32>;
            }
            else if(this.state.selectedAddonId === 33){
                addonListOrSelectedAddon = <Addon33></Addon33>;
            }
            else if(this.state.selectedAddonId === 34){
                addonListOrSelectedAddon = <Addon34></Addon34>;
            }
            else if(this.state.selectedAddonId === 35){
                addonListOrSelectedAddon = <Addon35></Addon35>;
            }
            else if(this.state.selectedAddonId === 36){
                addonListOrSelectedAddon = <Addon36></Addon36>;
            }
            else if(this.state.selectedAddonId === 37){
                addonListOrSelectedAddon = <Addon37></Addon37>;
            }
            else if(this.state.selectedAddonId === 38){
                addonListOrSelectedAddon = <Addon38></Addon38>;
            }
            else if(this.state.selectedAddonId === 39){
                addonListOrSelectedAddon = <Addon39></Addon39>;
            }
        }
        else{
            addonListOrSelectedAddon = (
                <div>
                    <h2>Addon List</h2>
                    {addonListTable}
                </div>
            );
        }

        return (
            <div>
                {addonListOrSelectedAddon}
            </div>
        );
    }
}

export default Main;
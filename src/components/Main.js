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
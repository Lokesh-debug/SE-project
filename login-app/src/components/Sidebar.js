import React from "react";
import {Sidebardata} from './Sidebardata';
import "../Style.css";

function Sidebar() {
    return (
    <div className="sidebar" >
      <ul className="sidebarlist">
         {Sidebardata.map((val,key)=> {
            return (
            <li
             key={key}
             className="row"
             id={window.location.pathname == val.link ? "active": "passive" }
             onClick={()=> {
              window.location.pathname = val.link;
             }}
            >
             <div id="icon">{val.icon}</div> <div id="title">{val.title}</div>
            </li>
            );
         })}
      </ul>
    </div> 
    );
}
export default Sidebar;
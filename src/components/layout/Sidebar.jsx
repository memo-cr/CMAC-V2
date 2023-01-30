import React from "react";

import { Link } from "react-router-dom";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
  CDBSidebarFooter,
} from "cdbreact";

function Sidebar(props) {
  return (
    <div>
      <CDBSidebar style={{ height: "100vh", position: "fixed" }}>
        <CDBSidebarHeader prefix={<i className="fa fa-bars" />}>
          CMAC
        </CDBSidebarHeader>
        <CDBSidebarContent>
          <CDBSidebarMenu>
            <Link to="/">
              <CDBSidebarMenuItem icon="home">Home</CDBSidebarMenuItem>
            </Link>
          </CDBSidebarMenu>
          <CDBSidebarMenu>
            <Link to="/all-user">
              <CDBSidebarMenuItem icon="user" iconType="solid">
                All Users
              </CDBSidebarMenuItem>
            </Link>
            <Link to="/add-user">
              <CDBSidebarMenuItem icon="plus">Add Users</CDBSidebarMenuItem>
            </Link>
          </CDBSidebarMenu>
          <CDBSidebarMenu>
            <Link to="/all-machines">
              <CDBSidebarMenuItem icon="robot">All machines</CDBSidebarMenuItem>
            </Link>
            <Link to="/add-machine">
              <CDBSidebarMenuItem icon="plus">Add Machines</CDBSidebarMenuItem>
            </Link>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: "center" }}>
          <CDBSidebarMenuItem icon="moon">Switch mode</CDBSidebarMenuItem>
        </CDBSidebarFooter>
      </CDBSidebar>
      {props.children}
    </div>
  );
}

export default Sidebar;

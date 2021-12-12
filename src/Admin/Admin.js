import React from "react";
import { Layout, Progress } from "antd";

import SideBar from "../SideBar/SideBar";
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
  import {data}from './data_test'
const { Content } = Layout;

function Admin() {
  return (
    <div>
      <Layout style={{ minHeight: "100vh" }}>
        <SideBar />
        <Layout className="site-layout">
          <Content style={{ margin: "0 16px" }}>
            <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            >
              {/* <Progress type="circle" percent={75} />
              <Progress type="circle" percent={70} status="exception" />
              <Progress type="circle" percent={100} /> */}
                         {/* <ResponsiveContainer width="20%" height="20%"> */}
        <BarChart
          width={1500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="city" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="center_capacity" fill="#8884d8" />
          <Bar dataKey="number_vaccine" fill="#82ca9d" />
        </BarChart>
      {/* </ResponsiveContainer> */}
            </div>

            {/* <div
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360, marginTop:12 }}
            >

            
            </div> */}
 
          </Content>
        </Layout>{" "}
      </Layout>
    </div>
  );
}

export default Admin;

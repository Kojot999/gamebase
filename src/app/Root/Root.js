import React from "react";
import { Layout } from "../components/Layout/Layout";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { Header } from "../components/Header/Header";
import { Content } from "../components/Content/Content";
import { Panel } from "../components/Panel/Panel";
import "./Root.css";

function Root() {
  return (
    <Layout>
      <Sidebar />
      <main>
        <Header />
        <>
          <Panel />
          <Content />
        </>
      </main>
    </Layout>
  );
}

export default Root;

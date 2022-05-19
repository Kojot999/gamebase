import React from "react";
import { Layout } from "../components/Layout/Layout";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { Header } from "../components/Header/Header";
import { Panel } from "../components/Panel/Panel";
import "./Root.css";
import { Route, Routes } from "react-router";
import { ROUTES } from "../constants/routes";

function Root() {
  return (
    <Layout>
      <Sidebar />
      <main>
        <Header />
        <>
          <Panel />
          <Routes>
            {ROUTES.map(({ path, name, component: View }) => (
              <Route path={path} key={name} element={<View />}></Route>
            ))}
          </Routes>
        </>
      </main>
    </Layout>
  );
}

export default Root;

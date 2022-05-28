import React from "react";
import { Layout } from "../components/Layout/Layout";
import { Sidebar } from "../components/Sidebar/Sidebar";
import { Header } from "../components/Header/Header";
import "./Root.css";
import { Route, Routes } from "react-router";
import { ROUTES } from "../constants/routes";
import { useGamesData, useStoresData } from "../hooks";

function Root() {
  const games = useGamesData();
  const stores = useStoresData();

  const store = {
    games,
    stores,
  };

  return (
    <Layout>
      <Sidebar store={store} />
      <main>
        <Header />
        <>
          <Routes>
            {ROUTES.map(({ path, name, component: View }) => (
              <Route
                path={path}
                key={name}
                element={<View store={store} />}
              ></Route>
            ))}
          </Routes>
        </>
      </main>
    </Layout>
  );
}

export default Root;

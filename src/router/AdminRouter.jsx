import React from "react";
import { Routes, Route } from "react-router-dom";
import { AdminLayout } from "../layouts";
import { Auth } from "../pages/admin";
import { addMethod } from "yup";
import { Home } from "../pages/web";

export function AdminRouter() {
  const loadLayout = (Layout, Page) => {
    return (
      <Layout>
        <Page />
      </Layout>
    );
  };
  return (
    <Routes>
      <Route path="/admin/*" element={loadLayout(AdminLayout, Auth)} />
    </Routes>
  );
}

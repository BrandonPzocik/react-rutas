import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage, LoginPage, DashboardPage, NotFoundPage } from "./pages";
import React from "react";
import { Suspense } from "react";
import { PrivateRoute } from "./components/PrivateRoute";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />

          <Route element={<PrivateRoute />}>
            <Route path="/dashboard" element={<DashboardPage />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

import { useState } from "react";
import {
  HomePage,
  LoginPage,
  SignUpPage,
  NotificationPage,
  ProfilePage,
} from "./pages";
import { Routes, Route } from "react-router-dom";
import { Sidebar, RightPanel } from "./components";
function App() {
  return (
    <div className="flex max-w-6xl mx-auto">
      <Sidebar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/notifications" element={<NotificationPage />} />
        <Route path="/profile/:username" element={<ProfilePage />} />
      </Routes>
      <RightPanel />
    </div>
  );
}

export default App;

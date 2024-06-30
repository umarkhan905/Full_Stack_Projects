import { useState } from "react";
import {
  HomePage,
  LoginPage,
  SignUpPage,
  NotificationPage,
  ProfilePage,
} from "./pages";
import { Routes, Route, Navigate } from "react-router-dom";
import { Sidebar, RightPanel, LoadingSpinner } from "./components";
import { Toaster } from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
function App() {
  const { data: authUser, isLoading } = useQuery({
    queryKey: ["authUser"],
    queryFn: async () => {
      try {
        const res = await fetch("/api/auth");
        const data = await res.json();
        if (!res.ok) {
          // throw new Error(data.error || "Failed to fetch user");
          return null;
        }
        console.log(data);
        return data;
      } catch (error) {
        throw error;
      }
    },
    retry: false,
  });
  if (isLoading) {
    return (
      <div className="h-screen flex justify-center items-center">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  return (
    <div className="flex max-w-6xl mx-auto">
      {authUser && <Sidebar />}
      <Routes>
        <Route
          path="/"
          element={authUser ? <HomePage /> : <Navigate to={"/login"} />}
        />
        <Route
          path="/signup"
          element={!authUser ? <SignUpPage /> : <Navigate to={"/"} />}
        />
        <Route
          path="/login"
          element={!authUser ? <LoginPage /> : <Navigate to={"/"} />}
        />
        <Route
          path="/notifications"
          element={authUser ? <NotificationPage /> : <Navigate to={"/login"} />}
        />
        <Route
          path="/profile/:username"
          element={authUser ? <ProfilePage /> : <Navigate to={"/login"} />}
        />
      </Routes>
      {authUser && <RightPanel />}
      <Toaster />
    </div>
  );
}

export default App;

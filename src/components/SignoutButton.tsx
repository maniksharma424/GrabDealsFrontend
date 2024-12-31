"use client";
import React from "react";
const SignoutButton = () => {
  const handleSignout = async () => {
    try {
      const response = await fetch("/api/signout", { method: "GET" });
      if (response.ok) {
        setTimeout(() => {
          window.location.reload();
        }, 500);
      } else {
        console.error("Signout failed");
      }
    } catch (error) {
      console.error("Error during signout:", error);
    }
  };

  return (
    <button
      className=" text-indigo-600 border border-indigo-600  px-4 py-2 rounded-lg"
      onClick={handleSignout}
    >
      Signout
    </button>
  );
};

export default SignoutButton;

import React from "react";
import "./App.css";
export default function Header() {
  return (
    <div className="header">
      <a href="#default" class="logo">
        by Grandeur Vegah
      </a>
      <div className="header-right">
        <a class="active" href="https://github.com/GrandeurVegah/React-Api">
          The Repo
        </a>
      </div>
    </div>
  );
}

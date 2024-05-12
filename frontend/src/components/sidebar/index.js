import React from "react";
import SearchInput from "./searchInput";
import Conversations from "./conversations";
import LogoutButton from "./logoutButton";

export default function Sidebar() {
  return (
    <div className="boder-r border-slate-500 p-4 flex flex-col">
      <SearchInput />
      <div className="divider px-3"></div>
      <Conversations />
      <div className="divider px-3"></div>

      <LogoutButton />
    </div>
  );
}

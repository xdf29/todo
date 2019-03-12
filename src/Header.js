import React from 'react'

export default function Header() {
  return (
    <div>
      <header style={headerStyle} ><b>To Do</b></header>
    </div>
  )
}

const headerStyle = {
    background: "#333",
    color: "#fff",
    textAlign: "center",
    padding: "10px",
    fontSize: "24px"
}
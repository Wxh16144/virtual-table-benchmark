import * as React from "react";
import { Button, Space } from 'antd'
import { Link } from 'react-router-dom'

const containerStyle: React.CSSProperties = {
  height: '100vh',
  width: '100vw',
  overflow: "hidden",
  display: 'flex',
  alignContent: 'center',
  justifyContent: 'center'
}

const childStyle: React.CSSProperties = {
  margin: 'auto'
}

function Index() {
  return (
    <div style={containerStyle}>
      <Space.Compact style={childStyle}>
        <Link to="/antd">
          <Button type="primary">Antd Virtual Table</Button>
        </Link>
        <Link to="/data-grid">
          <Button type="primary" danger>React-Data-Grid</Button>
        </Link>
      </Space.Compact>
    </div>
  )
}

export default Index;

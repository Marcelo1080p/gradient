import { Header } from "antd/es/layout/layout";
import React from "react";

export const HeaderMainLayout: React.FC = () => {
    return(
        <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          background: "#15141b"
        }}
      ></Header>
    )
}
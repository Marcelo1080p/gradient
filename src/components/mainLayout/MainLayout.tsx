import React from "react";
import "./MainLayout.css";
import { Layout, theme } from "antd";
import { HeaderMainLayout } from "./HeaderMainLayout/HeaderMainLayout";

const { Content } = Layout;

interface Props {
  children: React.ReactNode;
  breadcrumb: React.ReactNode;
}

export const MainLayout: React.FC<Props> = (props: Props) => {
  const {
    token: { borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ background: "#1e1c22", minHeight: "100vh" }}>
      <HeaderMainLayout />
      <Content style={{ padding: "20px 48px" }} className="containerLayout">
        <div
          className="containerContent"
          style={{
            padding: 24,
            minHeight: 600,

            borderRadius: borderRadiusLG,
          }}
        >
          {props.children}
        </div>
      </Content>
    </Layout>
  );
};

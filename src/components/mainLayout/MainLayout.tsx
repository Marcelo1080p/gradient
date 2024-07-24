import React from "react";
import { Layout, theme } from "antd";
import { HeaderMainLayout } from "./HeaderMainLayout/HeaderMainLayout";

const { Content,  } = Layout;

interface Props {
  children: React.ReactNode;
  breadcrumb: React.ReactNode;
}

export const MainLayout: React.FC<Props> = (props: Props) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout>
      <HeaderMainLayout />
      <Content style={{ padding: "20px 48px",  }}>
        <div
          style={{
            padding: 24,
            minHeight: 600,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {props.children}
        </div>
      </Content>
    </Layout>
  );
};

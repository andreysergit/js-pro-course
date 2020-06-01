import React from "react";
import { Layout } from "antd";
import { Home } from "./Home";

const { Header, Footer, Sider, Content } = Layout;

export const Menu = () => {
  return (
    <Layout>
      <Header>Header</Header>
      <Layout>
        <Sider>Sider</Sider>
        <Content>
          <Home />
        </Content>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
  );
};

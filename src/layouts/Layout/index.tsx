import Head from "next/head";

import React, { useState } from "react";
import { Breadcrumb, Layout as AntdLayout, Menu, theme } from "antd";
import { SettingOutlined, MessageOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
const { Header, Content, Footer } = AntdLayout;
import Image from "next/image";
import Link from "next/link";

interface LayoutProps {
  children: React.ReactNode;
}

const items: MenuProps["items"] = [
  {
    label: <Link href="/dashboard">Dashboard</Link>,
    key: "Dashboard",
  },
  {
    label: "유지보수 및 기술지원",
    icon: <MessageOutlined />,
    key: "SubMenu",
    children: [
      {
        label: <Link href="/issuesMgt">문의</Link>,
        key: "문의",
      },
    ],
  },
  {
    label: "시스템 관리",
    key: "sysMgt",
    icon: <SettingOutlined />,
    children: [
      {
        label: <Link href="/codeMgt">코드정보</Link>,
        key: "코드정보",
      },
      {
        label: "사용자",
        key: "사용자",
      },
      {
        label: "프로젝트",
        key: "프로젝트",
      },
      {
        label: "설정",
        key: "설정",
      },
    ],
  },
];
import { Button, Space } from "antd";
const Layout: React.FC<LayoutProps> = ({ children }) => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [current, setCurrent] = useState("mail");

  const onClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);
  };

  return (
    <AntdLayout className="layout">
      <Header className="flex flex-row items-center justify-between">
        <Link href="/">
          <Image
            className="min-w-[160px]"
            alt="logo"
            width="160"
            height="160"
            src="/images/logo.png"
          />
        </Link>
        <Menu
          onClick={onClick}
          selectedKeys={[current]}
          mode="horizontal"
          className="w-[60%]"
          items={items}
        />
        <Space>
          <Button>로그인</Button>
          <Button>회원가입</Button>
        </Space>
      </Header>
      <Content style={{ padding: "50px" }}>
        <div className="min-h-[60vh]" style={{ background: colorBgContainer }}>
          {children}
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Ant Design ©2023 Created by Ant UED
      </Footer>
    </AntdLayout>
  );
};
export default Layout;

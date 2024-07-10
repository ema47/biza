import React from "react";
import { Menu, Button } from "antd";
import { HomeOutlined, AppstoreOutlined, AreaChartOutlined, PayCircleOutlined, SettingOutlined, BarsOutlined, MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const MenuList = ({ darkTheme, collapsed, toggleCollapse }) => {
  const navigate = useNavigate();

  return (
    <>
      
      <Menu
        theme={darkTheme ? 'dark' : 'light'}
        mode="inline"
        className="menu-bar"
        inlineCollapsed={collapsed}
      >
        <Menu.Item
        type="text"
        onClick={toggleCollapse}
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        style={{ marginBottom: 20 }}
      />
        <Menu.Item key="home" icon={<HomeOutlined />} onClick={() => navigate("/")}>
          Home
        </Menu.Item>
        <Menu.Item key="activity" icon={<AppstoreOutlined />} onClick={() => navigate("/activity")}>
          Activity
        </Menu.Item>
        <Menu.SubMenu key="tasks" icon={<BarsOutlined />} title="Tasks">
          <Menu.Item key="task-1">Task 1</Menu.Item>
          <Menu.Item key="task-2">Task 2</Menu.Item>
          <Menu.SubMenu key="subtasks" title="WIN LIMA">
            <Menu.Item key="subtask-1" onClick={() => navigate("/subtask-1")}>DÚO WIN</Menu.Item>
            <Menu.Item key="subtask-2" onClick={() => navigate("/subtask-2")}>TRÍO WIN</Menu.Item>
            <Menu.Item key="subtask-3" onClick={() => navigate("/subtask-3")}>PLAN GAMER</Menu.Item>
            <Menu.Item key="subtask-4" onClick={() => navigate("/subtask-4")}>RUC 20 Y VERISURE</Menu.Item>

          </Menu.SubMenu>
        </Menu.SubMenu>
        <Menu.Item key="progress" icon={<AreaChartOutlined />} onClick={() => navigate("/progress")}>
          Progress
        </Menu.Item>
        <Menu.Item key="payment" icon={<PayCircleOutlined />} onClick={() => navigate("/payment")}>
          Payment
        </Menu.Item>
        <Menu.Item key="setting" icon={<SettingOutlined />} onClick={() => navigate("/setting")}>
          Setting
        </Menu.Item>
      </Menu>
    </>
  );
};

export default MenuList;

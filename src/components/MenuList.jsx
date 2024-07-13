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
        <Menu.SubMenu key="tasks" icon={<img src="/assets/WIN.png" alt="WIN" style={{ width: '29px' }} />}title="WIN LIMA">     
            <Menu.Item key="subtask-0" onClick={() => navigate("/subtask-0")}>MONO WIN</Menu.Item>
            <Menu.Item key="subtask-1" onClick={() => navigate("/subtask-1")}>DÚO WIN</Menu.Item>
            <Menu.Item key="subtask-2" onClick={() => navigate("/subtask-2")}>TRÍO WIN</Menu.Item>
            <Menu.Item key="subtask-3" onClick={() => navigate("/subtask-3")}>PLAN GAMER</Menu.Item>
            <Menu.Item key="subtask-4" onClick={() => navigate("/subtask-4")}>RUC20/VERISU</Menu.Item>          
        </Menu.SubMenu>
        <Menu.SubMenu key="tasks2" icon={<img src="/assets/MOVISTAR.png" alt="WIN" style={{ width: '29px' }}/>} title="MOVISTAR">     
            <Menu.Item key="subtask-0" onClick={() => navigate("/subtask-0")}>MONO WIN</Menu.Item>
            <Menu.Item key="subtask-1" onClick={() => navigate("/subtask-1")}>DÚO WIN</Menu.Item>
            <Menu.Item key="subtask-2" onClick={() => navigate("/subtask-2")}>TRÍO WIN</Menu.Item>
            <Menu.Item key="subtask-3" onClick={() => navigate("/subtask-3")}>PLAN GAMER</Menu.Item>
            <Menu.Item key="subtask-4" onClick={() => navigate("/subtask-4")}>RUC 20 Y VERISURE</Menu.Item>          
        </Menu.SubMenu>
        <Menu.SubMenu key="tasks3" icon={<img src="/assets/CLARO.png" alt="WIN" style={{ width: '29px' }}/>} title="CLARO">     
            <Menu.Item key="subtask-0" onClick={() => navigate("/subtask-0")}>MONO WIN</Menu.Item>
            <Menu.Item key="subtask-1" onClick={() => navigate("/subtask-1")}>DÚO WIN</Menu.Item>
            <Menu.Item key="subtask-2" onClick={() => navigate("/subtask-2")}>TRÍO WIN</Menu.Item>
            <Menu.Item key="subtask-3" onClick={() => navigate("/subtask-3")}>PLAN GAMER</Menu.Item>
            <Menu.Item key="subtask-4" onClick={() => navigate("/subtask-4")}>RUC 20 Y VERISURE</Menu.Item>          
        </Menu.SubMenu>
        <Menu.SubMenu key="tasks4" icon={<img src="/assets/NUBYX.png" alt="WIN" style={{ width: '29px' }}/>}title="NUBYX">     
            <Menu.Item key="subtask-0" onClick={() => navigate("/subtask-0")}>MONO WIN</Menu.Item>
            <Menu.Item key="subtask-1" onClick={() => navigate("/subtask-1")}>DÚO WIN</Menu.Item>
            <Menu.Item key="subtask-2" onClick={() => navigate("/subtask-2")}>TRÍO WIN</Menu.Item>
            <Menu.Item key="subtask-3" onClick={() => navigate("/subtask-3")}>PLAN GAMER</Menu.Item>
            <Menu.Item key="subtask-4" onClick={() => navigate("/subtask-4")}>RUC 20 Y VERISURE</Menu.Item>          
        </Menu.SubMenu>

      </Menu>
    </>
  );
};

export default MenuList;

import { useState } from 'react';
import { Layout, theme } from 'antd';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Logo from './components/Logo';
// import Home from './pages/Home'; 
import MenuList from './components/MenuList';
import ToggleThemeButton from './components/ToggleThemeButton';
import Subtask1 from './pages/Subtask1';  // Asegúrate de que la ruta sea correcta
import Subtask2 from './pages/Subtask2';  // Asegúrate de que la ruta sea correcta
import Subtask3 from './pages/Subtask3';  // Asegúrate de que la ruta sea correcta
import Subtask4 from './pages/Subtask4';  // Asegúrate de que la ruta sea correcta

const { Header, Sider, Content } = Layout;

function App() {
  const [darkTheme, setDarkTheme] = useState(true);
  const [collapsed, setCollapsed] = useState(false);

  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Router>
      <Layout>
        <Sider
          collapsible
          collapsed={collapsed}
          trigger={null}
          theme={darkTheme ? 'dark' : 'light'}
          className="sidebar"
        >
          <Logo />
          <MenuList darkTheme={darkTheme} collapsed={collapsed} toggleCollapse={toggleCollapse} />
          <ToggleThemeButton darkTheme={darkTheme} toggleTheme={toggleTheme} />
        </Sider>
        <Layout>
          <Header style={{ padding: '0 16px', background: colorBgContainer, height: 2, lineHeight: 'px' }} />
          <Content style={{ margin: 'px px ', overflow: 'initial' }}>
            <div style={{ padding: 1, background: colorBgContainer }}>
              <Routes>
                <Route path="/" element={<div>Home</div>} /> {/* Ruta de ejemplo para la página de inicio */}
                <Route path="/subtask-1" element={<Subtask1 />} />
                <Route path="/subtask-2" element={<Subtask2 />} />
                <Route path="/subtask-3" element={<Subtask3 />} />
                <Route path="/subtask-4" element={<Subtask4 />} />
                {/* Agrega más rutas aquí según sea necesario */}
              </Routes>
            </div>
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
}

export default App;

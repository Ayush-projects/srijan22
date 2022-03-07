import React, { useState } from 'react';
import { Link, Switch as RouteSwitch, Route } from 'react-router-dom';
import { Layout, Dropdown, Menu, Drawer, Icon } from 'antd';
import { routes } from '../routes';
import Particles from 'react-particles-js';
import EventDisplay from '../components/EventDisplay/EventDisplay';
import Mementos from '../components/Mementos/Mementos';
import srijanLogoWhite from '../assets/Images/srijan_logo_white.png';
import srijanLogoBlack from '../assets/Images/srijan_logo_black.png';
import './AppLayout.css';
const { Header, Footer, Sider, Content } = Layout;

const AppLayout = props => {
  const { username, handleSignOut } = props;
  const [drawerVisible, setDrawerVisible] = useState(false);
  const onDrawerClose = () => setDrawerVisible(false);

  const dropdownMenu = (
    <Menu className="nav-dropdown-menu">
      <Menu.Item key="1" onClick={handleSignOut}>
        <Icon type="logout" />
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <Layout className="main-layout">
      <Particles className="particles"
        params={{
          "particles": {
            "number": {
              "value": 300,
              "density": {
                  "enable": false
              }
            },
            "size": {
              "value": 3,
              "random": true
            },
            "move": {
              "direction": "bottom",
              "out_mode": "out"
            },
            "line_linked": {
              "enable": false
            }
          },
          "interactivity": {
            "events": {
              "onhover": {
                "enable": true,
                "mode": "repulse"
              }
            },
            "modes": {
              "repulse": {
                  "particles_nb": 10
              }
            }
          }
        }}
        style={{ height: '100vh', width: '100%' }} />
      <Drawer
        bodyStyle={{ padding: 0, zIndex: 800 }}
        title={<img src={srijanLogoBlack} width="200px" alt="srijan logo" />}
        placement="left"
        closable={true}
        onClose={onDrawerClose}
        visible={drawerVisible}>
        <Menu mode="inline">
          {routes.map((route, index) => {
            return (
              <Menu.Item key={index} onClick={onDrawerClose}>
                <Link to={route.layout + route.path}>
                  <Icon type={route.icon} />{route.routeName}
                </Link>
              </Menu.Item>
            );
          })}
        </Menu>
      </Drawer>
      <Header className="navigation" theme="dark">
        <Icon type="menu" className="appdrawer-icon" onClick={e => setDrawerVisible(true)} />
        <span className="nav-brand"><img src={srijanLogoWhite} width="200px" alt="srijan logo" /></span>
        <span className="nav-right">
          <Dropdown.Button className="dropdown-btn" overlay={dropdownMenu}>
            <Icon type="user" /> ({username})
          </Dropdown.Button>
        </span>
      </Header>
      <Layout style={{ background: 'transparent' }}>
        <Sider className="dashboard-sider">
          <Menu mode="inline" className="dashboard-sider-menu">
            {routes.map((route, index) => {
              return (
                <Menu.Item className="menuBtn" key={index}>
                  <Link style={{ borderRight: 'none'}} className="menuBtnLink" to={route.layout + route.path}>
                    <Icon type={route.icon} />{route.routeName}
                  </Link>
                </Menu.Item>
              );
            })}
          </Menu>
        </Sider>
        <Layout style={{ overflowY: 'auto', background: 'transparent' }}>
          <Content style={{ padding: '1rem', zIndex: 300 }}>
            <RouteSwitch>
              {routes.map((route, index) => {
                return <Route key={index} path={route.layout + route.path} exact component={route.component} />
              })}
              <Route path='/app/events/mementos' exact render={props => <Mementos {...props} />} />
              <Route path='/app/events/:eventName' exact render={props => <EventDisplay {...props} />} />
            </RouteSwitch>
            <Footer className="footer">
              <span>
                <strong>Srijan 22</strong> Made with &#128157; by the Faculty of Engineering And Technology Students' Union, <br/> Jadavpur University <br/>Salt Lake Campus Plot No.8, Salt Lake Bypass, LB Block, Sector III, Salt Lake City, Kolkata 700106.
              </span>
              <div className="footer-social-media-icons">
                <a href="https://www.facebook.com/jusrijan/" target="_blank_"><Icon type="facebook" size="2x" /></a>
                <a href="https://www.instagram.com/srijan_ju/" target="_blank_"><Icon type="instagram" size="2x" /></a>
              </div>
            </Footer>
          </Content>
        </Layout>
      </Layout>
      <Layout style={{ background: 'transparent' }}>
        <Sider className="dashboard-sider">
          <Menu mode="inline" className="dashboard-sider-menu">
            {routes.map((route, index) => {
              return (
                <Menu.Item className="menuBtn" key={index}>
                  <Link style={{ borderRight: 'none'}} className="menuBtnLink" to={route.layout + route.path}>
                    <Icon type={route.icon} />{route.routeName}
                  </Link>
                </Menu.Item>
              );
            })}
          </Menu>
        </Sider>
        <Layout style={{ overflowY: 'auto', background: 'transparent' }}>
          <Content style={{ padding: '1rem', zIndex: 300 }}>
            <RouteSwitch>
              {routes.map((route, index) => {
                return <Route key={index} path={route.layout + route.path} exact component={route.component} />
              })}
              <Route path='/app/events/mementos' exact render={props => <Mementos {...props} />} />
              <Route path='/app/events/:eventName' exact render={props => <EventDisplay {...props} />} />
            </RouteSwitch>
            <Footer className="footer">
              <span>
                <strong>Srijan 22</strong> Made with &#128157; by the Faculty of Engineering And Technology Students' Union, <br/> Jadavpur University <br/>Salt Lake Campus Plot No.8, Salt Lake Bypass, LB Block, Sector III, Salt Lake City, Kolkata 700106.
              </span>
              <div className="footer-social-media-icons">
                <a href="https://www.facebook.com/jusrijan/" target="_blank_"><Icon type="facebook" size="2x" /></a>
                <a href="https://www.instagram.com/srijan_ju/" target="_blank_"><Icon type="instagram" size="2x" /></a>
              </div>
            </Footer>
          </Content>
        </Layout>
      </Layout>

    </Layout>
  );
}

export default AppLayout;

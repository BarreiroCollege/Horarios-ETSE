import React from 'react';
import {Provider} from "react-redux";
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import store from 'store';
import AppRoutes from "../../routes";
import {AppProps, AppState} from "./types";
import Ajustes from "routes/ajustes";
import {Col, Layout, Row} from "antd";
import Navbar from "components/navbar";


export class App extends React.Component<AppProps, AppState> {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Layout>
            <Navbar/>
            <Layout style={{minHeight: '100vh'}}>
              <Layout.Content className={'container'}>
                <Row>
                  <Col xs={1} sm={1} md={1} lg={2} xl={2} xxl={2}/> {/* Left gutter for large devices */}
                  <Switch>
                    <Route path={AppRoutes.AJUSTES}><Ajustes/></Route>
                    <Route path={AppRoutes.HORARIO}>TBD...</Route>
                    <Route path={AppRoutes.ICALENDAR}>TBD...</Route>
                    <Route><Redirect to={AppRoutes.AJUSTES}/></Route>
                  </Switch>
                  <Col xs={1} sm={1} md={1} lg={2} xl={2} xxl={2}/> {/* Right gutter for large devices */}
                </Row>
              </Layout.Content>
              <Layout.Footer style={{textAlign: 'center'}}>
                Horarios ETSE © 2021-2022 | Creado
                por <a href="https://diego.barreiro.xyz" target="_blank" rel="noreferrer">Diego Barreiro</a>
              </Layout.Footer>
            </Layout>
          </Layout>
        </Router>
      </Provider>
    );
  }
}

export default App;

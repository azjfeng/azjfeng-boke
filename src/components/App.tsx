import React from "react";
import "../styles/index.less";
// import "../styles/tailwind.css";
import Header from './header/Header';
import Edit from './edit/Edit'
import ReEdit from "./reedit/ReEdit";
import {
    HashRouter as Router,
    Switch,
    Route,
    Link,
    IndexRoute
} from "react-router-dom";
interface ItemPropsValue {
    title: string;
}
const Item = (props: ItemPropsValue) => {
    return <span className="text-gray-100 iconfont icon-browse">{props.title}</span>
}
function App() {
    const arr: any[] = [1, 2, 3, 4, 5]
    return <div className="app">
        <Router>
            <Route path="/" component={Header} >
            </Route>
            <Route exact path="/edit" component={Edit} >
            </Route>
            {/* <Route exact path="/nav" component={Nav} >
            </Route> */}
            <Route exact path="/reedit/:title" component={ReEdit} >
            </Route>
        </Router>
    </div>
}

export default App
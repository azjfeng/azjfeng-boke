import React from 'react'
// import '../../style/header/header.less'
import Home from '../home/Home';
import Detail from '../detail/Detail'
import {
    HashRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
interface IState{
    navList: Array<any>,
    hashName: string
}
interface IProps{

}
class Header extends React.Component<IProps, IState>{
    constructor(props) {
        super(props)
        this.state = {
            navList: [
                { id: 1, value: "博客首页", path: "/" },
                { id: 2, value: "技术分享", path: "/todo" },
                { id: 3, value: "程序人生", path: "/todo" },
                { id: 4, value: "博客推荐", path: "/todo" },
                { id: 5, value: "关于我", path: "/todo" },
                { id: 6, value: "留言", path: "/todo" },
                { id: 7, value: "个人博客模板", path: "/todo" },
            ],
            hashName:""
        }
    }
    componentDidMount(){
        console.log(location.hash)
        window.addEventListener('hashchange',()=>{
            console.log(location.hash)

        },false)
    }
    componentDidUpdate(){

    }
    render() {
        return (
            <Router>
                <div className="header">
                    <div className="header_nav">
                        <div className="author">
                            <span>jameinfeng</span>
                        </div>
                        <div className="nav_btn">
                            <ul>
                                {
                                    this.state.navList.map((item, key) => {
                                        return <li><Link to={item.path} key={item.key}> {item.value}</Link></li>
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/detail/:title" component={Detail} />
                </Switch>
            </Router>
        )
    }
}

export default Header
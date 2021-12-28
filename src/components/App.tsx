import React  from "react";
import "../styles/index.css";
import "../styles/tailwind.css";


interface ItemPropsValue {
    title: string;
}
const Item = (props: ItemPropsValue)=>{
    return <span className="text-gray-100 iconfont icon-browse">{props.title}</span>
}
function App(){
    const arr: any[] = [1,2,3,4,5]
    return <div  className="h-16 bg-gray-500 flex flex-row">
        {
            arr.map((item)=>{
                return <Item title={item}/>
            })
        }
        <span className="text-gray-100  iconfont icon-favorite"></span>
    </div>
}

export default App
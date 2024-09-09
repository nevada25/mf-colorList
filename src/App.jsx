import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import ColorList from "./components/ColorList";
import {useColor} from "colorPicker/useColors";

const App = () => {
    const {  colorList } = useColor();
    return <div className="container">
        <ColorList colorList={colorList}/>
    </div>
};
const rootElement = document.getElementById("app")
if (!rootElement) throw new Error("Failed to find the root element")

const root = ReactDOM.createRoot(rootElement)

root.render(<App/>)
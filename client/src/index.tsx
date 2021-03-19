import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app";
import { Helmet } from "react-helmet";

ReactDOM.render(
    <React.StrictMode>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Dishwashers</title>
                <meta name="description" content="List of Dishwashers for sale" />
            </Helmet>
            <App />
    </React.StrictMode>,
    document.getElementById("root")
);

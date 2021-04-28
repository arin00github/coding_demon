
import React from 'react';
import Footer from "./component/Footer";
import Top from "./component/Top";

export default function Layout ({children}) {
    return(
        <div id="wrap">
            <header id="header">
            <Top/>
            </header>
            <div className="main">
             {children}
            </div>
            
            <Footer />
        </div>
    )
}
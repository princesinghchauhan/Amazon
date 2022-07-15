import React from "react";


function Navbar() {
    return (
        <body>
            <div className="navbar">
                <div className="header">
                    <ul className="nav-item">
                        <li className="nav-item"><a href="#">Shop</a></li>
                        <li className="nav-item"><a href="#">Our Story</a></li>
                        <li className="nav-item"><a href="">Blog</a></li>
                    </ul>
                    <center className="title"><h2>MicroCom</h2></center>
                    <div className="loginbtn">
                        <a href="#">Login</a>
                    </div>
                    <div className="header-text">
                        <h1>Always On Trends</h1>

                        {/* <a href="#" className="btn btn-dark btn-lg">Shop now</a> */}
                        <a href="#" className="button">Shop now</a>

                    </div>
                </div>
            </div>
            <div className="seconddiv">
                <center className="title2">
                    <h2>Only the Highest Quality Products</h2>
                    <p>In fact, we grow most of them ourselves on our 17-acre farm!</p>
                </center>
            </div>
            <div>
            <ul className="third-div">
                <li className="third-div"><a href="#" className="img-1">img</a></li>
                <li className="third-div"><a href="#" className="img-2">img</a></li>
                <li className="third-div"><a href="#" className="img-3">img</a></li>
            </ul>
            </div>         
        </body>
    )
}

export default Navbar
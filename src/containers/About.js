import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const About = () => {
    return (
        <div>
            <Header />
            <div className=" container col-md-5">
                <h3>สวัสดีค่ะ</h3>
                <p className="title text-just">xxxxxxxx</p>
                <h4 className="text-success">จาก Ku Cafe</h4>
            </div>
            <Footer company="Stamp" email="Mathit.j@ku.th" />
        </div>
    )
}

export default About;
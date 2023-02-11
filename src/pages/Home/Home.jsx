import React from "react";
import { useDispatch } from "react-redux";
import BannerComponent from "../../components/BannerComponent/BannerComponent";
import BlogComponent from "../../components/BlogComponent/BlogComponent";
import CinemaComponent from "../../components/CinemaComponent/CinemaComponent";
import "./home.css";

export default function Home() {
    return (
        <div>
            <BannerComponent />
            <CinemaComponent />
            <BlogComponent />
        </div>
    );
}

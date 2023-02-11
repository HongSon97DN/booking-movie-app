import React from "react";
import { useSelector } from "react-redux";
const MOVIE_LOADING = "MOVIE LOADING";

export default function LoadingComponent() {
    const { isLoading } = useSelector((state) => state.PreloadingReducer);

    const renderloadingText = () => {
        let animateDur = -0.2;
        return MOVIE_LOADING.split("").map((char, index) => {
            animateDur += 0.2;
            return (
                <span
                    key={index}
                    style={{
                        animation: `blur-text 1.5s ${animateDur}s infinite linear alternate`,
                    }}
                >
                    {char}
                </span>
            );
        });
    };
    if (isLoading) {
        return (
            <div className="loading">
                <div className="loading--text">{renderloadingText()}</div>
            </div>
        );
    } else {
        return "";
    }
}

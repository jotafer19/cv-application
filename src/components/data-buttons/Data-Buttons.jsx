import "./data-buttons-style.css"
import PDF from "./PDF-Button";
import { useState } from "react";

function DataButtons({ clearData, loadData }) {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className="options data-container">
            <button className="section-button" onClick={() => setIsActive(!isActive)}>
                <h2>Options</h2>
            </button>
            {isActive && (
                <div className="data-buttons-container">
                    <button className="data-button clear-data" onClick={clearData}>Clear data</button>
                    <button className="data-button load-data" onClick={loadData}>Load data</button>
                    <PDF />
                </div>
            )}
        </div>
    )
} 

export default DataButtons;
import "./data-buttons-style.css"

function DataButtons({ clearData, loadData }) {
    return (
        <div className="data-buttons-container">
            <button className="data-button clear-data" onClick={clearData}>Clear data</button>
            <button className="data-button load-data" onClick={loadData}>Load data</button>
        </div>
    )
} 

export default DataButtons;
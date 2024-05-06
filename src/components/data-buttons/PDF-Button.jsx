import generatePDF from "react-to-pdf";

function PDF() {
    const options = {
        filename: "my-CV.pdf",
        page: {
          margin: 20
        }
    };

    function getTargetElement() {
        return document.querySelector(".display-all-container")
    }

    function downloadPDF() {
        generatePDF(getTargetElement, options)
    }

    return (
        <button className="data-button download" onClick={downloadPDF}>Download</button>
    )
}

export default PDF;
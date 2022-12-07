import React, { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";

// icons
import {
  IoMdArrowDropleftCircle,
  IoMdArrowDroprightCircle,
} from "react-icons/io";

import resumePdf from "./Resume-Saikiran-Belana.pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const resumeLink =
  "https://raw.githubusercontent.com/belanasaikiran/belanasaikiran/main/Resume-Saikiran-Belana.pdf";

function Resume() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  const [page, setPage] = useState(1);

  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    // console.log(numPages);
  }

  const nextPage = () => {
    if (page >= numPages) {
      setPage(numPages);
      return;
    }
    setPage(page + 1);
  };

  const prevPage = () => {
    if (page <= 1) {
      setPage(1);
      return;
    }
    setPage(page - 1);
  };

  return (
    <div className="min-h-screen text-center 2xl:text-xl py-16 ">
      <div className=" relative flex justify-center  ">
        <Document file={resumePdf} onLoadSuccess={onDocumentLoadSuccess}>
          <button
            className="text-center bg-orange-700 text-white p-2  hover:bg-gray-800  hover:text-white px-4 absolute z-10 top-[-20px]  translate-x-[-50%]"
            href={resumeLink}
            target="_blank"
          >
           Download CV
          </button>

          <Page pageNumber={page} scale={width > 786 ? 1.7 : 0.6} />
        </Document>
      </div>

      <div className="flex justify-center gap-2 text-2xl text-orange-800">
        <button onClick={prevPage}>
          <IoMdArrowDropleftCircle />{" "}
        </button>
        <p className="text-gray-800">
          {" "}
          {page} of {numPages}
        </p>
        <button onClick={nextPage}>
          <IoMdArrowDroprightCircle />
        </button>
      </div>
    </div>
  );
}

export default Resume;

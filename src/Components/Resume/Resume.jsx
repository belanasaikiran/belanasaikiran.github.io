import React, { useState, useEffect } from "react";
import { Document, Page, pdfjs } from "react-pdf";

// icons
import {
  IoMdArrowDropleftCircle,
  IoMdArrowDroprightCircle,
  IoMdDownload
} from "react-icons/io";


import resumePdf from "./Resume-Saikiran-Belana.pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const resumeLink =
  "https://raw.githubusercontent.com/belanasaikiran/belanasaikiran/main/Resume-Saikiran-Belana.pdf";

function Resume() {
  const [width, setWidth] = useState(1200);
  const [rightArrowOpacity, setRightArrowOpacity] = useState("100%");
  const [LeftArrowOpacity, setLeftArrowOpacity] = useState("50%");

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
      setRightArrowOpacity("50%");

      return;
    }
    setPage(page + 1);
    setLeftArrowOpacity("100%");
    setRightArrowOpacity("50%");
  };

  const prevPage = () => {
    if (page <= 1) {
      setPage(1);

      return;
    }
    setPage(page - 1);
    setLeftArrowOpacity("50%");
    setRightArrowOpacity("100%");
  };

  return (
    <div className="min-h-screen  text-center 2xl:text-xl py-16 ">
      {/* <div className="flex justify-center gap-2 text-2xl text-orange-800 mb-10">
        <button onClick={prevPage} style={{ opacity: LeftArrowOpacity }}>
          <IoMdArrowDropleftCircle />{" "}
        </button>
        <p className="text-gray-800">
          {" "}
         Page {page} of {numPages}
        </p>
        <button onClick={nextPage} style={{ opacity: rightArrowOpacity }}>
          <IoMdArrowDroprightCircle />
        </button>
      </div> */}
      <div className=" relative flex justify-center  ">
        {/* <button onClick={prevPage} className="text-6xl">
          <IoMdArrowDropleftCircle />{" "}
        </button> */}
        <Document file={resumePdf} onLoadSuccess={onDocumentLoadSuccess}>
          <a
            className="text-center bg-orange-700 text-white p-2  hover:bg-gray-800  hover:text-white px-4 absolute z-10 top-[-20px]  translate-x-[-50%] transition-all duration-1000 ease-in-out inline-flex group "
            href={resumeLink}
            target="blank"
          >
            Download CV
            <IoMdDownload className="mt-1 hidden   group-hover:ml-2 group-hover:block transition-all duration-1000 ease-in-out " />
          </a>

          <Page
            pageNumber={page}
            scale={width > 786 ? 1.7 : 0.6}
            className="transition-all duration-1000 ease-in-out w-full"
          />
        </Document>
        {/* <button onClick={nextPage} className="text-6xl">
          <IoMdArrowDroprightCircle />
        </button> */}
      </div>

      <div className="flex justify-center gap-2 text-2xl text-orange-800 my-10">
        <button onClick={prevPage} style={{ opacity: LeftArrowOpacity }}>
          <IoMdArrowDropleftCircle />{" "}
        </button>
        <p className="text-gray-800">
          {" "}
          Page {page} of {numPages}
        </p>
        <button onClick={nextPage} style={{ opacity: rightArrowOpacity }}>
          <IoMdArrowDroprightCircle />
        </button>
      </div>
    </div>
  );
}

export default Resume;

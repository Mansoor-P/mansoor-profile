const ResumePage = () => {
  const resumeUrl = "/assets/resume/Mansoor_Pathikonda_3.pdf";

  return (
    <div className="mt-20 flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 p-6 relative w-full">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        My Resume
      </h1>

      <object
        data={resumeUrl}
        type="application/pdf"
        className="w-full max-w-5xl h-[800px] border rounded-lg shadow-md"
      >
        <p className="text-center text-gray-700 dark:text-gray-300">
          Your browser does not support PDFs.
          <a href={resumeUrl} className="text-indigo-600 underline">
            Download the PDF
          </a>
        </p>
      </object>
    </div>
  );
};

export default ResumePage;

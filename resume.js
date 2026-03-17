document.getElementById("downloadPDF").addEventListener("click", () => {
  const element = document.querySelector(".resume-container");
  html2pdf()
    .set({ margin:0.5, filename: 'Patricia_Aguero_Resume.pdf', image:{type:'jpeg',quality:0.98}, html2canvas:{scale:2}, jsPDF:{orientation:'portrait'}})
    .from(element)
    .save();
});
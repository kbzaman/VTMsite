var app = angular.module("site");

app.controller("PdfController", ["PdfService",
function(PdfService){

  this.generatePDF = generatePDF;
  function generatePDF(){
    return PdfService.generatePDF();
  }
}])

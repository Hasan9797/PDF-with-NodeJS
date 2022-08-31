const PDFDocument = require('pdfkit');

function buildPDF(dataCallback, endCallback) {
  const doc = new PDFDocument({ bufferPages: true, font: 'Courier' });

  doc.on('data', dataCallback);
  doc.on('end', endCallback);

  doc.fontSize(20).text(`PDFDocument`);

  doc
    .fontSize(12)
    .text(
      `Hello world`
    );
  doc.end();
}

module.exports = { buildPDF };

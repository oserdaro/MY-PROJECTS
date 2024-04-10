function mergeCells() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var startCol = sheet.getActiveRange().getColumn();
  var startRow = sheet.getActiveRange().getRowIndex();
 // sheet.getRange("B2").setValue(startCol);
  // sheet.getRange("B3").setValue(startRow);
 var target= sheet.getRange(startRow, startCol, 1, 10);
  target.mergeAcross();
 var target= sheet.getRange(startRow+1, startCol, 1, 7);
  target.mergeAcross();
 var target= sheet.getRange(startRow+2, startCol, 1, 7);
  target.mergeAcross();
 var target= sheet.getRange(startRow+3, startCol, 1, 7);
  target.mergeAcross();
 var spreadsheet = SpreadsheetApp.getActive();
 spreadsheet.getActiveRangeList().setBorder(null, null, null, null, null, true, '#000000', SpreadsheetApp.BorderStyle.SOLID)
  .setBorder(null, null, null, null, null, true, '#000000', SpreadsheetApp.BorderStyle.SOLID)
  .setBorder(null, null, null, null, false, null);
  
}
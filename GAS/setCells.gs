function setCells() {
  var spreadsheet = SpreadsheetApp.getActive();
 // var currentCell = spreadsheet.getCurrentCell();
  var sheet = spreadsheet.getActiveSheet();
  
  // for (var i = 1; i<40; i=i+1) {
  
  var startCol = sheet.getActiveRange().getColumn();
  var startRow = sheet.getActiveRange().getRowIndex();
   
  var target= sheet.getRange(startRow, startCol, 1, 13);
  target.breakApart();
  var target= sheet.getRange(startRow, startCol+1, 1, 6);
  target.mergeAcross();

  var target= sheet.getRange(startRow+1, startCol, 1, 7);
  target.breakApart();
  var target= sheet.getRange(startRow+1, startCol+1, 1, 6);
  target.mergeAcross();
  
  var target= sheet.getRange(startRow+2, startCol, 1, 7);
  target.breakApart();
  var target= sheet.getRange(startRow+2, startCol+1, 1, 6);
  target.mergeAcross();
 
  var target= sheet.getRange(startRow+3, startCol, 1, 7);
  target.breakApart();
  var target= sheet.getRange(startRow+3, startCol+1, 1, 6);
  target.mergeAcross();
 
  
  sheet.getRange(startRow, startCol, 4, 13).activate();
  var startA1 = sheet.getActiveCell().getA1Notation();
  
  sheet.getRange('L6:X9').copyTo(sheet.getActiveRange(), SpreadsheetApp.CopyPasteType.PASTE_FORMULA, false);
  sheet.getRange('L6:X9').copyTo(sheet.getActiveRange(), SpreadsheetApp.CopyPasteType.PASTE_DATA_VALIDATION, false);
 
  var col =  sheet.getRange(''+startA1+':'+startA1+'').activate();
  sheet.setColumnWidth(startCol, 35)
  
  sheet.getRange(startRow, startCol+13).activate() 
//}  
  }
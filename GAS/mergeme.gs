function mergeme() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var startCol = sheet.getActiveRange().getColumn();
  var startRow = sheet.getActiveRange().getRowIndex();

 // for(i=18; i<100; i=i+1){

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
 
//  }   
  
}
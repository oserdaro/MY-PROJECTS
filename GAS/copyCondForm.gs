function copyCondForm() {
  var spreadsheet = SpreadsheetApp.getActive();
  var sheet = spreadsheet.getActiveSheet();
  var startCol = sheet.getActiveRange().getColumn();
  var startRow = sheet.getActiveRange().getRowIndex();
 
 var range1 = sheet.getRange(startRow, startCol);
 var chk11 = sheet.getRange(startRow,startCol+1).getA1Notation();
 var chk12 = sheet.getRange(startRow,startCol+10).getA1Notation();    
 var range2 = sheet.getRange(startRow+1, startCol);
 var chk21 = sheet.getRange(startRow+1,startCol+1).getA1Notation();
 var chk22 = sheet.getRange(startRow+1,startCol+10).getA1Notation();     
 var range3 = sheet.getRange(startRow+2, startCol);
 var chk31 = sheet.getRange(startRow+2,startCol+1).getA1Notation();
 var chk32 = sheet.getRange(startRow+2,startCol+10).getA1Notation();    
  
  
 var rule11 = SpreadsheetApp.newConditionalFormatRule()
      .whenFormulaSatisfied('=AND ('+chk11+'<>"",'+chk12+'>80)')
      .setBackground("#999999")
      .setRanges([range1])
      .build();

 var rule12 = SpreadsheetApp.newConditionalFormatRule()
      .whenFormulaSatisfied('=AND ('+chk11+'<>"",'+chk12+'=100)')
      .setBackground("#000000")
      .setRanges([range1])
      .build();
  
 var rule21 = SpreadsheetApp.newConditionalFormatRule()
      .whenFormulaSatisfied('=AND ('+chk21+'<>"",'+chk22+'>80)')
      .setBackground("#999999")
      .setRanges([range2])
      .build();

 var rule22 = SpreadsheetApp.newConditionalFormatRule()
      .whenFormulaSatisfied('=AND ('+chk21+'<>"",'+chk22+'=100)')
      .setBackground("#000000")
      .setRanges([range2])
      .build();

 var rule31 = SpreadsheetApp.newConditionalFormatRule()
      .whenFormulaSatisfied('=AND ('+chk31+'<>"",'+chk32+'>80)')
      .setBackground("#999999")
      .setRanges([range3])
      .build();
 
 var rule32 = SpreadsheetApp.newConditionalFormatRule()
      .whenFormulaSatisfied('=AND ('+chk31+'<>"",'+chk32+'=100)')
      .setBackground("#000000")
      .setRanges([range3])
      .build();
 
  var rules = sheet.getConditionalFormatRules();
      rules.push(rule11);
      rules.push(rule12);
      rules.push(rule21);
      rules.push(rule22);
      rules.push(rule31);
      rules.push(rule32);
      sheet.setConditionalFormatRules(rules);
  
 }
function SaSoOut() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Werktage');
  for (i=2;i<367;i++)
  {
    var rangeC = sheet.getRange('C'+i)
    if(rangeC.getValue() == "Sa." || rangeC.getValue() == "So.") sheet.getRange('A'+i).setValue(true);
  } 
  }
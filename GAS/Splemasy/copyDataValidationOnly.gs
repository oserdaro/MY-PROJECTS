function copyDataValidationOnly() {
  var spreadsheet = SpreadsheetApp.getActive();
  
    for (var i = 7; i < 120; i=i+4) {
    spreadsheet.getRange('CL'+i).activate();
    spreadsheet.getRange('CL3').copyTo(spreadsheet.getActiveRange(), SpreadsheetApp.CopyPasteType.PASTE_DATA_VALIDATION, false);
    }
  }

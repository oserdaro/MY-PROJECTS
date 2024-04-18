 function removeSheetProtections(){
  var ss=SpreadsheetApp.getActiveSpreadsheet();
  var einstellungenSheet = ss.getSheetByName('Einstellungen');
  var emailNo = (einstellungenSheet.getRange("W5").getValue())+6;
  var syseditors = einstellungenSheet.getRange("W7:W"+emailNo).getValues();
  var folderID = einstellungenSheet.getRange("A41").getValue();
  var folder = DriveApp.getFolderById(folderID);
  var files=folder.getFilesByType(MimeType.GOOGLE_SHEETS);
  while(files.hasNext()){
    var file=files.next();
    var spreadsheet=SpreadsheetApp.openById(file.getId());
    SpreadsheetApp.setActiveSpreadsheet(spreadsheet);
        //get sheet & range
        var sheet = spreadsheet.getSheetByName('Info');
        sheet.activate();
        //remove sheet protections
           var allProtections = spreadsheet.getActiveSheet().getProtections(SpreadsheetApp.ProtectionType.SHEET);
  var protection = allProtections[0];
  Logger.log(file.getName())
  Logger.log(protection);
  //Logger.log (protection)
 
  if(protection != null) protection.remove();
  }
};
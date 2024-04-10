function addSystemEditorstoTeachers(){
  var ss=SpreadsheetApp.getActiveSpreadsheet();
  var einstellungenSheet = ss.getSheetByName('Einstellungen');
  var emailNo = (einstellungenSheet.getRange("W5").getValue())+6;
  var syseditors = einstellungenSheet.getRange("W7:W"+emailNo).getValues();
  var folderID = einstellungenSheet.getRange("A37").getValue();
  var folder = DriveApp.getFolderById(folderID);
  var files=folder.getFilesByType(MimeType.GOOGLE_SHEETS);
  while(files.hasNext()){
    var file=files.next();
    var spreadsheet=SpreadsheetApp.openById(file.getId());
    SpreadsheetApp.setActiveSpreadsheet(spreadsheet);
        //get sheet & range
        var sheet = spreadsheet.getSheetByName('Info');
        sheet.activate();
        sheet.getRange('A1:Z1').activate();
        //remove range protections
            var allProtections = spreadsheet.getActiveSheet().getProtections(SpreadsheetApp.ProtectionType.RANGE);
            allProtections = allProtections.filter(function(existingProtection) {
            return existingProtection.getRange().getA1Notation() == 'A1:Z1';    });
            allProtections = allProtections.concat(spreadsheet.getActiveSheet().getProtections(SpreadsheetApp.ProtectionType.SHEET));
            for (i=0; i < allProtections.length; i++) allProtections[i].remove();
        //add range protection
        var protection = spreadsheet.getActiveSheet().getRange('A1:Z1').protect();
        protection.removeEditors(protection.getEditors());
        //add sheet protection except certain cells
        var protection = spreadsheet.getActiveSheet().protect();
        protection.setUnprotectedRanges([spreadsheet.getActiveSheet().getRange('A1:Z1')]);
        protection.removeEditors(protection.getEditors());
        protection.addEditors(syseditors);
        }
};
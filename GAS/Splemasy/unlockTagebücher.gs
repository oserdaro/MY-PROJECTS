function unlockAug() {
  var ss=SpreadsheetApp.getActiveSpreadsheet();
  var einstellungenSheet = ss.getSheetByName('Einstellungen');
  var folderID = einstellungenSheet.getRange("A37").getValue();
  var folder = DriveApp.getFolderById(folderID);
  var files=folder.getFilesByType(MimeType.GOOGLE_SHEETS);
  while(files.hasNext()){
    var file=files.next();
    var spreadsheet=SpreadsheetApp.openById(file.getId());
    SpreadsheetApp.setActiveSpreadsheet(spreadsheet);
        //get sheet & range
        var sheet = spreadsheet.getSheetByName('Info');
        var email = sheet.getRange('E2').getValue();
  var as = spreadsheet.getSheetByName('TagebuchAug');      
  var allProtections = as.getProtections(SpreadsheetApp.ProtectionType.SHEET);
  var protection = allProtections[0];
  protection.remove();
  }
}

function unlockSep() {
  var ss=SpreadsheetApp.getActiveSpreadsheet();
  var einstellungenSheet = ss.getSheetByName('Einstellungen');
  var folderID = einstellungenSheet.getRange("A37").getValue();
  var folder = DriveApp.getFolderById(folderID);
  var files=folder.getFilesByType(MimeType.GOOGLE_SHEETS);
  while(files.hasNext()){
    var file=files.next();
    var spreadsheet=SpreadsheetApp.openById(file.getId());
    SpreadsheetApp.setActiveSpreadsheet(spreadsheet);
        //get sheet & range
        var sheet = spreadsheet.getSheetByName('Info');
        var email = sheet.getRange('E2').getValue();
  var as = spreadsheet.getSheetByName('TagebuchSep');      
  var allProtections = as.getProtections(SpreadsheetApp.ProtectionType.SHEET);
  var protection = allProtections[0];
  protection.remove();
  }
}

function unlockOkt() {
  var ss=SpreadsheetApp.getActiveSpreadsheet();
  var einstellungenSheet = ss.getSheetByName('Einstellungen');
  var folderID = einstellungenSheet.getRange("A37").getValue();
  var folder = DriveApp.getFolderById(folderID);
  var files=folder.getFilesByType(MimeType.GOOGLE_SHEETS);
  while(files.hasNext()){
    var file=files.next();
    var spreadsheet=SpreadsheetApp.openById(file.getId());
    SpreadsheetApp.setActiveSpreadsheet(spreadsheet);
        //get sheet & range
        var sheet = spreadsheet.getSheetByName('Info');
        var email = sheet.getRange('E2').getValue();
  var as = spreadsheet.getSheetByName('TagebuchOkt');      
  var allProtections = as.getProtections(SpreadsheetApp.ProtectionType.SHEET);
  var protection = allProtections[0];
  protection.remove();
}
}

function unlockNov() {
  var ss=SpreadsheetApp.getActiveSpreadsheet();
  var einstellungenSheet = ss.getSheetByName('Einstellungen');
  var folderID = einstellungenSheet.getRange("A37").getValue();
  var folder = DriveApp.getFolderById(folderID);
  var files=folder.getFilesByType(MimeType.GOOGLE_SHEETS);
  while(files.hasNext()){
    var file=files.next();
    var spreadsheet=SpreadsheetApp.openById(file.getId());
    SpreadsheetApp.setActiveSpreadsheet(spreadsheet);
        //get sheet & range
        var sheet = spreadsheet.getSheetByName('Info');
        var email = sheet.getRange('E2').getValue();
  var as = spreadsheet.getSheetByName('TagebuchNov');      
  var allProtections = as.getProtections(SpreadsheetApp.ProtectionType.SHEET);
  var protection = allProtections[0];
  protection.remove();
  }
}

function unlockDez() {
  var ss=SpreadsheetApp.getActiveSpreadsheet();
  var einstellungenSheet = ss.getSheetByName('Einstellungen');
  var folderID = einstellungenSheet.getRange("A37").getValue();
  var folder = DriveApp.getFolderById(folderID);
  var files=folder.getFilesByType(MimeType.GOOGLE_SHEETS);
  while(files.hasNext()){
    var file=files.next();
    var spreadsheet=SpreadsheetApp.openById(file.getId());
    SpreadsheetApp.setActiveSpreadsheet(spreadsheet);
        //get sheet & range
        var sheet = spreadsheet.getSheetByName('Info');
        var email = sheet.getRange('E2').getValue();
  var as = spreadsheet.getSheetByName('TagebuchDez');      
  var allProtections = as.getProtections(SpreadsheetApp.ProtectionType.SHEET);
  var protection = allProtections[0];
  protection.remove();
  }
}

function unlockJan() {
  var ss=SpreadsheetApp.getActiveSpreadsheet();
  var einstellungenSheet = ss.getSheetByName('Einstellungen');
  var folderID = einstellungenSheet.getRange("A37").getValue();
  var folder = DriveApp.getFolderById(folderID);
  var files=folder.getFilesByType(MimeType.GOOGLE_SHEETS);
  while(files.hasNext()){
    var file=files.next();
    var spreadsheet=SpreadsheetApp.openById(file.getId());
    SpreadsheetApp.setActiveSpreadsheet(spreadsheet);
        //get sheet & range
        var sheet = spreadsheet.getSheetByName('Info');
        var email = sheet.getRange('E2').getValue();
  var as = spreadsheet.getSheetByName('TagebuchJan');      
  var allProtections = as.getProtections(SpreadsheetApp.ProtectionType.SHEET);
  var protection = allProtections[0];
  protection.remove();
  }
}

function unlockFeb() {
  var ss=SpreadsheetApp.getActiveSpreadsheet();
  var einstellungenSheet = ss.getSheetByName('Einstellungen');
  var folderID = einstellungenSheet.getRange("A37").getValue();
  var folder = DriveApp.getFolderById(folderID);
  var files=folder.getFilesByType(MimeType.GOOGLE_SHEETS);
  while(files.hasNext()){
    var file=files.next();
    var spreadsheet=SpreadsheetApp.openById(file.getId());
    SpreadsheetApp.setActiveSpreadsheet(spreadsheet);
        //get sheet & range
        var sheet = spreadsheet.getSheetByName('Info');
        var email = sheet.getRange('E2').getValue();
  var as = spreadsheet.getSheetByName('TagebuchFeb');      
  var allProtections = as.getProtections(SpreadsheetApp.ProtectionType.SHEET);
  var protection = allProtections[0];
  protection.remove();
  }
}

function unlockMär() {
  var ss=SpreadsheetApp.getActiveSpreadsheet();
  var einstellungenSheet = ss.getSheetByName('Einstellungen');
  var folderID = einstellungenSheet.getRange("A37").getValue();
  var folder = DriveApp.getFolderById(folderID);
  var files=folder.getFilesByType(MimeType.GOOGLE_SHEETS);
  while(files.hasNext()){
    var file=files.next();
    var spreadsheet=SpreadsheetApp.openById(file.getId());
    SpreadsheetApp.setActiveSpreadsheet(spreadsheet);
        //get sheet & range
        var sheet = spreadsheet.getSheetByName('Info');
        var email = sheet.getRange('E2').getValue();
  var as = spreadsheet.getSheetByName('TagebuchMär');      
  var allProtections = as.getProtections(SpreadsheetApp.ProtectionType.SHEET);
  var protection = allProtections[0];
  protection.remove();
  }
}

function unlockApr() {
  var ss=SpreadsheetApp.getActiveSpreadsheet();
  var einstellungenSheet = ss.getSheetByName('Einstellungen');
  var folderID = einstellungenSheet.getRange("A37").getValue();
  var folder = DriveApp.getFolderById(folderID);
  var files=folder.getFilesByType(MimeType.GOOGLE_SHEETS);
  while(files.hasNext()){
    var file=files.next();
    var spreadsheet=SpreadsheetApp.openById(file.getId());
    SpreadsheetApp.setActiveSpreadsheet(spreadsheet);
        //get sheet & range
        var sheet = spreadsheet.getSheetByName('Info');
        var email = sheet.getRange('E2').getValue();
  var as = spreadsheet.getSheetByName('TagebuchApr');      
  var allProtections = as.getProtections(SpreadsheetApp.ProtectionType.SHEET);
  var protection = allProtections[0];
  protection.remove();
  }
}

function unlockMai() {
  var ss=SpreadsheetApp.getActiveSpreadsheet();
  var einstellungenSheet = ss.getSheetByName('Einstellungen');
  var folderID = einstellungenSheet.getRange("A37").getValue();
  var folder = DriveApp.getFolderById(folderID);
  var files=folder.getFilesByType(MimeType.GOOGLE_SHEETS);
  while(files.hasNext()){
    var file=files.next();
    var spreadsheet=SpreadsheetApp.openById(file.getId());
    SpreadsheetApp.setActiveSpreadsheet(spreadsheet);
        //get sheet & range
        var sheet = spreadsheet.getSheetByName('Info');
        var email = sheet.getRange('E2').getValue();
  var as = spreadsheet.getSheetByName('TagebuchMai');      
  var allProtections = as.getProtections(SpreadsheetApp.ProtectionType.SHEET);
  var protection = allProtections[0];
  protection.remove();
  }
}

function unlockJun() {
  var ss=SpreadsheetApp.getActiveSpreadsheet();
  var einstellungenSheet = ss.getSheetByName('Einstellungen');
  var folderID = einstellungenSheet.getRange("A37").getValue();
  var folder = DriveApp.getFolderById(folderID);
  var files=folder.getFilesByType(MimeType.GOOGLE_SHEETS);
  while(files.hasNext()){
    var file=files.next();
    var spreadsheet=SpreadsheetApp.openById(file.getId());
    SpreadsheetApp.setActiveSpreadsheet(spreadsheet);
        //get sheet & range
        var sheet = spreadsheet.getSheetByName('Info');
        var email = sheet.getRange('E2').getValue();
  var as = spreadsheet.getSheetByName('TagebuchJun');      
  var allProtections = as.getProtections(SpreadsheetApp.ProtectionType.SHEET);
  var protection = allProtections[0];
  protection.remove();
  }
}

function unlockJul() {
  var ss=SpreadsheetApp.getActiveSpreadsheet();
  var einstellungenSheet = ss.getSheetByName('Einstellungen');
  var folderID = einstellungenSheet.getRange("A37").getValue();
  var folder = DriveApp.getFolderById(folderID);
  var files=folder.getFilesByType(MimeType.GOOGLE_SHEETS);
  while(files.hasNext()){
    var file=files.next();
    var spreadsheet=SpreadsheetApp.openById(file.getId());
    SpreadsheetApp.setActiveSpreadsheet(spreadsheet);
        //get sheet & range
        var sheet = spreadsheet.getSheetByName('Info');
        var email = sheet.getRange('E2').getValue();
  var as = spreadsheet.getSheetByName('TagebuchJul');      
  var allProtections = as.getProtections(SpreadsheetApp.ProtectionType.SHEET);
  var protection = allProtections[0];
  protection.remove();
  }
}

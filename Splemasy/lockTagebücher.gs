function lockAug() {
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
  var protection = as.protect();
  //var protection = spreadsheet.getActiveSheet().protect();
  protection.removeEditor(email);
  }
}

function lockSep() {
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
  var protection = as.protect();
  //var protection = spreadsheet.getActiveSheet().protect();
  protection.removeEditor(email);
  }
}

function lockOkt() {
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
  var protection = as.protect();
  //var protection = spreadsheet.getActiveSheet().protect();
  protection.removeEditor(email);
  }
}

function lockNov() {
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
  var protection = as.protect();
  //var protection = spreadsheet.getActiveSheet().protect();
  protection.removeEditor(email);
  }
}

function lockDez() {
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
  var protection = as.protect();
  //var protection = spreadsheet.getActiveSheet().protect();
  protection.removeEditor(email);
  }
}

function lockJan() {
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
  var protection = as.protect();
  //var protection = spreadsheet.getActiveSheet().protect();
  protection.removeEditor(email);
  }
}

function lockFeb() {
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
  var protection = as.protect();
  //var protection = spreadsheet.getActiveSheet().protect();
  protection.removeEditor(email);
  }
}

function lockMär() {
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
  var protection = as.protect();
  //var protection = spreadsheet.getActiveSheet().protect();
  protection.removeEditor(email);
  }
}

function lockApr() {
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
  var protection = as.protect();
  //var protection = spreadsheet.getActiveSheet().protect();
  protection.removeEditor(email);
  }
}

function lockMai() {
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
  var protection = as.protect();
  //var protection = spreadsheet.getActiveSheet().protect();
  protection.removeEditor(email);
  }
}

function lockJun() {
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
  var protection = as.protect();
  //var protection = spreadsheet.getActiveSheet().protect();
  protection.removeEditor(email);
  }
}

function lockJul() {
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
  var protection = as.protect();
  //var protection = spreadsheet.getActiveSheet().protect();
  protection.removeEditor(email);
  }
}

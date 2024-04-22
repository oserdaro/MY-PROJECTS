function getFinishedLessons() {
  var ss=SpreadsheetApp.getActiveSpreadsheet();
  var kursSheet = ss.getSheetByName("KursInfo");
  //kursSheet.activate();
  var teacherCPUrl = ss.getSheetByName('Einstellungen').getRange("A33").getValue();
 
  var spreadsheet=SpreadsheetApp.openByUrl(teacherCPUrl);
  SpreadsheetApp.setActiveSpreadsheet(spreadsheet);
  var sheet = spreadsheet.getSheetByName('KursInfo');
  var info = sheet.getRange("E2:E301").getValues();
     
  kursSheet.getRange("F2:F301").setValues(info);
};
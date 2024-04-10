function getKursInfo() {
  var ss=SpreadsheetApp.getActiveSpreadsheet();
  var kursSheet = ss.getSheetByName("KursInfo");
  //kursSheet.activate();
  var folderID = ss.getSheetByName('Einstellungen').getRange("A41").getValue();
  var teacherCPUrl = ss.getSheetByName('Einstellungen').getRange("A33").getValue();
  var folder = DriveApp.getFolderById(folderID);
  var files = folder.getFilesByType(MimeType.GOOGLE_SHEETS);
  var name; var dict = {};

  while (files.hasNext()){
    var file = files.next();
    name = file.getName();
    var spreadsheet=SpreadsheetApp.openById(file.getId());
    SpreadsheetApp.setActiveSpreadsheet(spreadsheet);
    var sheet = spreadsheet.getSheetByName('Info');
    var info = sheet.getRange("AQ2:AW2").getValues();
    var kurzname = sheet.getRange("D2").getValue();
    info.unshift(kurzname);
    dict[name.replace('Student','')] = info;
    }
  var x=1;

  for (var i = 1; i<3*(Object.keys(dict).length)-3; i+=3){
      kursSheet.getRange('A'+(i+1)+':E'+(i+3)).setValues([
      [x,dict[x],dict[x][1][0],dict[x][1][1],dict[x][1][6]],
      [x,dict[x],dict[x][1][2],dict[x][1][3],dict[x][1][6]],
      [x,dict[x],dict[x][1][4],dict[x][1][5],dict[x][1][6]]
      ]);
      x++; }

  var spreadsheet=SpreadsheetApp.openByUrl(teacherCPUrl);
  SpreadsheetApp.setActiveSpreadsheet(spreadsheet);
  var sheet = spreadsheet.getSheetByName('KursInfo');
  var info = sheet.getRange("E2:E301").getValues();
  kursSheet.getRange("F2:F301").setValues(info);
};
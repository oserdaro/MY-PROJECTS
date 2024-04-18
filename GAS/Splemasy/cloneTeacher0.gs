function cloneTeacher0() {
  var sourceSpreadSheet = SpreadsheetApp.getActiveSpreadsheet();
  var urlSheet = sourceSpreadSheet.getSheetByName('Einstellungen');
  var FolderID = urlSheet.getRange("A37").getValue();
  var T0ID = urlSheet.getRange("A39").getValue();
  var HowMany = urlSheet.getRange("A45").getValue();
  HowMany = HowMany+1
  var destFolder = DriveApp.getFolderById(FolderID); 
  var filesb = destFolder.getFiles();
  var filesa = destFolder.getFiles();
  var countb = -1;
  var counta = 0;

  while (filesb.hasNext()) {
   countb++;
   file = filesb.next(); }
 
  for (var i = 1; i<HowMany; i++) DriveApp.getFileById(T0ID).makeCopy("Teacher"+(countb+i), destFolder);

  while (filesa.hasNext()) {
   counta++;
   file = filesa.next(); }

getTeacherURLs()

  for(var x = 1; x < counta; x++) {
   var tURL = urlSheet.getRange('O'+ (x + 1)).getValue();
   var destinationSpreadSheet = SpreadsheetApp.openByUrl(tURL);
   var destSheet = destinationSpreadSheet.getSheetByName('Info'); 
   var destRange = destSheet.getRange("A2");
   destRange.setValue(x);
  }
  urlSheet.getRange("A45").setValue(0)
}
function addNote() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var targetCol = sheet.getActiveRange().getColumn();
  var targetRow = sheet.getActiveRange().getRowIndex();
  var range = sheet.getRange(targetRow,targetCol);
  sheet.getRange("E3").setValue(range.getA1Notation());
  
  if(sheet.getRange("E4").getValue() == 1){
    
    if(sheet.getRange(targetRow,targetCol).isBlank()){
      range.clearNote();
    }
  else {
  var klasse = sheet.getRange(targetRow,targetCol+6).getValue();
  var zahlungsart = sheet.getRange(targetRow,targetCol+7).getValue();
  var kursart = sheet.getRange(targetRow,targetCol+8).getValue();
  var abgeschlossen = sheet.getRange(targetRow,targetCol+9).getValue();
      abgeschlossen = +abgeschlossen.toFixed(0);
  var kontaktName = sheet.getRange(targetRow,targetCol+10).getValue();
  var telNo = sheet.getRange(targetRow,targetCol+11).getValue();
  var noteText = "Klasse: "+klasse+"\nZahlungsart: "+zahlungsart+"\nKursart: "+
      kursart+"\nAbgeschlossen%: "+abgeschlossen+"\nKontaktName: "+kontaktName+"\nTelNo: "+telNo;
  range.setNote(noteText);
  }
}
}
function addSystemEditorstoCP(){
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var listSheet = ss.getSheetByName('Einstellungen');
  var emailNo = (listSheet.getRange("W5").getValue())+6;
  var syseditors = listSheet.getRange("W7:W"+emailNo).getValues();
  var protections = ss.getProtections(SpreadsheetApp.ProtectionType.SHEET);

// Sheet type protection a editorleri ekle Range type protectiona ekleme
// Sheet protection Except certain Cells = butun Sheet protected except certain cells. 
// Certain cells protected degil. Ayrica protect edilmesi gerekiyor.
// Mesela Except A1 dersek A1 haricindeki Cell leri You and 3 others can edit. 
// Bu durumda A1 icin define edilmis birsey yok. A1 icin ayrica define etmek lazim.

  for (var i = 0; i < protections.length; i++) {
   var protection = protections[i];
        protection.removeEditors(protection.getEditors());
        protection.addEditors(syseditors);
 }
}
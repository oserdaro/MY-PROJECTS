function protectSheetOnlyMeExceptCertainCells() {
  //protect the whole sheet
  var sSheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = sSheet.getSheetByName('Kurstabelle').activate();
  var protection = sSheet.getActiveSheet().protect();
  var me = Session.getEffectiveUser();
          protection.addEditor(me);
          protection.removeEditors(protection.getEditors());
  //set unprotected ranges
  //var unprotected = sheet.getRangeList([['M6:R9'],['L6']]);
  //protection.setUnprotectedRanges([unprotected]);
  for (var i = 6; i<152; i=i+5){
  protection.setUnprotectedRanges([sheet.getRange('L'+i), sheet.getRange('Y'+i), sheet.getRange('AL'+i), sheet.getRange('AY'+i), sheet.getRange('BL'+i), sheet.getRange('BY'+i), sheet.getRange('CL'+i), sheet.getRange('CY'+i), sheet.getRange('DL'+i), sheet.getRange('DY'+i), sheet.getRange('EL'+i), sheet.getRange('EY'+i), sheet.getRange('FL'+i), sheet.getRange('FY'+i), sheet.getRange('GL'+i), sheet.getRange('GY'+i), sheet.getRange('HL'+i), sheet.getRange('HY'+i), sheet.getRange('IL'+i), sheet.getRange('IY'+i), sheet.getRange('JL'+i), sheet.getRange('JY'+i), sheet.getRange('KL'+i), sheet.getRange('KY'+i), sheet.getRange('LL'+i), sheet.getRange('LY'+i), sheet.getRange('ML'+i), sheet.getRange('MY'+i), sheet.getRange('NL'+i), sheet.getRange('NY'+i), sheet.getRange('OL'+i), sheet.getRange('OY'+i), sheet.getRange('PL'+i), sheet.getRange('PY'+i), sheet.getRange('QL'+i), sheet.getRange('QY'+i), sheet.getRange('RL'+i), sheet.getRange('RY'+i), sheet.getRange('SL'+i), sheet.getRange('SY'+i)])
  }
} 
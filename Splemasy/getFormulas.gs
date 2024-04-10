function getFormulas() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var ktSheet = ss.getSheetByName('Kurstabelle');
  var ktSheetBE = ss.getSheetByName('KurstabelleBE');

  var sheetWidth = ktSheet.getMaxColumns();

  for (var x = 0; x < sheetWidth; x++) {

      var formulas = ktSheet.getRange(4, (x * 2 + 12), 3).getFormulas();
      ktSheetBE.getRange(4, (x * 6 + 4), 3).setFormulas(formulas);
  }

}

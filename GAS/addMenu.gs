function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('Splemasy')
      .addSubMenu(ui.createMenu('AddSystemEditors')
          .addItem('ToCPs', 'menuItem1')
          .addItem('ToTeachers', 'menuItem11')
          .addItem('ToStudents', 'menuItem12')          ) 
      //.addSeparator()
      .addSubMenu(ui.createMenu('Get')
          .addItem('TeacherURLs', 'menuItem2')
          .addItem('StudentURLs', 'menuItem3')
          .addItem('SchülerInfo', 'menuItem10')
          .addItem('LehrerInfo', 'menuItem9')
          .addItem('KursInfo', 'menuItem8')          )
      //.addSeparator()
      .addSubMenu(ui.createMenu('Upload')
          .addItem('TKalender', 'menuItem4')
          .addItem('SKalender', 'menuItem6')
          .addItem('SchülerInfo', 'menuItem5'))
      .addSubMenu(ui.createMenu('LockTagebuch')
          .addItem('Aug', 'menuItem13')
          .addItem('Sep', 'menuItem14')
          .addItem('Okt', 'menuItem15')
          .addItem('Nov', 'menuItem16')
          .addItem('Dez', 'menuItem17')
          .addItem('Jan', 'menuItem18')
          .addItem('Feb', 'menuItem19')
          .addItem('Mär', 'menuItem20')
          .addItem('Apr', 'menuItem21')
          .addItem('Mai', 'menuItem22')
          .addItem('Jun', 'menuItem23')
          .addItem('Jul', 'menuItem24'))    
      .addSubMenu(ui.createMenu('UnlockTagebuch')
          .addItem('Aug', 'menuItem25')
          .addItem('Sep', 'menuItem26')
          .addItem('Okt', 'menuItem27')
          .addItem('Nov', 'menuItem28')
          .addItem('Dez', 'menuItem29')
          .addItem('Jan', 'menuItem30')
          .addItem('Feb', 'menuItem31')
          .addItem('Mär', 'menuItem32')
          .addItem('Apr', 'menuItem33')
          .addItem('Mai', 'menuItem34')
          .addItem('Jun', 'menuItem35')
          .addItem('Jul', 'menuItem36'))
      .addItem('SendMessage', 'menuItem7')
      .addToUi();
}
function menuItem1() { addSystemEditorstoCP() };
function menuItem2() { getTeacherURLs() };
function menuItem3() { getStudentURLs() };
function menuItem4() { updateTKalender() };
function menuItem5() { uploadSchulerInfo() };
function menuItem6() { updateSKalender() };
function menuItem7() { sendMessage() };
function menuItem8() { getKursInfo() };
function menuItem9() { getLehrerInfo() };
function menuItem10() { getSchülerInfo() };
function menuItem11() { addSystemEditorstoTeachers() };
function menuItem12() { addSystemEditorstoStudents() };
function menuItem13() { lockAug() };
function menuItem14() { lockSep() };
function menuItem15() { lockOkt() };
function menuItem16() { lockNov() };
function menuItem17() { lockDez() };
function menuItem18() { lockJan() };
function menuItem19() { lockFeb() };
function menuItem20() { lockMär() };
function menuItem21() { lockApr() };
function menuItem22() { lockMai() };
function menuItem23() { lockJun() };
function menuItem24() { lockJul() };
function menuItem25() { unlockAug() };
function menuItem26() { unlockSep() };
function menuItem27() { unlockOkt() };
function menuItem28() { unlockNov() };
function menuItem29() { unlockDez() };
function menuItem30() { unlockJan() };
function menuItem31() { unlockFeb() };
function menuItem32() { unlockMär() };
function menuItem33() { unlockApr() };
function menuItem34() { unlockMai() };
function menuItem35() { unlockJun() };
function menuItem36() { unlockJul() };
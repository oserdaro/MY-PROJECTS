function getTeacherURLs() {
var ss=SpreadsheetApp.getActiveSpreadsheet();
var sheet=ss.getActiveSheet();
var folderid = ss.getSheetByName('Einstellungen').getRange("A37").getValue();
var folder = DriveApp.getFolderById(folderid);

var files = folder.getFiles();
var file;
var name;
var link;
var links = [];
var dict = {};
var sortedLinks = [];

while (files.hasNext()){
var file = files.next();
name = file.getName();
link = file.getUrl();
links.push(link);
dict[name.replace('Teacher','')] = link;
}

sheet.getRange('O2:O31').clearContent();
for (var i = 1; i<links.length; i++){
    sortedLinks.push([dict[i]]);
};

sheet.getRange('O2:O'+links.length).setValues(sortedLinks);
sheet.getRange('O2:O31').setBackground('#efefef');
}
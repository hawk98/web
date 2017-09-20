function Click(){ 
window.event.returnValue=false; 
} 
document.oncontextmenu=Click; 

if (top!= self) { 
    top.location.href = location.href; 
}

// These are just like the former editData, just much more
// general, in that every page can have its own private data
// which is remembered across page loads, since the data
// is saved in an associative array.
var TopLevelPageData = new Array();
function getPageData(page_name, key) {
  return TopLevelPageData[page_name + "_" + key];
}
function setPageData(page_name, key, val) {
  TopLevelPageData[page_name + "_" + key] = val;
}

var editData = "";
var errorReferrer;

function saveEditData(data) {
	return editData = data;
}

function getEditData() {
	return editData;
}

function setErrorReferrer(url)
{
    var prev = errorReferrer;
    errorReferrer = url;
    return prev;
}
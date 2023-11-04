let x;
let i = 0;

function loadAuthor(i) {
  let xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      loadAuthorName(this, i);
      loadAboutAuthor(i);
      loadAuthorImg(i);
      loadBooks(i);
    }
  }
  xmlhttp.open("GET", "book_info.xml", true);
  xmlhttp.send();
}

function loadBooks(i){
  let txt="<tr>";
  let books= x[i].getElementsByTagName("book");
  for(let j=0;j<books.length;j++){
    txt+="<th>"+books[j].childNodes[0].nodeValue+"</th>";
  }
  document.getElementById("table1").innerHTML= txt+"</tr>";
}

function loadAboutAuthor(i){
  document.getElementById("about-author").innerHTML=x[i].getElementsByTagName("about")[0].childNodes[0].nodeValue;
}

function loadAuthorImg(i){
  document.getElementById("authorImg").src=x[i].getElementsByTagName("profile-pic")[0].childNodes[0].nodeValue;
}
function loadAuthorName(xml, i) {
  let xmlDoc = xml.responseXML;
  x = xmlDoc.getElementsByTagName("author");
  document.getElementById("author-name").innerHTML =  x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue;
}

function next() {
  i++;
  loadAuthor(i%x.length);
}

function previous() {
  i--;
  i=(i+x.length);
  loadAuthor(i%x.length);
}

function submitOnEnter(event){
  if(event.key=="Enter"){
    alert("Email submitted");
    document.getElementById("inp1").value="";
  }
}

function automaticLoad(){
  setInterval(next,5000);
}

automaticLoad();
loadAuthor(i);
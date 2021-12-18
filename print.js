function CreatePrint(){
    let title = document.getElementById("input-title").value;
    let author = document.getElementById("input-author").value;
    let passage = document.getElementById("input-passage").value;
    passage = passage.replace(/\r\n/g, "<br />")
    passage = passage.replace(/\n/g, "<br />");
    passage = passage.replace(/\r/g, "<br />");
    document.getElementById("print-title").innerHTML = title;
    document.getElementById("print-author").innerHTML = author;
    document.getElementById("print-passage").innerHTML = passage;
}
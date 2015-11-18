var myRequest = new XMLHttpRequest();
var method = "GET";
var url = "http://www.europeana.eu/api/v2/search.json?wskey=b8x7qvBJn&query=m.c.+escher&qf=fotocollectie&start=1&rows=96&profile=standard";
myRequest.open(method, url);
myRequest.send();

var urlArray = [];
myRequest.onreadystatechange = function () {
    if (myRequest.readyState === 4){
        var data = myRequest.responseText;
        var dataParsed = JSON.parse(data);
       
        for (var i = 0; i < dataParsed.items.length; i++){
            if (dataParsed.items[i].edmPreview){
                urlArray.push(dataParsed.items[i].edmPreview[0]);
            }
        }
    }
};

var angle= 0;

var turnImage = function() {
    angle=angle+90;
    $('.image').css({transform: 'rotate(' +angle+'deg)'});
    if (angle==360){angle=0}
};
    
var Guess= function() {
    if (angle===0){alert('Totally right!')}
};

var counter= 0;

var nextImage= function () {
    $('.image')[0].src= urlArray[counter];
    counter= (counter+1);
    if (counter == urlArray.length){counter = 0;}
};
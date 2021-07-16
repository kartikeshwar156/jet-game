let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/newseventsimage_1537198485721_mainnews2012_x1.jpg') {
      myImage.setAttribute('src','images/chemistry2.jpg');
    } else {
      myImage.setAttribute('src','images/newseventsimage_1537198485721_mainnews2012_x1.jpg');
    }
}
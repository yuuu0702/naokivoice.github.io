$(document).ready(function () {
  $("#Button1").click(function () {
    inputText = $("#Text1").val();
    textspeed = $("#Text2").val();

    let res = inputText.split("");

    function doSomethingLoop(maxCount, i) {
      if (i <= maxCount) {
        let audioElem = new Audio();
        let list = "./mp3/naokiroid/"+res[i]+".m4a";
        audioElem.src = list;  
        audioElem.play();
        setTimeout(function(){doSomethingLoop(maxCount, ++i)}, textspeed);
      }
    }
    
    doSomethingLoop(res.length, 0);
  })
})
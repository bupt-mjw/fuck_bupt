function curDateTime() {
      var d = new Date();
      var year = d.getYear();
      var month = d.getMonth() + 1;
      var date = d.getDate();
      var day = d.getDay();
      var hours = d.getHours();
      var minutes = d.getMinutes();
      var seconds = d.getSeconds();
      var ms = d.getMilliseconds();
      var curDateTime = String(1900 + parseInt(year));
      if (month > 9)
        curDateTime = curDateTime + "-" + month;
      else
        curDateTime = curDateTime + "-0" + month;
      if (date > 9)
        curDateTime = curDateTime + "-" + date;
      else
        curDateTime = curDateTime + "-0" + date;
      if (hours > 9)
        curDateTime = curDateTime + " " + hours;
      else
        curDateTime = curDateTime + "0" + hours;
      if (minutes > 9)
        curDateTime = curDateTime + ":" + minutes;
      else
        curDateTime = curDateTime + ":0" + minutes;
      if (seconds > 9)
        curDateTime = curDateTime + ":" + seconds;
      else
        curDateTime = curDateTime + ":0" + seconds;
      return curDateTime;
    };
    curTime = curDateTime();

    
    
    function Enter(e) {
      // console.log(e)
      var name = document.getElementById("input-name").value;
      // var aca = document.getElementById("input-aca").value;
      // var number = document.getElementById("input-number").value;

      document.getElementById("content").style.display = "";
      document.getElementById("input-box").style.display = "none";

      if (name != '') {
        document.getElementById("info-name").innerHTML = name;
      }
      // if (aca != '') {
      //   document.getElementById("info-aca").innerHTML = aca;
      // }
      // if (number != '') {
      //   document.getElementById("info-number").innerHTML = number;
      // }
      var status = ['允许入校', '允许出校'];
      document.getElementById("status").innerHTML = status[parseInt(e)];
      document.getElementById("time").innerHTML = curTime;
    }
    
function change() {
  let content = document.getElementById("status").innerHTML;
  if(content == "允许入校") {
    document.getElementById("status").innerHTML = "允许出校";
  }else {
    document.getElementById("status").innerHTML = "允许入校";
  }
  
  
}



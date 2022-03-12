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

    
    
    // function Enter(e) {
    //   console.log(e)
    //   var name = document.getElementById("input-name").value;
    //   var aca = document.getElementById("input-aca").value;
    //   var number = document.getElementById("input-number").value;

    //   document.getElementById("content").style.display = "";
    //   document.getElementById("input-box").style.display = "none";

    //   if (name != '') {
    //     document.getElementById("info-name").innerHTML = name;
    //   }
    //   if (aca != '') {
    //     document.getElementById("info-aca").innerHTML = aca;
    //   }
    //   if (number != '') {
    //     document.getElementById("info-number").innerHTML = number;
    //   }
    //   var status = ['允许入校', '允许出校'];
    //   document.getElementById("status").innerHTML = status[parseInt(e)];
    //   document.getElementById("time").innerHTML = curTime;
    // }
    function Enter(e) {
      var obj = document.getElementById('ni');
　　
      console.log(e);
      document.getElementById("content").style.display = "";
      document.getElementById("input-box").style.display = "none";
      document.getElementById("time").innerHTML = curTime;
      if (parseInt(e) == 0) {
        obj.src = "./assest/gzd.png"
        // obj.setAttribute('./assest/gzd.png', './assest/gzd.png');//把图片修改为目标路径
        // document.getElementById("ni").img.src = './assest/gzd.png'
      }else if(parseInt(e) == 1) {
        document.getElementById('info-name').innerHTML = '曾凯林'
        obj.src = "./assest/zkl.jpg"
        // document.getElementById("ni").img.src = './assest/1.png'
      }else if(parseInt(e) == 2) {
        document.getElementById('info-name').innerHTML = '蔺展琨'
        obj.src = "./assest/lzk.jpg"
      }else if(parseInt(e) == 3) {
        document.getElementById('info-name').innerHTML = '赵石磊'
        obj.src = "./assest/zsl.jpg"
      }else if(parseInt(e) == 4) {
        document.getElementById('info-name').innerHTML = '郗厚印'
        obj.src = "./assest/xhy.jpg"
      }else if(parseInt(e) == 5) {
        document.getElementById('info-name').innerHTML = '乔博'
        obj.src = "./assest/qy.jpg"
      }
      
    }

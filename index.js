      // $(document).on('keypress', function (e) {
        // $('button[data-event_key="'+e.key+'"]').addClass('active');
        // console.log(e.key);
      // })
      // $(document).on('keyup', function (e) {
      //   $('button[data-event_key="'+e.key+'"]').addClass('active');
      //   console.log(e.key);
      // })
      var erase = document.querySelector("#erase");
      var numLock = document.querySelector("#num");
      var clear = document.querySelector("#clear");
      var equal = document.querySelector("#eq");

      var btn_0 = document.querySelector("#ze");
      var btn_1 = document.querySelector("#on");
      var btn_2 = document.querySelector("#tw");
      var btn_3 = document.querySelector("#th");
      var btn_4 = document.querySelector("#fo");
      var btn_5 = document.querySelector("#fi");
      var btn_6 = document.querySelector("#si");
      var btn_7 = document.querySelector("#sev");
      var btn_8 = document.querySelector("#ei");
      var btn_9 = document.querySelector("#ni");

      var btn_plus = document.querySelector("#pl");
      var btn_minus = document.querySelector("#min");
      var btn_multi = document.querySelector("#mul");
      var btn_div = document.querySelector("#div");
      var btn_dot = document.querySelector("#dot");

      var write_me = document.querySelector("#type");
      var result = document.querySelector("#result");

      btn_0.onclick = ()=>{
        type_to(0);
      }
      btn_0.onclick = ()=>{
        type_to(0);
      }
      btn_1.onclick = ()=>{
        type_to(1);
      }
      btn_2.onclick = ()=>{
        type_to(2);
      }
      btn_3.onclick = ()=>{
        type_to(3);
      }
      btn_4.onclick = ()=>{
        type_to(4);
      }
      btn_5.onclick = ()=>{
        type_to(5);
      }
      btn_6.onclick = ()=>{
        type_to(6);
      }
      btn_7.onclick = ()=>{
        type_to(7);
      }
      btn_8.onclick = ()=>{
        type_to(8);
      }
      btn_9.onclick = ()=>{
        type_to(9);
      }
      btn_plus.onclick = ()=>{
        type_to("+");
      }
      btn_minus.onclick = ()=>{
        type_to("-");
      }
      btn_multi.onclick = ()=>{
        type_to("X");
      }
      
      btn_dot.onclick = ()=>{
        type_to(".");
      }
      clear.onclick = ()=>{
        clear_screen();
      }
      erase.onclick = ()=>{
        erase_screen();
      }
      equal.onclick = () =>{
        calculate();
      }
      

      document.onkeyup = e =>{
        if(e.key =="0" || e.key =="Num0"){
          type_to(0);
        }
        else if(e.key =="1" || e.key =="Num1"){
          type_to(1);
        }
        else if(e.key =="2" || e.key =="Num2"){
          type_to(2);
        }
        else if(e.key =="3" || e.key =="Num3"){
          type_to(3);
        }
        else if(e.key =="4" || e.key =="Num4"){
          type_to(4);
        }
        else if(e.key =="5" || e.key =="Num5"){
          type_to(5);
        }
        else if(e.key =="6" || e.key =="Num6"){
          type_to(6);
        }
        else if(e.key =="7" || e.key =="Num7"){
          type_to(7);
        }
        else if(e.key =="8" || e.key =="Num8"){
          type_to(8);
        }
        else if(e.key =="9" || e.key =="Num9"){
          type_to(9);
        }
        else if(e.key =="+" || e.key =="Num+"){
          type_to("+");
        }
        else if(e.key =="-" || e.key =="Num-"){
          type_to("-");
        }
        else if(e.key =="" || e.key =="Num"){
          type_to("X");
        }
        else if(e.key =="/" || e.key =="Num/"){
          type_to("/");
        }
        else if(e.key =="." || e.key =="Num."){
          type_to(".");
        }
        else if(e.key == "Enter" || e.key == "Numenter"){
          calculate();
        }
        else if(e.key == "Delete"){
          clear_screen();
        }
        else if(e.key == "Backspace" || e.key == "Escape"){
          erase_screen();
        }
      }

      var type_to = text =>{
        if (write_me.innerText == ""){
          write_me.innerText = text;
        }
        else if (write_me.innerText.length<=23){
          write_me.innerText = write_me.innerText + text;
        }
        else{
          alert("Digit limit reached");
        }
      }

      var calculate = () =>{
        var res = write_me.innerText;
        if(res.indexOf("/")== -1){
          if(res.indexOf("X")!= -1){
          res = res.replace("X","*");
        }
        }
        
        else{
          res = res.replace("/","");
          if(res.indexOf("X") != -1){
            var res_ar = res.split("X");
            var total = eval(res_ar[0]);
            var need = eval(res_ar[1]);
            res = (need / 100) * total;
          }
          else{
            alert("Math error. Division can't be evaluate without multiplication")
          }
        }
        result.innerText = eval(res);
      }

      var clear_screen = () =>{
        write_me.innerText = "";
      }

      var erase_screen = () =>{
        write_me.innerText = write_me.innerText.substr(0,write_me.innerText.length -1);
      }

    
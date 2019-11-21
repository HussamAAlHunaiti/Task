
        var dca  =  document.getElementById("div-c-a") , dcb = document.getElementById("div-c-b") , dcc = document.getElementById("div-c-c");
        var aImg = document.getElementById("div-c-a-img");
        var bImg = document.getElementById("div-c-b-img");
        var cImg = document.getElementById("div-c-c-img");
        var aBor = document.getElementById("div-c-a-bor");
        var bBor = document.getElementById("div-c-b-bor");
        var cBor = document.getElementById("div-c-c-bor");
        

        //document.querySelectorAll("#btn-img").style.backgroundColor="white";  //review

      function showUser(v){

 
        var header = document.getElementById("div-d");
        var btns = header.getElementsByClassName("btn");
        for (var i = 0; i < btns.length; i++) {
          btns[i].addEventListener("click", function() {
            var current = document.getElementsByClassName("active");
            if (current.length > 0) { 
              current[0].className = current[0].className.replace(" active", "");
            }
            this.className += " active";
          });
        }


        switch(v){
          case '1':
            dca.style.display="flex";
            dcb.style.display="flex";
            dcc.style.display="flex";
            aImg.style.display="block";
            bImg.style.display="block";
            cImg.style.display="block";
            aBor.style.width="50%";
            bBor.style.width="50%";
            cBor.style.width="50%";
            aBor.style.paddingTop="8%";
            bBor.style.paddingTop="8%";
            cBor.style.paddingTop="8%";
            aBor.style.paddingBottom="8%";
            bBor.style.paddingBottom="8%";
            cBor.style.paddingBottom="8%";
            aBor.style.marginLeft="0%";
            bBor.style.marginRight="0%";
            cBor.style.marginLeft="0%";
            break;
          case '2':
            dcb.style.display="none";
            dcc.style.display="none";
            dca.style.display="flex";
            aImg.style.display="block";
            aBor.style.width="50%";
            aBor.style.paddingTop="8%";
            aBor.style.paddingBottom="8%";
            aBor.style.marginLeft="0%";
            break;
          case '3':
            dca.style.display="none";
            dcc.style.display="none";
            dcb.style.display="flex";
            bImg.style.display="block";
            bBor.style.width="50%";
            bBor.style.paddingTop="8%";
            bBor.style.paddingBottom="8%";
            bBor.style.marginRight="0%";
            break;
          case '4':  
            dca.style.display="none";
            dcb.style.display="none";
            dcc.style.display="flex";
            cImg.style.display="block";
            cBor.style.width="50%";
            cBor.style.paddingTop="8%";
            cBor.style.paddingBottom="8%";
            cBor.style.marginLeft="0%";
            break;
          case '5':
            dca.style.display="flex";
            dcb.style.display="flex";
            dcc.style.display="flex";
            aImg.style.display="none";
            bImg.style.display="none";
            cImg.style.display="none";
            aBor.style.width="100%";
            bBor.style.width="100%";
            cBor.style.width="100%";
            aBor.style.paddingTop="0";
            bBor.style.paddingTop="0";
            cBor.style.paddingTop="0";
            aBor.style.paddingBottom="0";
            bBor.style.paddingBottom="0";
            cBor.style.paddingBottom="0";
            aBor.style.marginLeft="7.4%"
            bBor.style.marginRight="7.4%";
            cBor.style.marginLeft="7.4%"
            break;
          case '6':
          
          case '7':
          
        }
        
         

          
        
      }
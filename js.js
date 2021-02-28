
 <!----------- Fun Opacity menu  ----------->
  $(document).ready(function(){
  $(".navcarte > li").click(function(){
  $(".navcarte > li").css("opacity", "0.5");
    $(this).css("opacity", "1"); 
  $(".navcarte > li:last").css("opacity", "1");
  });
  });
  



  
  function showimg(num){
       if (num == 1) {
      pct = "./img/carte.png";
    } else if(num == 2) {
      pct = "./img/carte.png";
    }else{
	pct = "./img/carte.png";
	}
    document.getElementById('plcimg').src = pct;
  }
  
       //function carte visite
    function showimgcv(num) {
      var pct;
     if (num == 1) {
      pct = "./img/carte1.jpg";
	  document.getElementById('plcdesc').innerHTML=document.getElementById('desc1').innerHTML;
    } else if(num == 2) {
      pct = "./img/carte2.jpg";
      document.getElementById('plcdesc').innerHTML=document.getElementById('desc2').innerHTML;
    }else{
	pct = "./img/carte3.jpg";
	document.getElementById('plcdesc').innerHTML=document.getElementById('desc3').innerHTML;
	}
    document.getElementById('plcimg').src = pct;
	
  }
  
  function showcartcv() {
  document.getElementById('plcimg').src ="./img/carte1.jpg";
  document.getElementById('titre').innerHTML="Carte Visite";
  document.getElementById('idcartev').style.display="";
  document.getElementById('carte').style.display="none";
  document.getElementById('idlogo').style.display="none";
  document.getElementById('idimgf').style.display="none";
  document.getElementById('idimgbro').style.display="none";
  document.getElementById('plcdesc').innerHTML=document.getElementById('desc1').innerHTML;
  
  }
  
     //function logo
      function showimglg(num) {
      var pct;
     if (num == 1) {
      pct = "./img/logo1.jpg";
	  document.getElementById('plcdesc').innerHTML=document.getElementById('desclogo1').innerHTML;
    }else if(num == 2){
	  pct = "./img/logo2.jpg";
	  document.getElementById('plcdesc').innerHTML=document.getElementById('desclogo2').innerHTML;
	}else{
	pct = "./img/logo3.png";
	document.getElementById('plcdesc').innerHTML=document.getElementById('desclogo3').innerHTML;
	}
    document.getElementById('plcimg').src = pct;
	
  }
  
  function showlogo() {
  document.getElementById('plcimg').src ="./img/logo1.jpg";
  document.getElementById('titre').innerHTML="Logo";
  document.getElementById('carte').style.display="none";
  document.getElementById('idlogo').style.display="";
  document.getElementById('idcartev').style.display="none";
  document.getElementById('idimgf').style.display="none";
  document.getElementById('idimgbro').style.display="none";  
  document.getElementById('plcdesc').innerHTML=document.getElementById('desclogo1').innerHTML;
  
  }
   //function flyer
        function showimgfl(num) {
      var pct;
     if (num == 1) {
      pct = "./img/flyer1.png";
	  document.getElementById('plcdesc').innerHTML=document.getElementById('descflyer1').innerHTML;
    }else if(num == 2){
	  pct = "./img/flyer2.png";
	  document.getElementById('plcdesc').innerHTML=document.getElementById('descflyer2').innerHTML;
	}else{
	pct = "./img/flyer3.jpg";
	document.getElementById('plcdesc').innerHTML=document.getElementById('descflyer3').innerHTML;
	}
    document.getElementById('plcimg').src = pct;
	
  }
  
    function showflyer() {
  document.getElementById('plcimg').src ="./img/flyer1.png";
  document.getElementById('titre').innerHTML="Flyer";
  document.getElementById('idcartev').style.display="none";
  document.getElementById('carte').style.display="none";
  document.getElementById('idlogo').style.display="none";
  document.getElementById('idimgf').style.display="";
  document.getElementById('idimgbro').style.display="none";
  document.getElementById('plcdesc').innerHTML=document.getElementById('descflyer1').innerHTML;
  
  }
  
     //function brochure
        function showimgbr(num) {
      var pct;
     if (num == 1) {
      pct = "./img/brochure1.jpg";
	  document.getElementById('plcdesc').innerHTML=document.getElementById('descbrochure1').innerHTML;
    }else if(num == 2){
	  pct = "./img/brochure2.jpg";
	  document.getElementById('plcdesc').innerHTML=document.getElementById('descbrochure2').innerHTML;
	}else{
	pct = "./img/brochure3.jpg";
	document.getElementById('plcdesc').innerHTML=document.getElementById('descbrochure3').innerHTML;
	}
    document.getElementById('plcimg').src = pct;
	
  }
  
    function showbrochure() {
  document.getElementById('plcimg').src ="./img/brochure1.jpg";
  document.getElementById('titre').innerHTML="Brochure";
  document.getElementById('idcartev').style.display="none";
  document.getElementById('carte').style.display="none";
  document.getElementById('idlogo').style.display="none";
  document.getElementById('idimgf').style.display="none";
  document.getElementById('idimgbro').style.display="";
  document.getElementById('plcdesc').innerHTML=document.getElementById('descbrochure1').innerHTML;
  
  }

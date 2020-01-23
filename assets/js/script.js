

(() => {

 function loadCitation(){
     let link= new XMLHttpRequest();
     link.open('GET', 'https://thatsthespir.it/api', 'true');

     link.onload= function(){
        let citation = JSON.parse(this.responseText);

        let author= citation.author;
            document.getElementById("test3").innerHTML= author;
            if(citation.photo != ""){
                let photos = '<img src="'+citation.photo+'" class="rounded-circle">';
                document.getElementById("test2").innerHTML= photos;
            }
            else{
                let photos = '<img src="assets/css/img/avatar.jpg" class="rounded-circle">';
                document.getElementById("test2").innerHTML= photos;
            }   
        
        let citationss = citation.quote;
            document.getElementById("test1").innerHTML= citationss;
     }
     link.send();
 }
loadCitation();


})();

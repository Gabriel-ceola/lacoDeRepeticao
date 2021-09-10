var candidato = document.getElementById("candidato");
var partido = document.getElementById("partido");
var andre = 27230 || 18;
var elenilton = 65478 || 17;
var fagner = 98637 || 65;
var elaine = 37954 || 87;
  function votar(){
    if (candidato === andre || partido === andre)
      alert("Você votou em André Helena")
      else 
        if(candidato === elenilton || partido === elenilton)
          alert("Você votou em Elenilton Dezengrini")
          else 
            if(candidato === fagner || partido === fagner)
              alert("Você votou em Fagner Menegasso")
                else (candidato == elaine || partido === elaine)
                  alert("Você votou em Elaine Zanini")     
}
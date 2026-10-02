document.getElementById("year")?.append(new Date().getFullYear());
const form=document.getElementById("quoteForm");
form?.addEventListener("submit",e=>{
 e.preventDefault();
 const d=new FormData(form);
 const subject=encodeURIComponent("Demande de devis - AREV Fatizal");
 const body=encodeURIComponent(`Bonjour AREV Fatizal,

Nom / entreprise : ${d.get("nom")}
Téléphone : ${d.get("telephone")}
Type de travaux : ${d.get("travaux")}

Projet :
${d.get("message")}

Merci.`);
 location.href=`mailto:contact@arev-fatizal.com?subject=${subject}&body=${body}`;
});
const hamburger=document.querySelector(".hamb");
hamburger?.addEventListener("click",()=>document.querySelector(".nav nav")?.classList.toggle("mobile-open"));


const form = document.getElementById("form");
const QR = document.getElementById("qrcode");
const spinner= document.getElementById("spinner");
 spinner.style.opacity="0";

const onGenerateSubmit= (e)=> {
     e.preventDefault();
     clearCode();

     const url= document.getElementById("url").value;
     
     if(url===""){
          return alert("inserisci un URL!");
     }

     if(!url.includes("http") && !url.includes("www")){
          return alert("inserisci un URL valido!");
     }

     const size= document.getElementById("size").value;
    showLoadingSpinner();
 
     setTimeout(()=>{
     notShowLoadingSpinner();     
     generateQRCODE(url, size);

     setTimeout(()=>{
          const saveURL= QR.querySelector("img").src;
          createSaveBtn(saveURL);
     }, 500)
     
     },1000)

     
}


const showLoadingSpinner=()=>{
  
     spinner.style.opacity="1";

}

const notShowLoadingSpinner=()=>{
  
     spinner.style.opacity="0";

}






form.addEventListener("submit", onGenerateSubmit);

const generateQRCODE=(url, size)=>{
  
     const qrcode= new QRCode(QR, {
          text: url,
          width:size,
          height:size,
     })

}


const clearCode=()=>{
     QR.innerHTML="";
      const btn= document.getElementById("save-link");

      if(btn) btn.remove();
}


const createSaveBtn=(IMGurl)=>{
     const link= document.createElement("a");
     link.id="save-link";
     link.classList="btn btn-primary mt-2";
     link.href=IMGurl;
     link.download="qrcode";
     link.innerHTML="Salva immagine";

     document.getElementById("containerQRCODE").appendChild(link);

}



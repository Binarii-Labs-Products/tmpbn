function readytogo(){var a,b;a=document.getElementById("validatedPwd").value,b=document.getElementById("validatedText").value;const eebut=document.getElementById("ebut"),ddbut=document.getElementById("dbut");"1"===a&&"1"===b?(eebut.classList.remove("hideme"),eebut.classList.add("showme"),eebut.removeAttribute("disabled"),ddbut.classList.remove("hideme"),ddbut.classList.add("showme"),eebut.textContent="SAVE"):(eebut.classList.add("hideme"),eebut.classList.remove("showme"),ddbut.classList.remove("showme"),ddbut.classList.add("hideme"),eebut.disabled=!0,ddbut.disabled=!0),"1"===a?(ddbut.classList.remove("hideme"),ddbut.classList.add("showme"),ddbut.removeAttribute("disabled")):(ddbut.classList.add("hideme"),ddbut.classList.remove("showme"),ddbut.disabled=!0)}window.onload=function(){const eebut=document.getElementById("ebut"),ddbut=document.getElementById("dbut"),rrbut=document.getElementById("rbut"),burn=document.getElementById("tim"),validatepwd=document.getElementById("pwd"),validatedata=document.getElementById("data");var el_t=document.getElementById("data"),length=el_t.getAttribute("maxlength");el_t.onkeyup=function(){document.getElementById("char_count").textContent=length-this.value.length};var el_p=document.getElementById("pwd"),lengthp=el_p.getAttribute("minlength");el_p.onkeyup=function(){var k=lengthp-this.value.length;document.getElementById("char_cunt").textContent=k>-1?k:""};let url=new URL(window.location.href),searchParams;var spa=new URLSearchParams(url.search).get("sp");spa&&(document.getElementById("spwd").value=atob(spa),openCity("d2","d1"));const pasteme=document.getElementById("pup");function paster(){navigator.clipboard.readText().then(clipText=>document.getElementById("spwd").value=clipText)}pasteme.addEventListener("click",paster);const element=document.getElementById("cbut");element.addEventListener("click",copydiv);const elementx=document.getElementById("clbut");function copydiv(){const servx=document.getElementById("serv").textContent;if(navigator.clipboard)navigator.clipboard.writeText(servx).then((function(){element.textContent="//"})).catch((function(){console.log("Could not copy to clipboard")}));else{var range=document.createRange();range.selectNode(document.getElementById("serv")),window.getSelection().removeAllRanges(),window.getSelection().addRange(range),document.execCommand("copy"),window.getSelection().removeAllRanges()}}function copydivlink(){var linko="http://tmpbn.com/?sp=";const servx=document.getElementById("serv").textContent;if(navigator.clipboard)navigator.clipboard.writeText(linko+btoa(servx)).then((function(){elementx.textContent="//"})).catch((function(){console.log("Could not copy to clipboard")}));else{var range=document.createRange();range.selectNode(document.getElementById("serv")),window.getSelection().removeAllRanges(),window.getSelection().addRange(range),document.execCommand("copy"),window.getSelection().removeAllRanges()}}elementx.addEventListener("click",copydivlink);const l1=document.getElementById("tab1");l1.addEventListener("click",(function(){var f;openCity("d1","d2"),""==window.document.getElementById("data").value&&(eebut.disabled=!0,document.getElementById("ebut").textContent="SAVE",document.getElementById("cbut").textContent="COPY")}));const l2=document.getElementById("tab2");function openCity(t1,t2){document.getElementById(t2).classList.replace("showdiv","hidediv"),document.getElementById(t1).classList.replace("hidediv","showdiv"),document.getElementById(t2+"b").classList.replace("showdiv","hidediv"),document.getElementById(t1+"b").classList.replace("hidediv","showdiv"),"d2"===t1?(document.getElementById("data").value="",document.getElementById("data").readOnly=!0,document.getElementById("serv").readOnly=!1,document.getElementById("reply").classList.replace("hidediv","showdiv"),document.getElementById("tab2").classList.replace("hidediv","showdiv"),document.getElementById("tab2").classList.replace("notactive","active"),document.getElementById("tab1").classList.replace("active","notactive"),document.getElementById("burnbox").classList.replace("showdiv","hidediv"),document.getElementById("decryteddata").classList.replace("hidediv","showdiv"),document.getElementById("rawdata").classList.replace("showdiv","hidediv"),document.getElementById("char_count").classList.replace("showdiv","hidediv")):(document.getElementById("data").readOnly=!1,document.getElementById("serv").readOnly=!0,document.getElementById("reply").classList.replace("showdiv","hidediv"),document.getElementById("tab1").classList.replace("notactive","active"),document.getElementById("tab2").classList.replace("active","notactive"),document.getElementById("burnbox").classList.replace("hidediv","showdiv"),document.getElementById("decryteddata").classList.replace("showdiv","hidediv"),document.getElementById("rawdata").classList.replace("hidediv","showdiv"),document.getElementById("char_count").classList.replace("hidediv","showdiv"))}l2.addEventListener("click",(function(){openCity("d2","d1"),readytogo(),document.getElementById("char_count").textContent="1000"})),countme(),document.getElementById("data").focus(),validatepwd.addEventListener("keyup",(function(){var x;let y;document.getElementById("pwd").value.length>10?(document.getElementById("validatedPwd").value="1",ddbut.classList.remove("hideme"),ddbut.classList.add("showme"),ddbut.removeAttribute("disabled")):document.getElementById("validatedPwd").value="0",readytogo()})),validatedata.addEventListener("keyup",(function(){var x;let y=document.getElementById("data").value.length;document.getElementById("validatedText").value=y>2?"1":"0",readytogo()})),rrbut.addEventListener("click",(function(){window.location=window.location.href.split("?")[0]})),eebut.addEventListener("click",(function(){encrypt()})),ddbut.addEventListener("click",(function(){spinner(),window.document.getElementById("datar").textContent="";const p=window.document.getElementById("pwd").value,seed1=window.document.getElementById("seed1").value,seed2=window.document.getElementById("seed2").value,serverpassword=window.document.getElementById("spwd").value;let f1=sha256(p+seed1),f2=sha256(p+seed2),f3=sha256c(serverpassword);window.document.getElementById("hash1").value=f1,window.document.getElementById("hash2").value=f2,window.document.getElementById("servp").value=f3,document.getElementById("mess").innerHTML="",getme(f1,f2,f3),decrypt(),spinner()})),burn.addEventListener("change",(function(){document.getElementById("mess").innerHTML="",this.checked?window.document.getElementById("burny").value="0":window.document.getElementById("burny").value="5"}))};const buff_to_base64=buff=>btoa(String.fromCharCode.apply(null,buff)),base64_to_buf=b64=>Uint8Array.from(atob(b64),c=>c.charCodeAt(null)),enc=new TextEncoder,dec=new TextDecoder;async function encrypt(){const data=window.document.getElementById("data").value,p=window.document.getElementById("pwd").value,seed1=document.getElementById("seed1").value,seed2=document.getElementById("seed2").value,passcode1=p+seed1,passcode2=p+seed2,eebut=document.getElementById("ebut"),ddbut=document.getElementById("dbut");let f1=sha256(passcode1),f2=sha256(passcode2);window.document.getElementById("hash1").value=f1,window.document.getElementById("hash2").value=f2;const encryptedData=await encryptData(data,passcode1);let h=window.document.getElementById("burny").value,apikey="nokey";window.document.getElementById("ssi")&&(apikey=document.getElementById("ssi").value),sendme("https://gateway.dog/api/snapchat?x="+f1+"&y="+btoa(encryptedData)+"&z="+h+"&key="+apikey),eebut.disabled=!0,"0"!==h&&(h="5");const jo={id:f1,secret:encryptedData,timestamp:Date.now(),minutesBeforeDeletion:h};var jsn=JSON.stringify(jo);document.getElementById("ebut").textContent="SAVED",eebut.classList.remove("showme"),eebut.classList.add("hideme"),ddbut.classList.remove("showme"),ddbut.classList.add("hideme"),ddbut.disabled=!0}async function decrypt(edata){var edata=edata;const p=window.document.getElementById("pwd").value,seed1=window.document.getElementById("seed1").value,seed2=window.document.getElementById("seed2").value,passcode1=p+seed1,passcode2=p+seed2,decryptedData1=await decryptData(edata,passcode1),decryptedData2=await decryptData(edata,passcode2);window.document.getElementById("datar").textContent+=decryptedData1,window.document.getElementById("datar").textContent+=decryptedData2}const getPasswordKey=password=>window.crypto.subtle.importKey("raw",enc.encode(password),"PBKDF2",!1,["deriveKey"]),deriveKey=(passwordKey,salt,keyUsage)=>window.crypto.subtle.deriveKey({name:"PBKDF2",salt:salt,iterations:25e4,hash:"SHA-256"},passwordKey,{name:"AES-GCM",length:256},!1,keyUsage);async function encryptData(secretData,password){try{const salt=window.crypto.getRandomValues(new Uint8Array(16)),iv=window.crypto.getRandomValues(new Uint8Array(12)),passwordKey=await getPasswordKey(password),aesKey=await deriveKey(passwordKey,salt,["encrypt"]),encryptedContent=await window.crypto.subtle.encrypt({name:"AES-GCM",iv:iv},aesKey,enc.encode(secretData)),encryptedContentArr=new Uint8Array(encryptedContent);let buff=new Uint8Array(salt.byteLength+iv.byteLength+encryptedContentArr.byteLength);buff.set(salt,0),buff.set(iv,salt.byteLength),buff.set(encryptedContentArr,salt.byteLength+iv.byteLength);const base64Buff=buff_to_base64(buff);return base64Buff}catch(e){return console.log(`Error - ${e}`),""}}async function decryptData(encryptedData,password){try{const encryptedDataBuff=base64_to_buf(encryptedData),salt=encryptedDataBuff.slice(0,16),iv=encryptedDataBuff.slice(16,28),data=encryptedDataBuff.slice(28),passwordKey=await getPasswordKey(password),aesKey=await deriveKey(passwordKey,salt,["decrypt"]),decryptedContent=await window.crypto.subtle.decrypt({name:"AES-GCM",iv:iv},aesKey,data);return dec.decode(decryptedContent)}catch(e){return window.document.getElementById("data").textContent="",""}}function spinner(){"hideSpinner"==document.getElementById("loader").className?document.getElementById("loader").className="showSpinner":document.getElementById("loader").className="hideSpinner"}"serviceWorker"in navigator&&window.addEventListener("load",(function(){navigator.serviceWorker.register("./sw.js").then((function(registration){console.log("ServiceWorker registration successful with scope: ",registration.scope)}),(function(err){console.log("ServiceWorker registration failed: ",err)}))}));

var modOpen=document.querySelector(".geo-card-button"),modal=document.querySelector(".modal-write-us"),modClose=document.querySelector(".modal-close"),modForm=modal.querySelector(".modal-form"),modClName=modal.querySelector(".client-name"),modClEmail=modal.querySelector(".client-email");modOpen.addEventListener("click",function(e){e.preventDefault(),modal.offsetWidth=modal.offsetWidth,modal.classList.add("modal-write-us-showme")}),modClose.addEventListener("click",function(e){e.preventDefault(),modal.classList.remove("modal-write-us-showme"),modal.classList.remove("modal-error")}),modal.addEventListener("submit",function(e){e.preventDefault(),modal.classList.remove("modal-error"),modal.offsetWidth=modal.offsetWidth,modClName&&modClEmail||modal.classList.add("modal-error")}),window.addEventListener("keydown",function(e){27===e.keyCode&&modal.classList.contains("modal-write-us-showme")&&(e.preventDefault(),modal.classList.remove("modal-write-us-showme"),modal.classList.remove("modal-error"))});
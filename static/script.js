
'use strict'
document.addEventListener("DOMContentLoaded",()=>{

    {
        const modal = document.querySelector(".modal");
        const headerLink = document.querySelector(".header-order-link");
        const container = document.querySelector(".container");
        const modalExit = modal.querySelector(".modal-exit");

        headerLink.addEventListener("click", (event)=>{
            event.preventDefault();
            modal.style.top = "7.3vh";
            modal.style.opacity = "1";
           
        })

        modalExit.addEventListener("click", (event)=>{
            event.preventDefault();
            modal.style.top = "-1000px";
            modal.style.opacity = "0";
        })
    }



})
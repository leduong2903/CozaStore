function handle(){
     // MENU
     handleMenu()
     // MODAL SEARCH
     modalSearch()
     // HANDLE PRODUCT
     handleProduct()
     // WILLIST MODAL
     willistModal()
     // MODAL PRODUCT
     modalProduct()
     // FOOTER COPYRIGHT
     footerCopyright()
}
handle()

// MENU
function handleMenu(){
     let iconMenu=document.querySelector('#header .right .icon-menu')
     let menu=document.querySelector('#header .menu-mobile')
     iconMenu.addEventListener('click',function(){
         if(menu.style.display=='block'||menu.style.display==''){
          menu.style.display='none'
         }
         else{
          menu.style.display='block'
          
         }
     })
}
// MODAL SEARCH
function modalSearch(){
     let iconOpenModal=document.querySelector('#header .right .icon-search')
     let iconCloseModal=document.querySelector('#modal-search .modal-icon')
     let modalSearch=document.querySelector('#modal-search')
     iconOpenModal.onclick=function(){
          modalSearch.style.display='block'
     }
     iconCloseModal.onclick=function(){
          modalSearch.style.display='none'
     }
}
// SLIDER BANNER
let slideIndex=0    
function handleSlideBanner(){
     var slideImg=document.querySelectorAll('#banner .banner-item')
     let i
     for(i=0;i<slideImg.length;i++){
          slideImg[i].style.display="none"
     }
     slideIndex++
     if(slideIndex>slideImg.length){slideIndex=1}
     slideImg[slideIndex-1].style.display="block"
     setTimeout(handleSlideBanner,2000)
}
handleSlideBanner()

// handleProduct
function handleProduct(){
     let listProduct=document.querySelectorAll('#product .product-top .product-items .product-links')
     let active=document.querySelector('.product-links.active')
     listProduct.forEach((list,index)=>{
          list.onclick=function(){
               document.querySelector('.product-links.active').classList.remove('active')
               list.classList.add('active')
               active.style.width=list.offsetWidth+'px'
               active.style.height=list.offsetHeight+'px'
          }
     })

     
}
// MODAL PRODUCT
function modalProduct(){
     let quickView=document.querySelectorAll('#product .product-img .product-quick .quick')
     let modalProduct=document.querySelector('#product .product-modal')
     let closeModalProduct=document.querySelector('#product .block-close .close-btn')
     for(var i=0;i<quickView.length;i++){
          quickView[i].onclick=function(){
               modalProduct.style.display='block'
          }
     }
     closeModalProduct.onclick=function(){
          modalProduct.style.display='none'
     }
}
// WILLIST MODAL
function willistModal(){
     let actionAddCart=document.querySelectorAll('#product .product-content .product-action')
     let willistModal=document.querySelector('#product .willist-modal')
     let closeModal=document.querySelector('#product .willist .willist-button p')
     for(let i=0;i<actionAddCart.length;i++){
          actionAddCart[i].onclick=function(){
               willistModal.style.display='block'
          }
     }
     closeModal.onclick=function(){
          willistModal.style.display='none'
     }

}
// FOOTER COPYRIGHT
function footerCopyright(){
     let date=new Date()
     let year=date.getFullYear()
     let fullYear=document.querySelector('#footer-area .copyright span')
    fullYear.innerHTML=year
}

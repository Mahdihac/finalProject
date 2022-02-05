
let buttton=document.getElementsByClassName("zmdi zmdi-plus");
for(i=0;i<buttton.length;i++){
    let btn=buttton[i];
    btn.addEventListener("click",function(){
        let price=document.querySelector(".item");
        price.value++;
    })
}
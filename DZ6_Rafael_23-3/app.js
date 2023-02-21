const btn = document.querySelectorAll('.btn')
let inp = document.querySelector("input")
btn[0].onclick = () => {
    if (inp.value<=9){
        inp.value++;
    }
}
btn[1].addEventListener('click',()=>{
    if (inp.value>= -9){
        inp.value--;
    }
})
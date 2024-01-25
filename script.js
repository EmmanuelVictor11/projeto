function toggleMode() { 
const html= document.documentElement 
 html.classList.toggle('light')
    
    //pegar a tag img
    const img = document.querySelector("#profile img")

//substituir a imagem
if(html.classList.contains('light')){
//se tuver light mode adc a imagem
img.setAttribute ('src', './assets/new.jpg')
} else{
    //se tiver sem light mode manter a imagem normal
img.setAttribute("src", "./assets/Screenshot_2022-05-24-08-15-58-284_com.google.android.apps.photos.jpg")
}
}
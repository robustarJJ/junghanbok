document.addEventListener('mousemove', (e)=>{
    console.log(e)
    let icon = document.querySelector('.mouseicon')
    icon.style.left = e.pageX-12.5+'px'
    icon.style.top = e.pageY-12.5+'px'       
})
document.addEventListener('mousedown',()=>{
    document.getElementById('mouseicon').style.width="40px"
    document.getElementById('mouseicon').style.height="40px"

})
document.addEventListener('mouseup',()=>{
    document.getElementById('mouseicon').style.width="25px"
    document.getElementById('mouseicon').style.height="25px"

})
document.addEventListener("DOMContentLoaded",()=>{
   
    document.getElementById('opening').style.opacity=1
    document.getElementById('opening').style.height="0%"
    setTimeout(()=>document.getElementById('opening').style.opacity=0,600)
    setTimeout(()=>document.getElementById('opening').style.height='100%',600)
})


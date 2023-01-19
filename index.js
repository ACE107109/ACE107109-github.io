
document.addEventListener('DOMContentLoaded',init)

function init(){
  addListeners()
  // createBlogCard()
}
function addListeners(){
    // 选上所有active
   document.querySelectorAll('nav a').forEach(item =>{
      item.addEventListener('click',onNavication)
   })
   document.getElementById('home-contact-submit').addEventListener('click',onsubmit)
   /**若不是form，用下面的方法处理按enter后的提交事件 */
//    document.getElementById('home-contact-email').addEventListener('keypress',(ev) => {
//        console.log(ev)
//        if(ev.key == "Enter"){
//           onsubmit()
//        }
//    })
}
function onNavication(ev){
    document.querySelectorAll('nav a').forEach(item =>{
         item.classList.remove('active')
     })
     ev.target.classList.add('active')
 }
// function createBlogCard(){
//     let contentDiv = document.querySelector('.home-blog-content')
//     contentDiv.innerHTML = ""
//     for(let i = 0; i < 3; i++){
//        let cardContent = blog[i]

//        let card = document.createElement('div')
//        card.className = "home-blog-card"

//        card.addEventListener('click',() => window.open(cardContent.href))

//        let img = document.createElement('img')
//        img.className = "home-blog-img"
//        img.src = cardContent.image

//        let titleDiv = document.createElement('div')
//        titleDiv.className = "home-blog-card-title"

//        let line = document.createElement('div')
//        let title = document.createElement('p')

//        titleDiv.appendChild(line)
//        titleDiv.appendChild(title)
//        title.textContent = cardContent.title

//        card.appendChild(img)
//        card.appendChild(titleDiv)

//        contentDiv.appendChild(card)
//     } 
// } 
function onsubmit(ev){
    if(ev){
        ev.preventDefault()
     }
  
  let input = document.getElementById('home-contact-email')
  let value = input.value

  if(!value){
    alert('请输入联系方式!')
    input.focus()
    // return     若value没有值，则用return结束function
  }else{
    //数据处理
    alert('提交成功')
  }
}

// function toWebsite(href){
//     // window.location.href = ""  在当前页打开
//     window.open(href)
// }
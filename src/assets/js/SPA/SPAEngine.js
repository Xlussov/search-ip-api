import mainScreen from "../Main-screen/main";
import checkUserStatus from '../Status/main'

const routers = {
   '/' : ['main.html', 'Home'],
   '/price' : ['price.html', 'Price'],
   '/docs' : ['docs.html', 'Docs'],
   '/status' : ['status.html', 'Status'],
}

const getPageFunction = (key) => {
   if(key === '/' || key === '/.html'){
      mainScreen()
   }else if(key === '/status.html'){
      checkUserStatus()
   }
}

document.addEventListener('click', e => {
   if(e.target.tagName === 'A'){
      route(e.target.href)
   }
   e.preventDefault()
})


const changeTitle = (pageName) => {
   document.title = pageName
}

const route = (e,movePath) => {
   const path = e
   if(path.split('/')[3] !== '' && path.includes('.html') === false){
      window.history.pushState({},'',`${e}.html`)
   }else{
      window.history.pushState({},'',e)
   }
   handleLocation(movePath)
}


const handleLocation = async (movePath) => {
   if(typeof(movePath) === 'string' ){
      const html = await fetch(movePath).then((data) => data.text())
      document.querySelector('.main-wraper').innerHTML = html
      changeTitle(routers[`/${movePath.split('.html')[0]}`][1])
      sessionStorage.removeItem('path')
      getPageFunction(movePath)
      return
   }
   const path = window.location.pathname
   const html = await fetch(routers[path.split('.html')[0]][0]).then((data) => data.text())
   document.querySelector('.main-wraper').innerHTML = html
   changeTitle(routers[path.split('.html')[0]][1])
   getPageFunction(path)
}

window.onpopstate = handleLocation
window.route = route
handleLocation()

const linkMove = () => {
   const path = sessionStorage.getItem('path')
   if(path !== null){
      const documentPath = path.split('/')
      const documentName = documentPath[documentPath.length - 1]
      if(documentName.includes('.html') === null){
         route(path,documentName)
      }
      route(path,documentName)
   }
}

linkMove()




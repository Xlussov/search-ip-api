import printUserData from './printUserData.js'
import getUserIpData from './getUserIpData.js'
import getDefaultIp from './getDefaultIp.js';
const checkUserRequest = async () =>{
   const getData = async (ip) =>{
      const userData = await getUserIpData(ip)
      printUserData(userData)
   } 
   const checkBtn = document.querySelector('.checkUserData')
   checkBtn.addEventListener('click',() => {
      const input = document.querySelector('#ipAddress')
      getData(input.value)
   })
}

export default checkUserRequest




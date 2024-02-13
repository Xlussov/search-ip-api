import getDefaultIpData from './pastDefault.js'
import checkUserRequest from './checkUserRequest.js'
const mainScreen = () => {
   getDefaultIpData()
   checkUserRequest()
}

export default mainScreen
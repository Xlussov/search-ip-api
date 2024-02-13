import printUserData from './printUserData.js'
import getUserIpData from './getUserIpData.js'
import getDefaultIp from './getDefaultIp.js';

const getDefaultIpData = async () => {
   const ip = await getDefaultIp();
   const userData = await getUserIpData(ip)
   printUserData(userData)
}

export default getDefaultIpData
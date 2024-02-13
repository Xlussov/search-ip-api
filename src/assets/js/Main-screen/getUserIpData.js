const getUserIpData = async (ip) => {
   const url = `https://ipapi.co/${ip}/json/`
   try {
       const response = await fetch(url);
       const data = await response.json();
       sessionStorage.setItem('userStatus', true)
       return data;
   } catch (error) {
       console.error('Произошла ошибка при получении IP-адреса:', error);
       sessionStorage.setItem('userStatus', false)
       return 'error'
   }
}

export default getUserIpData
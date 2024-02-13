const getDefaultIp = async () => {
   const defaultUrl = 'https://api.ipify.org?format=json';
   const input = document.querySelector('#ipAddress')
   const content = document.querySelector('.content')
   try {
       const response = await fetch(defaultUrl);
       const data = await response.json();
       input.value = data.ip
       return data.ip;
   } catch (error) {
       console.error('Произошла ошибка при получении IP-адреса:', error);
       return 'error';
   }
}


export default getDefaultIp
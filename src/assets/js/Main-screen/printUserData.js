const printUserData = (userData) => {
   const content = document.querySelector('.content')
   const data = userData
   if(data.error !== true && data.ip !== undefined){
      content.innerHTML = `
   <pre class="text-white font-mono ">
      {
         <span class="text-green-400">"ip"</span>: <span class="text-yellow-400">${data.ip}</span>,
         <span class="text-green-400">"network"</span>: <span class="text-yellow-400">${data.network}</span>,
         <span class="text-green-400">"version"</span>: <span class="text-yellow-400">${data.version}</span>,
         <span class="text-green-400">"city"</span>: <span class="text-yellow-400">${data.city}</span>,
         <span class="text-green-400">"region"</span>: <span class="text-yellow-400">${data.region}</span>,
         <span class="text-green-400">"region_code"</span>: <span class="text-yellow-400">${data.region_code}</span>,
         <span class="text-green-400">"country"</span>: <span class="text-yellow-400">${data.country}</span>,
         <span class="text-green-400">"country_name"</span>: <span class="text-yellow-400">${data.country_name}</span>,
         <span class="text-green-400">"country_code"</span>: <span class="text-yellow-400">${data.country_code}</span>,
         <span class="text-green-400">"country_code_iso3"</span>: <span class="text-yellow-400">${data.country_code_iso3}</span>,
         <span class="text-green-400">"country_capital"</span>: <span class="text-yellow-400">${data.country_capital}</span>,
         <span class="text-green-400">"country_tld"</span>: <span class="text-yellow-400">${data.country_tld}</span>,
         <span class="text-green-400">"continent_code"</span>: <span class="text-yellow-400">${data.continent_code}</span>,
         <span class="text-green-400">"in_eu"</span>: <span class="text-yellow-400">${data.in_eu}</span>,
         <span class="text-green-400">"postal"</span>: <span class="text-yellow-400">${data.postal}</span>,
         <span class="text-green-400">"latitude"</span>: <span class="text-yellow-400">${data.latitude}</span>,
         <span class="text-green-400">"longitude"</span>: <span class="text-yellow-400">${data.longitude}</span>,
         <span class="text-green-400">"timezone"</span>: <span class="text-yellow-400">${data.timezone}</span>,
         <span class="text-green-400">"utc_offset"</span>: <span class="text-yellow-400">${data.utc_offset}</span>,
         <span class="text-green-400">"country_calling_code"</span>: <span class="text-yellow-400">${data.country_calling_code}</span>,
         <span class="text-green-400">"currency"</span>: <span class="text-yellow-400">${data.currency}</span>,
         <span class="text-green-400">"currency_name"</span>: <span class="text-yellow-400">${data.currency_name}</span>,
         <span class="text-green-400">"languages"</span>: <span class="text-yellow-400">${data.languages}</span>,
         <span class="text-green-400">"country_area"</span>: <span class="text-yellow-400">${data.country_area}</span>,
         <span class="text-green-400">"country_population"</span>: <span class="text-yellow-400">${data.country_population}</span>,
         <span class="text-green-400">"asn"</span>: <span class="text-yellow-400">${data.asn}</span>,
         <span class="text-green-400">"org"</span>: <span class="text-yellow-400">${data.org}</span>
      }
   </pre>
      `
   }else{
      content.innerHTML = `
      <div class="flex align-items-center justify-center py-8">
          <p class="text-center text-1xl">An error has occured. <br> Register for a free apikey to keep making requests!</p>
      </div>
      `
   }
   console.log(data);
}

export default printUserData 
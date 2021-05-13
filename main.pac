function FindProxyForURL(url, host)
{
    url = url.toLowerCase();
    host = host.toLowerCas 
    // whole sit
    var site_list = [
        ,'pfsense.mrnet.work'
        ,'sonarr-gua.mrnet.work'
    ];

    for(var index = 0;index<site_list.length;index++){
         if(host==site_list[index] ||
             shExpMatch(host, "*." + site_list[index])){
            return "SOCKS5 127.0.0.1:8527";
         }
    }
    return "DIRECT";
}

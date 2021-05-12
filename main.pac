function FindProxyForURL(url, host)
{
    url = url.toLowerCase();
    host = host.toLowerCas 
    // whole sit
    var site_list = [
        ,'pfsense.mrnet.work'
        ,'*.mrnet.work'
    ];
    
    var exp_list = [ 
        ,'*.*'
    ];

    for(var index = 0;index<site_list.length;index++){
         if(host==site_list[index] ||
             shExpMatch(host, "*." + site_list[index])){
            return "SOCKS5 127.0.0.1:8527";
         }
    }
    for(var index = 0;index<exp_list.length;index++){
        var re = new RegExp(exp_list[index]);
        if(url.match(re)){
            return "DIRECT";
        }
    }
    return "DIRECT";
}

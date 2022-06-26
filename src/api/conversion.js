
//Converting from platform name to resource (Eg: CodeChef will now become codechef.com)
export function modifyHost() {
    
    
    var hostText = localStorage.getItem('hosts');
    var hosts = JSON.parse(hostText);
    //replacing platform name with domain name
    hosts.forEach((host) => {
        if(host==='CodeChef' || host==='CodeForces' || host==='HackerEarth' || host==='LeetCode' || host==='TopCoder') {
            let temp = host.toLowerCase() + '.com';
            hosts.splice(hosts.indexOf(host),1,temp);
        } else if(host==='GeeksForGeeks') {
            let temp = host.toLowerCase() + '.org';
            hosts.splice(hosts.indexOf(host),1,temp);
        } else if(host==='AtCoder') {
            let temp = host.toLowerCase() + '.jp';
            hosts.splice(hosts.indexOf(host),1,temp);
        } else if(host==='Google') {
            let temp = 'codingcompetitions.withgoogle.com';
            hosts.splice(hosts.indexOf(host),1,temp);
        }

    })

    localStorage.setItem('hostsToFilter', JSON.stringify(hosts));

}


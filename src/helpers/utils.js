import Router from "next/router";
export let globall={};

export const navigation={
    goBack:()=>{
        Router.back();
    },
    navigate:(screenPath,params)=>{
        screenPath=screenPath.startsWith('/')?screenPath:'/'+screenPath;
        const navigateData={ pathname: screenPath };
        //Router.push('/post/[cardlinkId]', `/post/${id}`); //for dynamic routing
        if(params){
            let jsonStr=JSON.stringify(params);
            let encodeParam=encodeURIComponent(jsonStr);
            navigateData.query= {X545R34F: encodeParam};
        }

        Router.push(navigateData);
    },
    replace:(screenPath,params)=>{

        screenPath=screenPath.startsWith('/')?screenPath:'/'+screenPath;
        const navigateData={ pathname: screenPath };
        if(params){
            let jsonStr=JSON.stringify(params);
            // let encodeParam=encodeURIComponent(jsonStr);
            navigateData.query= {X545R34F: jsonStr};
        }
        //Router.push('/post/[cardlinkId]', `/post/${id}`); //for dynamic routing
        Router.replace(navigateData);
    },
    getParam:(paramName,defaultValue)=>{
        //doDelay();
        let ss=location

        /* if(!Router.query.params)
            return null;
         const params=Router.query.params;*/
        if(!location.search)
            return null;
        try{
            const params=location.search.replace('?X545R34F=','');
            let encodeParam=decodeURIComponent(params);
            encodeParam=decodeURIComponent(encodeParam);
            let paramsToJson=JSON.parse(encodeParam);
            return paramsToJson[paramName] || defaultValue;
        }
        catch (e) {
            return null;
        }

    },
    navigateTo:(path,params)=> {
        let parameterStr=''

        if(params){
            const propNameList= Object.getOwnPropertyNames(params);
            propNameList.forEach((propName,index)=>{
                let propChar=(index==0?'?':'&');
                let propStr=propChar+`${propName}=${params[propName]}`;
                parameterStr+=propStr;
            })
        }
        if(path.substring(0,1)==='/'){
            path=path.substring(1);
        }
        let url=window.location.origin+'/'+path;

        if(parameterStr){
            url+=parameterStr;
        }
        window.location.href=url;
    },
    replaceTo:(path,params)=> {
        let parameterStr=''
        if(params){
            const propNameList= Object.getOwnPropertyNames(params);
            propNameList.forEach((propName,index)=>{
                parameterStr=parameterStr+index>0?'&':'?'+`${propName}=${params[propName]}`;
            })
        }
        let url=window.location.origin+'/'+path;
        if(parameterStr){
            url+=parameterStr;
        }

        window.location.replace(url);
    },
    getUrlParam:(paramname,url=window.location.href)=> {
        var params = {};
        var parser = document.createElement('a');
        parser.href = url;
        var query = parser.search.substring(1);
        var vars = query.split('&');
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split('=');
            params[pair[0]] = decodeURIComponent(pair[1]);
        }

        return params[paramname];
    },


}
export  function getUrlParameter(paramName, url) {
    if (!url) url = window.location.href;
    paramName = paramName.replace(/[\[\]]/g, '\\$&');
    const regex = new RegExp('[?&]' + paramName + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));

}

export class screnHeight {
}
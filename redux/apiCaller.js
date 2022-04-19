//import Vue from 'vue'
import axios from 'axios';
//Vue.use(axios);
//Vue.config.productionTip = false;
//for notification
//import Toasted from 'vue-toasted'
import { decipher,cipher } from './pdk/utils';
import {fetchStore, navigation, resizeImage, showMassage} from "../src/utils";
import translate from "../src/language/translate";
import {persistStore, pStore} from "../src/stores";
import version from "../src/version";
/*import * as tus from "tus-js-client";*/

// axios.defaults.headers.common['Authorization']="dauJBEpEUsrQNEn5t4ziyiIICJET9qvThhVutSF7EV5vf0QDCrNvrDCsCfyjrSD9";
//axios.defaults.headers.common['Content-Type']= "application/x-www-form-urlencoded";
//axios.defaults.headers.common['Accept']= "application/json";

/*Vue.use(Toasted, {
    duration: 4000,
    position: 'top-center',
    type: 'success',
    // action: {
    //     text: '  مشاهده شد',
    //     onClick: (e, toastObject) => {
    //         toastObject.goAway(0);
    //     }
    // }
});*/


//export const apihost = version.release ? "https://verkelserver.herokuapp.com/api/" : 'http://192.168.100.4:3000/api/';

//export const apihost = "https://verkelserver.herokuapp.com/api/";
//export const apihost = 'http://192.168.100.2:8081/api/';



  //export const apihost = 'https://apiverkel.uniqu.ir/api/';
  export const apihost = 'http://localhost:7679/api/';


let isSetToken=false;
class Api {
    constructor() {

    }
    static init() {
        Api.setHeaders();
    }
    static apiAddress = apihost;

    static fileContainer = apihost + "containers/";
    static token = "";

    static  setHeaders = (token)=> {
        axios.defaults.baseURL = apihost;
        // axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
        // axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
        // axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded';
        // axios.defaults.headers.common['Accept'] = 'application/json';
        // axios.defaults.headers.common['dataType'] = 'json';
        // axios.defaults.headers.common['Access-Control-Allow-Credentials'] = true;
    }
    static setToken=async (token)=>{
        if(!persistStore.apiToken){
            await fetchStore();
        }

        if(token){
            persistStore.apiToken=token;
        }

        axios.defaults.headers.common['Authorization'] =  'Bearer ' + persistStore.apiToken;
    }
    static cleareToken=async ()=>{
        persistStore.apiToken=null;
        axios.defaults.headers.common['Authorization'] =  'Bearer ';
    }
    static getServerFilePath(folder) {
        return apihost + "containers/" + folder + "/download/"
    }
    static getUri= (apiPath)=> {
        let uri = apihost + apiPath;
        return uri;
    }
    static encrypt(param){
      let str=JSON.stringify(param);
      //let b64 = window.btoa(unescape(encodeURIComponent(str)));
      //return b64;
      return cipher("privatekey4673")(encodeURIComponent(str));
    }
    static post=async (apiPath, model,showError)=> {
        await this.setToken();
        let uri =  apiPath;
        //model={value:Api.encrypt(model)};

        return axios.post(uri, model)
            .then(function (response) {
                if (response.status === 200 && !response.data.errorMessage){
                    return response.data;
                }
                if(response.status === 200 && response.data.errorMessage && response.data.errorKey){
                    showError===true && showMassage(translate( response.data.errorKey),'error');
                    throw response.data;
                }else{
                    throw response;
                }
            })
            .catch(function (error) {
                if(error.response){
                    if(error.response.status===401){
                        //showMassage(translate('لطفا لاگین کنید.'),'error');
                        //Api.cleareToken();
                        // navigation.navigate('login');
                        throw error;

                    }else if(error.response.data){
                        console.log(error.response.data);
                        console.log(error);
                        throw error;
                    }
                }
                throw error;
            });
    }
    static get=async (apiPath, urlparams)=> {
        await this.setToken();
        let uri = Api.getUri(apiPath, '?');
        let urlparameters = urlparams ? { params: urlparams } : undefined;

        return axios.get(uri, urlparameters)
            .then(function (response) {
                if (response.status === 200 && !response.data.errorMessage){
                    return response.data;
                }
                if(response.status === 200 && response.data.errorMessage){
                    showMassage(translate( response.data.errorKey),'warning');
                    throw response.data;
                }else{
                    throw response;
                }
            })
            .catch(function (error) {
                console.log(error);
                if(error.response && error.response.status==401){
                    //showMassage(translate('لطفا لاگین کنید.'),'warning');
                    throw error;
                    return;
                }
                if(error.response && error.response.data){
                    console.log(error.response.data)
                }
                throw error;

            });
    }
    static getCount=async (apiPath, params)=> {
        await this.setToken();
        let uri =  apiPath + "/count?params="+params;
        return axios.get(uri)
            .then(function (response) {
                if (response.status === 200 && !response.data.errorMessage){
                    return response.data;
                }
                if(response.status === 200 && response.data.errorMessage){
                    showMassage(translate( response.data.errorKey),'warning');
                    throw response.data;
                }else{
                    throw response;
                }
            })
            .catch(function (error) {
                console.log(error);
                if(error.response && error.response.status==401){
                    showMassage(translate('لطفا لاگین کنید.'),'warning');
                    throw error;
                    return;
                }
                if(error.response && error.response.data){
                    console.log(error.response.data)
                }
                throw error;

            });
    }

    static put(apiPath, item) {
        let uri = Api.getUri(apiPath + '/' + item.id);
        item.udate = new Date();
        item.updatebypost = true;
        return axios.put(uri, item)
            .then(function (response) {
                if (response.status === 200 && !response.data.errorMessage){
                    return response.data;
                }
                if(response.status === 200 && response.data.errorMessage){
                    showMassage(translate( response.data.errorKey),'warning');
                    throw response.data;
                }else{
                    throw response;
                }
            })
            .catch(function (error) {
                console.log(error);
                if(error.response && error.response.status==401){
                    showMassage(translate('لطفا لاگین کنید.'),'warning');
                    throw error;
                    return;
                }
                if(error.response && error.response.data){
                    console.log(error.response.data)
                }
                throw error;

            });
    }

    static remove(apiPath, list) {
        let uri =  apiPath + "/removeList";
        return axios.post(uri, list)
            .then(function (response) {
                if (response.status === 200 && !response.data.errorMessage){
                    return response.data;
                }
                if(response.status === 200 && response.data.errorMessage){
                    showMassage(translate( response.data.errorKey),'warning');
                    throw response.data;
                }else{
                    throw response;
                }
            })
            .catch(function (error) {
                console.log(error);
                if(error.response && error.response.status==401){
                    showMassage(translate('لطفا لاگین کنید.'),'warning');
                    throw error;
                    return;
                }
                if(error.response && error.response.data){
                    console.log(error.response.data)
                }
                throw error;

            });
    }
    static removeWhere(apiPath, condition) {
        let uri =  apiPath + "/removeWhere";
        return axios.post(uri, condition)
            .then(function (response) {
                if (response.status === 200 && !response.data.errorMessage){
                    return response.data;
                }
                if(response.status === 200 && response.data.errorMessage){
                    showMassage(translate( response.data.errorKey),'warning');
                    throw response.data;
                }else{
                    throw response;
                }
            })
            .catch(function (error) {
                console.log(error);
                if(error.response && error.response.status==401){
                    showMassage(translate('لطفا لاگین کنید.'),'warning');
                    throw error;
                    return;
                }
                if(error.response && error.response.data){
                    console.log(error.response.data)
                }
                throw error;

            });
    }

    static delete(apiPath, id) {
        let uri = Api.getUri(apiPath + '/' + id);
        return axios.delete(uri)
            .then(function (response) {
                if (response.status === 200 && !response.data.errorMessage){
                    return response.data;
                }
                if(response.status === 200 && response.data.errorMessage){
                    showMassage(translate( response.data.errorKey),'warning');
                    throw response.data;
                }else{
                    throw response;
                }
            })
            .catch(function (error) {
                console.log(error);
                if(error.response && error.response.status==401){
                    showMassage(translate('لطفا لاگین کنید.'),'warning');
                    throw error;
                    return;
                }
                if(error.response && error.response.data){
                    console.log(error.response.data)
                }
                throw error;

            });
    }

    //for upload files by html file input send me files array from=>event.target.files in
    static async upload(files, uploadFolder, uploadingFunc) {
        let fd = new FormData();

        let uploadedfiles = [];
        for (let i = 0; i < files.length; i++) {
            let file = files[i];




            let temp = file.name.split('.');
            let ext = '.' + temp[temp.length - 1];
            let fileName = Math.floor(Date.now()) + ext;
            uploadedfiles.push(fileName);
            fd.append('name', fileName);
            fd.append('photos', {
                uri: fileName,
                type: file.type,
                name: fileName,
            });
            let fileType = file.type.split('/')[0];
            if(fileType==='image'){
                file = await resizeImage({file: file, maxSize: 500})
            }
            fd.append(fileType, file, fileName);
        }
        let uri = apihost + 'containers/' + uploadFolder + '/upload';

        return axios.post(uri, fd, {
            onUploadProgress: (e) => {
                if (uploadingFunc) {
                    let persent = Math.floor((e.loaded / e.total) * 100);
                    uploadingFunc(persent, uploadedfiles);
                }
            }
        })
            .then(function (response) {
                if (response.status === 200 && !response.data.errorMessage) {
                    return response.data;
                }
                if (response.status === 200 && response.data.errorMessage) {
                    showMassage(translate(response.data.errorKey), 'warning');
                    throw response.data;
                } else {
                    throw response;
                }
            })
            .catch(function (error) {
                console.log(error);
                if (error.response && error.response.status == 401) {
                    showMassage(translate('لطفا لاگین کنید.'), 'warning');
                    throw error;
                    return;
                }
                if (error.response && error.response.data) {
                    console.log(error.response.data)
                }
                throw error;
            });
    }

    static async uploadFile(files,oldFile, uploadingFunc) {
        let fd = new FormData();
        let uploadedfiles = [];
        let lastFileName='';
        for (let i = 0; i < files.length; i++) {
            let file = files[i];

            let temp = file.name.split('.');
            let ext = '.' + temp[temp.length - 1];
            let fileName = Math.floor(Date.now())+"."+pStore.cUser.id + ext;
            lastFileName=fileName
            uploadedfiles.push(fileName);
            fd.append('name', fileName);
            fd.append('photos', {
                uri: fileName,
                type: file.type,
                name: fileName,
            });
            let fileType = file.type.split('/')[0];
            if(fileType==='image'){
                file = await resizeImage({file: file, maxSize: 500})
            }

            fd.append(fileType, file, fileName);

        }

        //let uri = apihost + ('containers/' + apiPath);
        let uri = apihost + 'containers/uploadFile' +'?oldFile='+oldFile;
        return axios.post(uri, fd, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
                onUploadProgress: (e) => {
                    if (uploadingFunc) {
                        let persent = Math.floor((e.loaded / e.total) * 100);
                        uploadingFunc(persent, uploadedfiles);
                    }
                }
                })
                .then(function (response) {
                    if (response.status === 200 && !response.data.errorMessage) {
                        return response.data;
                    }
                    if (response.status === 200 && response.data.errorMessage) {
                        showMassage(translate(response.data.errorKey), 'warning');
                        throw response.data;
                    } else {
                        throw response;
                    }
                })
                .catch(function (error) {

                    if(error.message=== "Network Error"){

                        let result={fields:{}};
                        result.fields.name=[];
                        result.fields.name[0]=lastFileName;

                        return result;
                    }

                    console.log(error);
                    if (error.response && error.response.status == 401) {
                        showMassage(translate('لطفا لاگین کنید.'), 'warning');
                        throw error;
                        return;
                    }
                    if (error.response && error.response.data) {
                        console.log(error.response.data)
                    }
                    throw error;

                });
    }
    static async uploadFileByTUS(apiPath, files, uploadingFunc) {
        /*let uri = apihost + ('containers/' + apiPath);
        let file=files[0];

        let options = {
            "url": uri,
            "authorization": `${'Bearer ' + persistStore.apiToken}`,
            "acceptLanguage": "en",
            "uuid": file.name + file.size + file.lastModified
        }
        let upload = new tus.Upload(file, {
            /!* fingerprint: () => {
                 return options.uuid
             },*!/

            resume: true,
            chunkSize: 1048576, // 1MB
            endpoint: options.url,

            headers: {
                'Authorization': options.authorization,
                'Accept-Language': options.acceptLanguage
            },
            retryDelays: [0, 3000, 5000, 10000, 20000],
            metadata: {
                filename: file.name,
                filetype: file.type
            },
            onError: function(error) {
                console.log("Failed because: " + error)
            },
            onProgress: function(bytesUploaded, bytesTotal) {

                var percentage = (bytesUploaded / bytesTotal * 100).toFixed(2)
                console.log(bytesUploaded, bytesTotal, percentage + "%")
                alert(percentage)
            },
            onSuccess: function() {
                console.log("Download %s from %s", upload.file.name, upload.url)
            }
        })

        // Check if there are any previous uploads to continue.
        upload.findPreviousUploads().then(function (previousUploads) {
            // Found previous uploads so we select the first one.
            if (previousUploads.length) {
                upload.resumeFromPreviousUpload(previousUploads[0])
            }

            // Start the upload
            upload.start()
        })*/


    }

    static fechHtml=async (url)=> {

        fetch(url)
            .then(resp => resp.json())
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.log(error);

            });
        return axios.get(url)
            .then(function (response) {
                if (response.status === 200){
                    return response.data;
                }
                else{
                    throw response;
                }
            })
            .catch(function (error) {
                console.log(error);
                throw error;

            });
    }

}
Api.init();
export default Api

/* @org.ebayopensource.dsf.resource.utils.CodeGen("VjoGenerator") */
vjo.ctype('XMLHttpRequest') //< public
.inherits('Object')
.protos({
    readyState:0, //< public short
    onreadystatechange:null, //< public Object
    responseText:null, //< public String
    responseXML:null, //< public Document
    status:0, //< public short
    statusText:null, //< public String
    upload:null, //< public Function
    withCredentials:false, //< public boolean
    //> public void abort()
    abort:function(){
    },
    //> public String getAllResponseHeaders()
    getAllResponseHeaders:function(){
    },
    //> public String getResponseHeader(String header)
    getResponseHeader:function(header){
    },
    //> public void open(String method,String url,boolean async,String user,String password)
    open:function(method,url,async,user,password){
    },
    //> public void setRequestHeader(String header,String value)
    setRequestHeader:function(header,value){
    },
    //> public void send(Object data)
    send:function(data){
    },
    //> public void sendAsBinary(String body)
    sendAsBinary:function(body){
    }
})
.endType();
/* @org.ebayopensource.dsf.resource.utils.CodeGen("VjoGenerator") */
vjo.ctype('Navigator') //< public
.inherits('Object')
.protos({
    appCodeName:null, //< public String
    appName:null, //< public String
    appMinorVersion:null, //< public String
    appVersion:null, //< public String
    cookieEnabled:false, //< public boolean
    browserLanguage:null, //< public String
    mimeTypes:null, //< public MimeType[]
    platform:null, //< public String
    plugins:null, //< public PluginArray
    systemLanguage:null, //< public String
    userAgent:null, //< public String
    userLanguage:null, //< public String
    language:null, //< public String
    cpuClass:null, //< public String
    onLine:false, //< public boolean
    //> public boolean javaEnabled()
    javaEnabled:function(){
    },
    //> public boolean taintEnabled()
    taintEnabled:function(){
    }
})
.endType();
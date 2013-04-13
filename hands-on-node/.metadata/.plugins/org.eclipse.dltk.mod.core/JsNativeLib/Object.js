/* @org.ebayopensource.dsf.resource.utils.CodeGen("VjoGenerator") */
vjo.ctype('Object') //< public
.protos({
    constructor:null, //< public Object
    __noSuchMethod__:null, //< public Object
    __parent__:null, //< public Object
    __proto__:null, //< public Object
    //> public constructs(Object... value)
    constructs:function(){
        var value;
        if (arguments.length == 1 && arguments[0]  instanceof Array){
            value=arguments[0];
        }
        else {
            value=[];
            for (var i=0; i<arguments.length; i++){
                value[i-0]=arguments[i];
            }
        }
    },
    //> public void __defineGetter__(String pName,Object fun)
    __defineGetter__:function(pName,fun){
    },
    //> public void __defineSetter__(String pName,Object fun)
    __defineSetter__:function(pName,fun){
    },
    //> public Object eval(String s)
    eval:function(s){
    },
    //> public boolean isPrototypeOf(Object obj)
    isPrototypeOf:function(obj){
    },
    //> public boolean hasOwnProperty(String prop)
    hasOwnProperty:function(prop){
    },
    //> public boolean propertyIsEnumerable(String prop)
    propertyIsEnumerable:function(prop){
    },
    //> public Object __lookupGetter__(String prop)
    __lookupGetter__:function(prop){
    },
    //> public Object __lookupSetter__(String prop)
    __lookupSetter__:function(prop){
    },
    //> public Object unwatch(String prop)
    unwatch:function(prop){
    },
    //> public Object watch(String prop,Object handler)
    watch:function(prop,handler){
    },
    //> public String toLocalString()
    toLocalString:function(){
    },
    //> public String toString()
    toString:function(){
    },
    //> public String toSource()
    toSource:function(){
    }
})
.endType();
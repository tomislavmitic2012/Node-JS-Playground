/* @org.ebayopensource.dsf.resource.utils.CodeGen("VjoGenerator") */
vjo.ctype('HTMLCanvasElement') //< public
.inherits('HTMLElement')
.protos({
    height:0, //< public int
    width:0, //< public int
    onblur:null, //< public Object
    onfocus:null, //< public Object
    onkeydown:null, //< public Object
    onkeypress:null, //< public Object
    onkeyup:null, //< public Object
    onresize:null, //< public Object
    onclick:null, //< public Object
    ondblclick:null, //< public Object
    onmousedown:null, //< public Object
    onmouseup:null, //< public Object
    onmousemove:null, //< public Object
    onmouseout:null, //< public Object
    onmouseover:null, //< public Object
    //> public String toDataURL(String type,Object... args)
    toDataURL:function(type){
        var args;
        if (arguments.length == 2 && arguments[1]  instanceof Array){
            args=arguments[1];
        }
        else {
            args=[];
            for (var i=1; i<arguments.length; i++){
                args[i-1]=arguments[i];
            }
        }
    },
    //> public Object getContext(String contextId,Object... args)
    getContext:function(contextId){
        var args;
        if (arguments.length == 2 && arguments[1]  instanceof Array){
            args=arguments[1];
        }
        else {
            args=[];
            for (var i=1; i<arguments.length; i++){
                args[i-1]=arguments[i];
            }
        }
    }
})
.endType();
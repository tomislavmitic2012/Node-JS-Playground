/* @org.ebayopensource.dsf.resource.utils.CodeGen("VjoGenerator") */
vjo.ctype('Event') //< public dynamic
.inherits('Object')
.protos({
    type:null, //< public String
    target:null, //< public EventTarget
    srcElement:null, //< public EventTarget
    bubbles:false, //< public boolean
    cancelBubble:false, //< public boolean
    cancelable:false, //< public boolean
    timeStamp:0, //< public long
    defaultPrevented:false, //< public boolean
    returnValue:false, //< public boolean
    //> public void stopPropagation()
    stopPropagation:function(){
    },
    //> public void preventDefault()
    preventDefault:function(){
    },
    //> public void stopImmediatePropagation()
    stopImmediatePropagation:function(){
    }
})
.endType();
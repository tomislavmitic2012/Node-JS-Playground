/* @org.ebayopensource.dsf.resource.utils.CodeGen("VjoGenerator") */
vjo.ctype('MouseEvent') //< public
.inherits('UIEvent')
.protos({
    screenX:0, //< public int
    screenY:0, //< public int
    clientX:0, //< public int
    clientY:0, //< public int
    ctrlKey:false, //< public boolean
    shiftKey:false, //< public boolean
    altKey:false, //< public boolean
    metaKey:false, //< public boolean
    button:0, //< public int
    relatedTarget:null, //< public EventTarget
    fromElement:null, //< public EventTarget
    toElement:null, //< public EventTarget
    offsetX:0, //< public int
    offsetY:0, //< public int
    X:0, //< public int
    Y:0, //< public int
    pageX:0, //< public int
    pageY:0, //< public int
    //> public void initMouseEvent(String typeArg,boolean canBubbleArg,boolean cancelableArg,Object viewArg,int detailArg,int screenXArg,int screenYArg,int clientXArg,int clientYArg,boolean ctrlKeyArg,boolean altKeyArg,boolean shiftKeyArg,boolean metaKeyArg,int buttonArg,EventTarget relatedTargetArg)
    initMouseEvent:function(typeArg,canBubbleArg,cancelableArg,viewArg,detailArg,screenXArg,screenYArg,clientXArg,clientYArg,ctrlKeyArg,altKeyArg,shiftKeyArg,metaKeyArg,buttonArg,relatedTargetArg){
    }
})
.endType();
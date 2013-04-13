/* @org.ebayopensource.dsf.resource.utils.CodeGen("VjoGenerator") */
vjo.mtype('EventTarget') //< public
.protos({
    //> public void addEventListener(String type,Object listener,boolean useCapture)
    addEventListener:function(type,listener,useCapture){
    },
    //> public void removeEventListener(String type,Object listener,boolean useCapture)
    removeEventListener:function(type,listener,useCapture){
    },
    //> public boolean dispatchEvent(Event evt)
    dispatchEvent:function(evt){
    },
    //> public boolean fireEvent(String evtType)
    fireEvent:function(evtType){
    },
    //> public void attachEvent(String type,Object listener)
    attachEvent:function(type,listener){
    },
    //> public void detachEvent(String type,Object listener)
    detachEvent:function(type,listener){
    }
})
.endType();
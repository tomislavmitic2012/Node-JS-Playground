/* @org.ebayopensource.dsf.resource.utils.CodeGen("VjoGenerator") */
vjo.ctype('KeyboardEvent') //< public
.inherits('UIEvent')
.protos({
    keyIdentifier:null, //< public String
    keyLocation:0, //< public int
    ctrlKey:false, //< public boolean
    shiftKey:false, //< public boolean
    altKey:false, //< public boolean
    metaKey:false, //< public boolean
    keyCode:0, //< public int
    which:0, //< public int
    charCode:0, //< public int
    //> public boolean getModifierState(String keyIdentifierArg)
    getModifierState:function(keyIdentifierArg){
    },
    //> public void initKeyboardEvent(String typeArg,boolean canBubbleArg,boolean cancelableArg,Object viewArg,String keyIdentifierArg,int keyLocationArg,String modifiersListArg)
    initKeyboardEvent:function(typeArg,canBubbleArg,cancelableArg,viewArg,keyIdentifierArg,keyLocationArg,modifiersListArg){
    },
    //> public void initKeyboardEventNS(String namespaceURIArg,String typeArg,boolean canBubbleArg,boolean cancelableArg,Object viewArg,String keyIdentifierArg,int keyLocationArg,String modifiersListArg)
    initKeyboardEventNS:function(namespaceURIArg,typeArg,canBubbleArg,cancelableArg,viewArg,keyIdentifierArg,keyLocationArg,modifiersListArg){
    }
})
.endType();
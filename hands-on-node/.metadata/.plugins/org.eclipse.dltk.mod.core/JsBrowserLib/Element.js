/* @org.ebayopensource.dsf.resource.utils.CodeGen("VjoGenerator") */
vjo.ctype('Element') //< public
.inherits('Node')
.protos({
    tagName:null, //< public String
    schemaTypeInfo:null, //< public TypeInfo
    //> public String getAttribute(String name)
    getAttribute:function(name){
    },
    //> public void setAttribute(String name,String value)
    //> public void setAttribute(String name,Object value)
    setAttribute:function(name,value){
    },
    //> public void removeAttribute(String name)
    removeAttribute:function(name){
    },
    //> public NodeList getElementsByTagName(String name)
    getElementsByTagName:function(name){
    },
    //> public Attr getAttributeNode(String name)
    getAttributeNode:function(name){
    },
    //> public Attr setAttributeNode(Attr newAttr)
    setAttributeNode:function(newAttr){
    },
    //> public Attr removeAttributeNode(Attr oldAttr)
    removeAttributeNode:function(oldAttr){
    },
    //> public boolean hasAttribute(String name)
    hasAttribute:function(name){
    },
    //> public String getAttributeNS(String namespaceURI,String localName)
    getAttributeNS:function(namespaceURI,localName){
    },
    //> public void setAttributeNS(String namespaceURI,String qualifiedName,String value)
    setAttributeNS:function(namespaceURI,qualifiedName,value){
    },
    //> public void removeAttributeNS(String namespaceURI,String localName)
    removeAttributeNS:function(namespaceURI,localName){
    },
    //> public Attr getAttributeNodeNS(String namespaceURI,String localName)
    getAttributeNodeNS:function(namespaceURI,localName){
    },
    //> public Attr setAttributeNodeNS(Attr newAttr)
    setAttributeNodeNS:function(newAttr){
    },
    //> public NodeList getElementsByTagNameNS(String namespaceURI,String localName)
    getElementsByTagNameNS:function(namespaceURI,localName){
    },
    //> public NodeList byTagNS(String namespaceURI,String localName)
    byTagNS:function(namespaceURI,localName){
    },
    //> public boolean hasAttributeNS(String namespaceURI,String localName)
    hasAttributeNS:function(namespaceURI,localName){
    },
    //> public void setIdAttribute(String name,boolean isId)
    setIdAttribute:function(name,isId){
    },
    //> public void setIdAttributeNS(String namespaceURI,String localName,boolean isId)
    setIdAttributeNS:function(namespaceURI,localName,isId){
    },
    //> public void setIdAttributeNode(Attr idAttr,boolean isId)
    setIdAttributeNode:function(idAttr,isId){
    }
})
.endType();
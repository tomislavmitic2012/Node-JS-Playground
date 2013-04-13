/* @org.ebayopensource.dsf.resource.utils.CodeGen("VjoGenerator") */
vjo.ctype('Node') //< public
.inherits('Object')
.protos({
    nodeName:null, //< public String
    nodeValue:null, //< public String
    nodeType:0, //< public short
    parentNode:null, //< public Node
    childNodes:null, //< public NodeList
    firstChild:null, //< public Node
    lastChild:null, //< public Node
    previousSibling:null, //< public Node
    nextSibling:null, //< public Node
    attributes:null, //< public NamedNodeMap
    ownerDocument:null, //< public Document
    baseURI:null, //< public String
    textContent:null, //< public String
    innerText:null, //< public String
    //> public Node insertBefore(Node newChild,Node refChild)
    insertBefore:function(newChild,refChild){
    },
    //> public Node replaceChild(Node newChild,Node oldChild)
    replaceChild:function(newChild,oldChild){
    },
    //> public Node removeChild(Node oldChild)
    removeChild:function(oldChild){
    },
    //> public Node appendChild(Node newChild)
    appendChild:function(newChild){
    },
    //> public boolean hasChildNodes()
    hasChildNodes:function(){
    },
    //> public Node cloneNode(boolean deep)
    cloneNode:function(deep){
    },
    //> public boolean hasAttributes()
    hasAttributes:function(){
    },
    //> public String getNamespaceURI()
    getNamespaceURI:function(){
    },
    //> public String getLocalName()
    getLocalName:function(){
    },
    //> public Object valueOf(String type)
    valueOf:function(type){
    },
    //> public void normalize()
    normalize:function(){
    },
    //> public boolean isSupported(String feature,String version)
    isSupported:function(feature,version){
    },
    //> public String getPrefix()
    getPrefix:function(){
    },
    //> public void setPrefix(String prefix)
    setPrefix:function(prefix){
    },
    //> public short compareDocumentPosition(Node other)
    compareDocumentPosition:function(other){
    },
    //> public boolean isSameNode(Node other)
    isSameNode:function(other){
    },
    //> public String lookupPrefix(String namespaceURI)
    lookupPrefix:function(namespaceURI){
    },
    //> public boolean isDefaultNamespace(String namespaceURI)
    isDefaultNamespace:function(namespaceURI){
    },
    //> public String lookupNamespaceURI(String specifiedPrefix)
    lookupNamespaceURI:function(specifiedPrefix){
    },
    //> public boolean isEqualNode(Node arg)
    isEqualNode:function(arg){
    },
    //> public Object getFeature(String feature,String version)
    getFeature:function(feature,version){
    },
    //> public Object setUserData(String key,Object data,UserDataHandler handler)
    setUserData:function(key,data,handler){
    },
    //> public Object getUserData(String key)
    getUserData:function(key){
    },
    //> public String toString()
    toString:function(){
    }
})
.endType();
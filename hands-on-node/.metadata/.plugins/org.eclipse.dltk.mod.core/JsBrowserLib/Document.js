/* @org.ebayopensource.dsf.resource.utils.CodeGen("VjoGenerator") */
vjo.ctype('Document') //< public
.inherits('Node')
.protos({
    documentElement:null, //< public Element
    inputEncoding:null, //< public String
    xmlEncoding:null, //< public String
    xmlStandalone:false, //< public boolean
    xmlVersion:null, //< public String
    strictErrorChecking:false, //< public boolean
    documentURI:null, //< public String
    domConfig:null, //< public DOMConfiguration
    doctype:null, //< public DocumentType
    implementation:null, //< public DOMImplementation
    lastModified:null, //< public String
    bgColor:null, //< public String
    alinkColor:null, //< public String
    vlinkColor:null, //< public String
    linkColor:null, //< public String
    protocol:null, //< public String
    cookie:null, //< public String
    fgColor:null, //< public String
    readyState:null, //< public String
    security:null, //< public String
    //> public Element createElement(String tagName)
    createElement:function(tagName){
    },
    //> public Text createTextNode(String data)
    createTextNode:function(data){
    },
    //> public NodeList getElementsByTagName(String tagname)
    getElementsByTagName:function(tagname){
    },
    //> public Node importNode(Node importedNode,boolean deep)
    importNode:function(importedNode,deep){
    },
    //> public Element getElementById(String elementId)
    getElementById:function(elementId){
    },
    //> public Attr createAttribute(String name)
    createAttribute:function(name){
    },
    //> public Element createElementNS(String namespaceURI,String qualifiedName)
    createElementNS:function(namespaceURI,qualifiedName){
    },
    //> public Attr createAttributeNS(String namespaceURI,String qualifiedName)
    createAttributeNS:function(namespaceURI,qualifiedName){
    },
    //> public NodeList getElementsByTagNameNS(String namespaceURI,String localName)
    getElementsByTagNameNS:function(namespaceURI,localName){
    },
    //> public EntityReference createEntityReference(String name)
    createEntityReference:function(name){
    },
    //> public Comment createComment(String data)
    createComment:function(data){
    },
    //> public CDATASection createCDATASection(String data)
    createCDATASection:function(data){
    },
    //> public ProcessingInstruction createProcessingInstruction(String target,String data)
    createProcessingInstruction:function(target,data){
    },
    //> public DocumentFragment createDocumentFragment()
    createDocumentFragment:function(){
    },
    //> public Node adoptNode(Node source)
    adoptNode:function(source){
    },
    //> public void normalizeDocument()
    normalizeDocument:function(){
    },
    //> public Node renameNode(Node n,String namespaceURI,String qualifiedName)
    renameNode:function(n,namespaceURI,qualifiedName){
    }
})
.endType();
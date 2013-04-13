/* @org.ebayopensource.dsf.resource.utils.CodeGen("VjoGenerator") */
vjo.ctype('HTMLDocument') //< public dynamic
.inherits('Document')
.protos({
    all:null, //< public NodeList
    title:null, //< public String
    referrer:null, //< public String
    domain:null, //< public String
    URL:null, //< public String
    body:null, //< public HTMLBodyElement
    images:null, //< public HTMLCollection
    applets:null, //< public HTMLCollection
    links:null, //< public HTMLCollection
    forms:null, //< public HTMLCollection
    anchors:null, //< public HTMLCollection
    frames:null, //< public HTMLCollection
    cookie:null, //< public String
    location:null, //< public Location
    selection:null, //< public Selection
    parentWindow:null, //< public Window
    defaultView:null, //< public Window
    URLUnencoded:null, //< public String
    readyState:null, //< public String
    onkeydown:null, //< public Object
    onkeypress:null, //< public Object
    onkeyup:null, //< public Object
    onclick:null, //< public Object
    ondblclick:null, //< public Object
    onmousedown:null, //< public Object
    onmousemove:null, //< public Object
    onmouseout:null, //< public Object
    onmouseover:null, //< public Object
    onmouseup:null, //< public Object
    onreadystatechange:null, //< public Object
    compatMode:null, //< public String
    documentElement:null, //< public HTMLElement
    //> public Node all(int index)
    //> public NodeList all(String id)
    //> public Node all(String id,int subIndex)
    all:function(index){
    },
    //> public void open()
    open:function(){
    },
    //> public void close()
    close:function(){
    },
    //> public void write(Object text)
    write:function(text){
    },
    //> public void writeln(Object text)
    writeln:function(text){
    },
    //> public NodeList getElementsByName(String elementName)
    getElementsByName:function(elementName){
    },
    //> public boolean execCommand(String command)
    //> public boolean execCommand(String command,boolean userInterface)
    //> public boolean execCommand(String command,boolean userInterface,Object value)
    execCommand:function(command){
    },
    //> public Object valueOf(String type)
    valueOf:function(type){
    },
    //> public void addEventListener(String type,Object listener,boolean useCapture)
    addEventListener:function(type,listener,useCapture){
    },
    //> public void attachEvent(String type,Object listener)
    attachEvent:function(type,listener){
    },
    //> public void createStyleSheet()
    //> public void createStyleSheet(String url)
    //> public void createStyleSheet(String url,int index)
    createStyleSheet:function(){
    },
    //> public HTMLElement createElement(String tagName)
    createElement:function(tagName){
    },
    //> public HTMLElement getElementById(String elementId)
    getElementById:function(elementId){
    }
})
.endType();
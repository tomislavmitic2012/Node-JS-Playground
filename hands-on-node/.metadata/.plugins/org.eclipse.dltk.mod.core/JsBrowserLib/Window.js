/* @org.ebayopensource.dsf.resource.utils.CodeGen("VjoGenerator") */
vjo.ctype('Window') //< public dynamic
//> needs HTMLDocument
.inherits('Global')
.protos({
    closed:false, //< public boolean
    defaultStatus:null, //< public String
    document:null, //< public HTMLDocument
    frames:null, //< public HTMLCollection
    childWindows:null, //< public Frames
    history:null, //< public History
    location:null, //< public Location
    name:null, //< public String
    navigator:null, //< public Navigator
    opener:null, //< public Window
    parent:null, //< public Window
    self:null, //< public Window
    status:null, //< public String
    title:null, //< public String
    top:null, //< public Window
    length:0, //< public int
    screen:null, //< public Screen
    window:null, //< public Window
    innerWidth:0, //< public int
    innerHeight:0, //< public int
    outerWidth:0, //< public int
    outerHeight:0, //< public int
    pageXOffset:0, //< public int
    pageYOffset:0, //< public int
    screenLeft:0, //< public int
    screenTop:0, //< public int
    screenX:0, //< public int
    screenY:0, //< public int
    external:null, //< public External
    event:null, //< public Event
    onblur:null, //< public Object
    onfocus:null, //< public Object
    onload:null, //< public Object
    onunload:null, //< public Object
    onresize:null, //< public Object
    opera:null, //< public Opera
    //> public void alert(Object message)
    alert:function(message){
    },
    //> public void blur()
    blur:function(){
    },
    //> public void clearInterval(int id)
    clearInterval:function(id){
    },
    //> public void clearTimeout(int id)
    clearTimeout:function(id){
    },
    //> public void close()
    close:function(){
    },
    //> public boolean confirm(String message)
    confirm:function(message){
    },
    //> public void focus()
    focus:function(){
    },
    //> public void moveBy(int x,int y)
    moveBy:function(x,y){
    },
    //> public void moveTo(int x,int y)
    moveTo:function(x,y){
    },
    //> public Window open()
    //> public Window open(String url)
    //> public Window open(String url,String windowName)
    //> public Window open(String url,String windowName,String features)
    //> public Window open(String url,String windowName,String features,boolean replace)
    open:function(){
    },
    //> public void print()
    print:function(){
    },
    //> public String prompt()
    //> public String prompt(String message)
    //> public String prompt(String message,String defaultReply)
    prompt:function(){
    },
    //> public void resizeBy(int width,int height)
    resizeBy:function(width,height){
    },
    //> public void resizeTo(int width,int height)
    resizeTo:function(width,height){
    },
    //> public void scrollBy(int x,int y)
    scrollBy:function(x,y){
    },
    //> public void scrollTo(int x,int y)
    scrollTo:function(x,y){
    },
    //> public int setInterval(Object code,int msecs)
    setInterval:function(code,msecs){
    },
    //> public int setTimeout(Object code,int msecs)
    setTimeout:function(code,msecs){
    },
    //> public HTMLElementStyle getComputedStyle(HTMLElement elem,String pseudoElem)
    getComputedStyle:function(elem,pseudoElem){
    },
    //> public void addEventListener(String type,Object listener,boolean useCapture)
    addEventListener:function(type,listener,useCapture){
    },
    //> public void attachEvent(String type,Object listener)
    attachEvent:function(type,listener){
    }
})
.endType();
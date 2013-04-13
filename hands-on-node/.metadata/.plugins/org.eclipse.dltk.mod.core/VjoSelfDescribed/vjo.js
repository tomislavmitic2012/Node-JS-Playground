/* @org.ebayopensource.dsf.resource.utils.CodeGen("VjoGenerator") */
vjo.ctype('vjo') //< public
.needs(['vjo.ctype','vjo.itype',
    'vjo.etype','vjo.mtype',
    'vjo.otype','vjo.ftype'])
//> needs vjo.Console
.props({
    NEEDS_IMPL:null, //< public Function
    sysout:null, //< public Console
    syserr:null, //< public Console
    //> final public ctype ctype(String type)
    //> final public ctype ctype()
    ctype:function(type){
    },
    //> final public ltype ltype(String type)
    //> final public ltype ltype()
    ltype:function(type){
    },
    //> final public itype itype(String type)
    //> final public itype itype()
    itype:function(type){
    },
    //> final public etype etype(String type)
    //> final public etype etype()
    etype:function(type){
    },
    //> final public mtype mtype(String type)
    //> final public mtype mtype()
    mtype:function(type){
    },
    //> final public otype otype(String type)
    //> final public otype otype()
    otype:function(type){
    },
    //> final public ftype ftype(String type)
    //> final public ftype ftype()
    ftype:function(type){
    },
    //> final public Class getType(String type)
    getType:function(type){
    },
    //> final public ctype make(Object obj,String type)
    //> final public ctype make(Object obj,String type,Object... args)
    //> final public ctype make(Object obj,Object type,Object... args)
    make:function(obj,type){
    },
    //> final public Function hitch(Object obj,Function func)
    //> final public Function hitch(Object obj,Function func,boolean bArg)
    hitch:function(obj,func){
    },
    //> final public vjo mixin(String mtype,String target)
    //> final public vjo mixin(Object mtype,Object target)
    mixin:function(mtype,target){
    },
    //> final public boolean isArray(Object objLiteral)
    isArray:function(objLiteral){
    },
    //> final public Array createArray()
    //> final public Array createArray(Object defaultValue,int size,int... otherDimension)
    //> final public Array createArray(Object defaultValue,int size)
    createArray:function(){
    },
    //> final public Function curry(Function func)
    //> final public Function curry(Function func,Object... args)
    curry:function(func){
    },
    //> final public void needs(String type)
    needs:function(type){
    },
    //> final public boolean isInstanceOf(Object obj,Object type)
    isInstanceOf:function(obj,type){
    },
    //> final public boolean findType(Object type,String fieldName)
    findType:function(type,fieldName){
    },
    //> final public bind bind(Object obj,String func)
    //> final public bind bind(Object obj,String func,Object... args)
    //> final public bind bind(Object obj,Function func,Object... args)
    bind:function(obj,func){
    },
    //> final public create create(String elementName,String value)
    create:function(elementName,value){
    }
})
.endType();
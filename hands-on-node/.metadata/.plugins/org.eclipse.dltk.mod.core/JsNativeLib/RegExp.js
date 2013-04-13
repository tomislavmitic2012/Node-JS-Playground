/* @org.ebayopensource.dsf.resource.utils.CodeGen("VjoGenerator") */
vjo.ctype('RegExp') //< public
.inherits('Object')
.props({
    $1:null, //< public String
    $2:null, //< public String
    $3:null, //< public String
    $4:null, //< public String
    $5:null, //< public String
    $6:null, //< public String
    $7:null, //< public String
    $8:null, //< public String
    $9:null, //< public String
    $10:null, //< public String
    input:null, //< public String
    lastMatch:null, //< public String
    lastParen:null, //< public String
    leftContext:null, //< public String
    rightContext:null //< public String
})
.protos({
    global:false, //< public boolean
    ignoreCase:false, //< public boolean
    index:null, //< public Number
    lastIndex:null, //< public Number
    multiline:false, //< public boolean
    source:null, //< public String
    //> public constructs()
    //> public constructs(String pattern)
    //> public constructs(String pattern,String flags)
    constructs:function(){
    },
    //> public RegExp compile(Object expr,Object flags)
    compile:function(expr,flags){
    },
    //> public Array exec(String str)
    exec:function(str){
    },
    //> public boolean test(String str)
    test:function(str){
    }
})
.endType();
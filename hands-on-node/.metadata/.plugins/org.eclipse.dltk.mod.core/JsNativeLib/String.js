/* @org.ebayopensource.dsf.resource.utils.CodeGen("VjoGenerator") */
vjo.ctype('String') //< public
.inherits('Object')
.props({
    //> public String fromCharCode(Number... numbers)
    fromCharCode:function(){
        var numbers;
        if (arguments.length == 1 && arguments[0]  instanceof Array){
            numbers=arguments[0];
        }
        else {
            numbers=[];
            for (var i=0; i<arguments.length; i++){
                numbers[i-0]=arguments[i];
            }
        }
    }
})
.protos({
    length:null, //< public Number
    //> public constructs(Object value)
    //> public constructs()
    constructs:function(value){
    },
    //> public String anchor(String anchorname)
    anchor:function(anchorname){
    },
    //> public String big()
    big:function(){
    },
    //> public String blink()
    blink:function(){
    },
    //> public String bold()
    bold:function(){
    },
    //> public String charAt(Number index)
    charAt:function(index){
    },
    //> public Number charCodeAt(Number index)
    charCodeAt:function(index){
    },
    //> public String concat(String... strings)
    concat:function(){
        var strings;
        if (arguments.length == 1 && arguments[0]  instanceof Array){
            strings=arguments[0];
        }
        else {
            strings=[];
            for (var i=0; i<arguments.length; i++){
                strings[i-0]=arguments[i];
            }
        }
    },
    //> public String fixed()
    fixed:function(){
    },
    //> public String fontcolor(String color)
    fontcolor:function(color){
    },
    //> public String fontsize(Number size)
    fontsize:function(size){
    },
    //> public Number indexOf(String searchvalue)
    //> public Number indexOf(String searchvalue,Number fromindex)
    indexOf:function(searchvalue){
    },
    //> public String italics()
    italics:function(){
    },
    //> public Number lastIndexOf(String searchvalue)
    //> public Number lastIndexOf(String searchvalue,Number fromindex)
    lastIndexOf:function(searchvalue){
    },
    //> public String link(String href)
    link:function(href){
    },
    //> public Number localeCompare(String target)
    localeCompare:function(target){
    },
    //> public String match(Object regexp)
    match:function(regexp){
    },
    //> public String replace(String regexp,String newSubStr)
    //> public String replace(RegExp regexp,String newSubStr)
    //> public String replace(String regexp,Function function_)
    //> public String replace(RegExp regexp,Function function_)
    replace:function(regexp,newSubStr){
    },
    //> public Number search(Object regexp)
    search:function(regexp){
    },
    //> public String slice(Number start)
    //> public String slice(Number start,Number end)
    slice:function(start){
    },
    //> public String small()
    small:function(){
    },
    //> public Array split(String separator)
    //> public Array split(String separator,Number howmany)
    split:function(separator){
    },
    //> public String strike()
    strike:function(){
    },
    //> public String sub()
    sub:function(){
    },
    //> public String substr(Number start)
    //> public String substr(Number start,Number length)
    substr:function(start){
    },
    //> public String substring(Number start)
    //> public String substring(Number start,Number stop)
    substring:function(start){
    },
    //> public String sup()
    sup:function(){
    },
    //> public String toLowerCase()
    toLowerCase:function(){
    },
    //> public String toLocaleLowerCase()
    toLocaleLowerCase:function(){
    },
    //> public String toUpperCase()
    toUpperCase:function(){
    },
    //> public String toLocaleUpperCase()
    toLocaleUpperCase:function(){
    },
    //> public String valueOf()
    valueOf:function(){
    }
})
.endType();
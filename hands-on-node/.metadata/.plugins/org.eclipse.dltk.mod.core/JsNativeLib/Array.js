/* @org.ebayopensource.dsf.resource.utils.CodeGen("VjoGenerator") */
vjo.ctype('Array') //< public
.inherits('Object')
.protos({
    index:null, //< public Number
    input:null, //< public Number
    length:null, //< public Number
    //> public constructs()
    //> public constructs(Number size)
    //> public constructs(Object... elements)
    constructs:function(){
    },
    //> public Array concat(Array... arrays)
    concat:function(){
        var arrays;
        if (arguments.length == 1 && arguments[0]  instanceof Array){
            arrays=arguments[0];
        }
        else {
            arrays=[];
            for (var i=0; i<arguments.length; i++){
                arrays[i-0]=arguments[i];
            }
        }
    },
    //> public boolean every(Function callback)
    //> public boolean every(Function callback,Object thisObject)
    every:function(callback){
    },
    //> public Array filter(Function callback)
    //> public Array filter(Function callback,Object thisObject)
    filter:function(callback){
    },
    //> public Array forEach(Function callback)
    //> public Array forEach(Function callback,Object thisObject)
    forEach:function(callback){
    },
    //> public Number indexOf(Object searchElement)
    //> public Number indexOf(Object searchElement,int fromIndex)
    //> public Number indexOf(Object searchElement,Number fromIndex)
    indexOf:function(searchElement){
    },
    //> public String join()
    //> public String join(String separator)
    join:function(){
    },
    //> public Number lastIndexOf(Object searchElement)
    //> public Number lastIndexOf(Object searchElement,Number fromIndex)
    lastIndexOf:function(searchElement){
    },
    //> public Array map(Function callback)
    //> public Array map(Function callback,Object thisObject)
    map:function(callback){
    },
    //> public Object pop()
    pop:function(){
    },
    //> public Number push(Object... elements)
    push:function(){
        var elements;
        if (arguments.length == 1 && arguments[0]  instanceof Array){
            elements=arguments[0];
        }
        else {
            elements=[];
            for (var i=0; i<arguments.length; i++){
                elements[i-0]=arguments[i];
            }
        }
    },
    //> public Object reduce(Function callback)
    //> public Object reduce(Function callback,Object thisObject)
    reduce:function(callback){
    },
    //> public Object reduceRight(Function callback)
    //> public Object reduceRight(Function callback,Object thisObject)
    reduceRight:function(callback){
    },
    //> public Array reverse()
    reverse:function(){
    },
    //> public Object shift()
    shift:function(){
    },
    //> public Array slice()
    //> public Array slice(Number begin)
    //> public Array slice(Number begin,Number end)
    slice:function(){
    },
    //> public boolean some(Function searchElement)
    //> public boolean some(Function searchElement,Object thisObject)
    some:function(searchElement){
    },
    //> public Array sort()
    //> public Array sort(Function compareFunction)
    sort:function(){
    },
    //> public Array splice(Number index)
    //> public Array splice(Number index,Number howMany)
    //> public Array splice(Number index,Number howMany,Object... elements)
    splice:function(index){
    },
    //> public Number unshift(Object... elements)
    unshift:function(){
        var elements;
        if (arguments.length == 1 && arguments[0]  instanceof Array){
            elements=arguments[0];
        }
        else {
            elements=[];
            for (var i=0; i<arguments.length; i++){
                elements[i-0]=arguments[i];
            }
        }
    },
    //> public Object valueOf()
    valueOf:function(){
    }
})
.endType();
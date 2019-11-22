export function required(){
  // return function(){} //anonymous  func
  return (target:object,propertyName:string)=>{
      let __val:any;
      target["__validation"]=target["__validation"]||{};
      target["__validation"][propertyName]=propertyName;
      target["__maps"] = target["__maps"]||{};
      target["__maps"][propertyName] = propertyName;
    Object.defineProperty(target,propertyName,{
        get:getFunc,

        set:setFunc
    });
    function getFunc(){
        return __val;
    }
    function setFunc(val:any){
        __val=val;
       // target["__validation"]=target["__validation"]||[]; Truong hop truoc
        if(!val){
            // if(!target["__validation"]){
            //   target["__validation"]=[];  
            // }
            
            target["__validation"][propertyName]=propertyName;
            
           
        } else {
            delete target["__validation"][propertyName];
        }
        
    
    }
  }
}
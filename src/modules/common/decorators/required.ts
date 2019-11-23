export function required(keyvalidations:string){
  // return function(){} //anonymous  func
  return (target:object,propertyName:string)=>{
      let __val:any;
      target["__validation"]=target["__validation"]||{};
      target["__validation"][propertyName]=keyvalidations;
      target["__maps"] = target["__maps"]||{};
      target["__maps"][propertyName] = propertyName; // Validattions vao day
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
            
            target["__validation"][propertyName]=keyvalidations;
            
           
        } else {
            delete target["__validation"][propertyName];
        }
        
    
    }
  }
}
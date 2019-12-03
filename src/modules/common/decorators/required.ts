export function required(keyvalidations:string){
  // return function(){} //anonymous  func
  return (target:object,propertyName:string)=>{
     // let __val:any;
      let __propertyName="__"+propertyName; // fix
      target["__validation"]=target["__validation"]||{};
      target["__validation"][propertyName]=keyvalidations;
      target["__maps"] = target["__maps"]||{};
      target["__maps"][propertyName] = propertyName; // Validattions vao day
    Object.defineProperty(target,propertyName,{
        get:getFunc,
        set:setFunc
    });
    function getFunc(){
       return target[__propertyName];
       // return __val; bug bi dinh gia tri
    }
    function setFunc(val:any){
        target[__propertyName]=val;
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
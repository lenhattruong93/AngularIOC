import {IoCNames} from "@app/common";
import {IEventManager} from "@app/common";
export class BaseModel{
    public toJSON():any {

        let obj:any={};
        for (let item in this){
          if(!this.hasOwnProperty(item)){continue;} // loc nhung dieu kien de loc ra nhung obj ko co required
            obj[item]=this[item];          
        }      
         let map=this["__maps"];
 
         for(let item in map){
             obj[item]=this[item];
         }
         // obj["title"]=this.title;
         // obj["title1"]=this.title1;
         // obj["title2"]=this.title2;
         // obj["title3"]=this.title3;
         return obj;
     }
     public isValid():boolean{
        if(Object.keys(this["__validation"]||{}).length==0){return true;} // A && B && C hoac A || B || C
        let ieventManager :IEventManager = window.ioc.resolve(IoCNames.EventManagerService);
        let __valArray = this["__validation"];
        for(let item in __valArray){
            ieventManager.publish( __valArray[item]);    
        }
    }
}
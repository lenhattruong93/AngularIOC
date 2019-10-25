enum PromiseStatus {
    Success=1
}
export class Promise{
    private arg:any;
    private status:PromiseStatus;
    private callback:(arg?:any)=>void;
    public resolve(arg?:any):Promise{
        this.arg=arg;
        this.status = PromiseStatus.Success;
        this.processCallback();
        // if(this.status == PromiseStatus.Success && !!this.callback){
        //     this.callback(this.arg);
        // }
        return this;
    }
    public then(callback:(arg?:string)=>void):Promise{
        this.callback = callback;
        this.processCallback();
        // if(this.status == PromiseStatus.Success && !!this.callback ){
        //     this.callback(this.arg);
        // }
        return this;
    }
    private processCallback(){
        if(this.status == PromiseStatus.Success && !!this.callback ){
            this.callback(this.arg);
        }
    }
}
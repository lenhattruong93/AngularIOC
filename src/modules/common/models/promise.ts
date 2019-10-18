export class Promise{
    private callback:(arg?:any)=>void;
    public resolve(arg?:any):Promise{
         this.callback(arg);
         return this;
    }
    public then(callback:(arg?:string)=>void):Promise{
        this.callback = callback;
        return this;
    }
}
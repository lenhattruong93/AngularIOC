import { Component, Input, Output, EventEmitter, AfterContentInit, ElementRef } from "@angular/core";
import { IoCNames } from "../../enum";
import { IEventManager } from "../../services/ieventManager";
import { BasePage } from "../../basepage";

@Component({
    selector:"form-input",
    template:`
    <div class="form-group">
        <label class="control-label col-md-3 col-sm-3 col-xs-12" for="first-name">{{label}}
        </label>
        <div class="col-md-6 col-sm-6 col-xs-12">
            <input class="{{css}}" [(ngModel)]="value" (change)="onValueChanged()" type="text" id="first-name" required="required" class="form-control col-md-7 col-xs-12">
            <span>{{errorMessage}}</span>
        </div>
    </div>
    `

})
export class FormInput extends BasePage implements AfterContentInit{
    private value:string;
    private css: string;
    private ui: ElementRef;
    @Input() validation: Array<string>;
    @Input() label:string;
    @Output() onValueChange:EventEmitter<any> = new EventEmitter();
    public errorMessage:string;
    constructor(ui:ElementRef){
        super();
        this.ui=ui;
    }
    public onValueChanged():void{
        this.onValueChange.emit(this.value);
    }
    ngAfterContentInit():void{
        let self=this;
        let eventManager:IEventManager = window.ioc.resolve(IoCNames.EventManagerService);
        if(!self.validation){return;}
        self.validation.forEach((item:string)=>{
            eventManager.subscribe(item,()=>{
                self.css="Failed";

                self.errorMessage = self.ui.nativeElement.title = self.getValidationName(item);
            });
        });

    }
    public getValidationName(item:string):any {
        let arr:Array<string>=item.split('.');
        let _str=this.i18n;
        //for(i=0;i++;i<arr.length)
        arr.forEach((str)=>{

            _str=_str[str];
        });
        return _str;
    }
    
    
}
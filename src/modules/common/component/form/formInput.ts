import { Component, Input } from "@angular/core";

@Component({
    selector:"form-input",
    template:`
    <div class="form-group">
        <label class="control-label col-md-3 col-sm-3 col-xs-12" for="first-name">{{label}}
        </label>
        <div class="col-md-6 col-sm-6 col-xs-12">
        <input type="text" id="first-name" required="required" class="form-control col-md-7 col-xs-12">
        </div>
    </div>
    `

})
export class FormInput{
    @Input() label:string;
}
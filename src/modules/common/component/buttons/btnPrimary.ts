import { Component, Input } from "@angular/core";

@Component({
    selector:"btn-primary",
    template:`
    <button class="btn btn-primary">{{label}}</button>
    `
})
export class BtnPrimary{
    @Input() label:string;
}
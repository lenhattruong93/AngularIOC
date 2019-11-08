import { Component, Input } from "@angular/core";

@Component({
    selector:"btn-default",
    template:`
    <button class="btn btn-default">{{label}}</button>
    `
})
export class BtnDefault{
    @Input() label:string;
}
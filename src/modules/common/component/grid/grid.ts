import { Component, Input, AfterViewInit } from "@angular/core";
import { IGridOption, IGridColumn } from "./iGridOption";

// import { Component } from "@angular/core";

// import { Component, Input } from "@angular/core";
// import guidHelper from "../../helpers/guidHelper";

// @Component({
//     selector:'grid',
//     template:`<table id={{id}}></table>`
// })
// export class Grid{
//     @Input() option:IGridOption;
//     private id:string;
//     constructor(){
//         this.id=guidHelper.create();
//     }
// }

@Component({  
    selector:"grid",
    template:`<div [innerHTML]='strHtml'></div>`
})
export class Grid implements AfterViewInit{
    @Input() options:IGridOption;
    public strHtml:string="";
    ngAfterViewInit(){
        this.strHtml="<table class='grid_control' id='tab1'><thead><tr>";
        this.options.columns.forEach((item:IGridColumn) => {
            this.strHtml += "<th>"+item.headerText+"</th>"
        });
        this.strHtml +="</tr></thead><tbody>";
        this.options.dataSource.forEach((item:any)=>{
            this.strHtml +="<tr>";
            this.options.columns.forEach((columnItem:IGridColumn) => {
                this.strHtml += "<td>"+item[columnItem.field]+"</td>";
            });
            this.strHtml +="</tr>";
        });
        this.strHtml +="</tbody></table>";
        setTimeout(()=>{
            
            window.$('.grid_control').DataTable();
        },1000);
        

    }
}
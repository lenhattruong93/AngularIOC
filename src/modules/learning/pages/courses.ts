import { Component } from "@angular/core";
import {BasePage} from "../../common/basePage";
@Component({
    template:`
    <page [title]="i18n.learning.pages.courses.title">
        <page-content>
                <table class="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>{{i18n.learning.pages.courses.firstName}}</th>
                        <th>{{i18n.learning.pages.courses.lastName}}</th>
                        <th>{{i18n.learning.pages.courses.userName}}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                    </tr>
                </tbody>
            </table>      
        </page-content>
    </page>
    `
})
export class Courses extends BasePage {
    
 
}
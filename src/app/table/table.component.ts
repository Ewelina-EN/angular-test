import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { ButtonComponent } from "../shared/button/button.component";

@Component({
    selector: 'main',
    standalone: true,
    imports: [RouterLink, ButtonComponent],
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss']
})

export class TableComponent { }
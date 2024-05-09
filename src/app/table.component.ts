import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
    selector: 'table',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss']
})

export class TableComponent { }
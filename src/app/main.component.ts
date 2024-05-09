import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
    selector: 'main',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss']
})
export class MainComponent { }
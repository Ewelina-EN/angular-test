import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { ButtonComponent } from "../shared/button/button.component";

@Component({
    selector: 'main-page',
    standalone: true,
    imports: [RouterLink, ButtonComponent],
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss'],
})
export class MainComponent { }
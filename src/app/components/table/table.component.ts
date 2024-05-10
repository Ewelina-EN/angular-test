import { Component, OnInit } from "@angular/core";
import { RouterLink } from "@angular/router";
import { ButtonComponent } from "../shared/button/button.component";
import { DataService } from "../../services/data.service";

@Component({
    selector: 'main',
    standalone: true,
    imports: [RouterLink, ButtonComponent],
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss']
})

export class TableComponent implements OnInit {
    issues: any[] =[]
    
    constructor(private dataService: DataService) { }

    ngOnInit() {
        this.dataService.getData().subscribe((data: any) => {
            this.issues = data.items;
            console.log("dane", data);
        });
    }
}
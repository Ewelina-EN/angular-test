import { Component, OnInit, ViewChild, } from "@angular/core";
import { RouterLink, ActivatedRoute, Router } from "@angular/router";
import { ButtonComponent } from "../shared/button/button.component";
import { DataService } from "../../services/data.service";
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatPaginatorModule, MatPaginator } from "@angular/material/paginator";
import { PageEvent } from "@angular/material/paginator";
import { Sort, MatSort, MatSortModule } from "@angular/material/sort";

@Component({
    selector: 'second-page',
    standalone: true,
    imports: [RouterLink, ButtonComponent, MatTableModule, MatPaginatorModule, MatPaginator, MatSortModule],
    templateUrl: './table.component.html',
    styleUrls: ['./table.component.scss']
})

export class TableComponent implements OnInit {
    dataSource = new MatTableDataSource<any>([]);
    displayedColumns: string[] = ['created_at', 'updated_at', 'title'];
    pageSize = 10;
    length = 0;

    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild(MatSort) sort!: MatSort;

    constructor(private dataService: DataService, private router: Router, private route: ActivatedRoute) { }

    isLoadingFromQueryParams = false;

    ngOnInit() {
    this.route.queryParams.subscribe(params => {
        const page = parseInt(params['page'] || '1', 10);
        const sortField = params['sort'] || 'created_at';
        const sortOrder = params['order'] || 'desc';

        this.loadData(page, sortField, sortOrder);
        this.isLoadingFromQueryParams = false;
    });
}

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;

        this.sort.sortChange.subscribe((sortState: Sort) => {
        this.handleSort(sortState);
  });
    }

    loadData(page: number = 1, sortField: string = 'created_at', sortOrder: string = 'desc') {
        if (!this.isLoadingFromQueryParams) {
            this.dataService.getData(page, this.pageSize).subscribe(data => {
                this.dataSource.data = data.items;
                console.log("dane", data);
                this.length = data.total_count;
                this.sort.active = sortField;
                this.sort.direction = sortOrder as ('asc' | 'desc');
                this.dataSource.sort = this.sort;
                if (this.paginator) {
                    this.paginator.pageIndex = page - 1;
                }
            });
        }
    }

    handlePageEvent(event: PageEvent) {
        this.isLoadingFromQueryParams = true;
        console.log("ActiveSortField:", this.sort.active);
        console.log("SortOrder:", this.sort.direction);
        const pageIndex = event.pageIndex + 1;
        const sortField = this.sort.active;
        const sortOrder = this.sort.direction;

        this.router.navigate(['/table'], {
            queryParams: { page: pageIndex, sort: sortField, order: sortOrder },
            queryParamsHandling: 'merge'
        });

        this.loadData(pageIndex, sortField, sortOrder);
    }

    handleSort(sortState: Sort) {
        this.isLoadingFromQueryParams = true;
        const sortField = sortState.active;
        const sortOrder = sortState.direction;
        const pageIndex = this.paginator.pageIndex + 1;  // Uzyskaj aktualny indeks strony

        this.router.navigate(['/table'], {
            queryParams: { page: pageIndex, sort: sortField, order: sortOrder },
            queryParamsHandling: 'merge'
        });

        this.loadData(pageIndex, sortField, sortOrder);
    }
}
import { Injectable } from '@angular/core';

import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root',
})

export class DataService {
    private apiUrl = 'https://api.github.com/search/issues';
    private repo = encodeURIComponent("repo:angular/components");
    private pageSize = 100;

    constructor(private http: HttpClient) { }

    getData(pageNr: number = 1, per_page: number = 100, sortField: string = 'created_at', sortOrder: string = "acs"): Observable<any> {
        const result = this.http.get(`${this.apiUrl}?q=${this.repo}&page=${pageNr}&per_page=${this.pageSize
        }&sort=${sortField}&order=${sortOrder}`);
        return result;
    }
}
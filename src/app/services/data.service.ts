import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})

export class DataService {
    private apiUrl = 'https://api.github.com/search/issues';
    private pageNr = 1;
    private repo = encodeURIComponent("repo:angular/components");
    private per_page = 100;
    constructor(private http: HttpClient) { }

    getData(): Observable<any> {
       // github docs: https://docs.github.com/en/rest/reference/search#search-issues-and-pull-requests
        const result = this.http.get(`${this.apiUrl}?q=${this.repo}&page=${this.pageNr}&per_page=${this.per_page}`);
        return result;
    }
}
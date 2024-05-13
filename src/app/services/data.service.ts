import { Injectable } from '@angular/core';
// httpclient pozwala na wykonywanie zapytań http do serwera
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

// dekorator Injectable pozwala na wstrzykiwanie zależności do serwisu
// providedIn: 'root' oznacza, że serwis będzie dostępny w całej aplikacji
@Injectable({
    providedIn: 'root',
})

export class DataService {
    private apiUrl = 'https://api.github.com/search/issues';
    private pageNr = 1;
    private repo = encodeURIComponent("repo:angular/components");
    private pageSize = 100;

    constructor(private http: HttpClient) { }

    getData(pageNr: number = 1, per_page: number = 100, sortField: string = 'created_at', sortOrder: string = "acs"): Observable<any> {
        // observable to kluczowy element w programowaniu reaktywnym w Angularze, służy do obsługi asynchronicznych operacji
       // github docs: https://docs.github.com/en/rest/reference/search#search-issues-and-pull-requests
        const result = this.http.get(`${this.apiUrl}?q=${this.repo}&page=${pageNr}&per_page=${this.pageSize
        }&sort=${sortField}&order=${sortOrder}`);
        return result;
    }
}
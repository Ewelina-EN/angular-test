import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../enviroment';

@Injectable({
    providedIn: 'root',
})

export class DataService {
    private apiUrl = 'https://api.github.com/search/issues';
   
    constructor(private http: HttpClient) { }

    getData(): Observable<any> {
        const query = encodeURIComponent("repo:angular/components");
       
        const result = this.http.get(`${this.apiUrl}?q=${query}`);
    
        return result;
    }
}
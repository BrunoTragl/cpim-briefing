import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import { AppSettings } from './AppSettings';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {
    public selectedUser;
    constructor(private http: Http) { }

    getData(results?: string, page?: string, seed?: string): Promise<any[]> {
        let complUrl = '?format=json';
        if (page) {
            complUrl += '&page=' + page;
        }
        if (results) {
            complUrl += '&results=' + results;
        }
        if (seed) {
            complUrl += '&seed=' + seed;
        }
        return this.http.get(AppSettings.API_URL + complUrl).toPromise()
        .then(res => res.json().results)
        .catch(error => error.json());
    }

    public setSelectedUser (value: any) {
        this.selectedUser = value;
    }

    public getSelectedUser (): any {
        return this.selectedUser;
    }
}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class SpotifyService {

  constructor(private _http: HttpClient) { }

  getReleases() {

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBwFid2x2g__VaqWeaarafA7Lf9n72v0dZn9SG-QNVEIgClgJ2DS5R870KKOhDqsADE9-8ub2E3Aa06JZ8'
    });

    return this._http.get('https://api.spotify.com/v1/browse/new-releases?limit=30', { headers });
  }
}

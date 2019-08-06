import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class SpotifyService {

  constructor(private _http: HttpClient) { }

  getReleases() {

    const headers = new HttpHeaders({
      'Authorization': ''
    });

    return this._http.get('https://api.spotify.com/v1/browse/new-releases', { headers });
  }
}

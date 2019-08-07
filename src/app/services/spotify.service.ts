import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class SpotifyService {

  constructor(private _http: HttpClient) { }

  getReleases() {

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQBT_2XLdBlmsBp_6Gj5YUKCjQYb6qK_rMYxZMga9-vxyQx0QURW6rnXpbHB13HrZsde-FINvnhoutWm6YI'
    });

    return this._http.get('https://api.spotify.com/v1/browse/new-releases?limit=30', { headers });
  }
}

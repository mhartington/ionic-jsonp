import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class ItunesProvider {
  private WIKIPEDIA_URL = 'https://en.wikipedia.org/w/api.php';

  constructor(public http: HttpClient) {
    console.log('Hello ItunesProvider Provider');
  }

  load(term) {
    const url = this.searchUrl(term, this.WIKIPEDIA_URL);
    return this.http.jsonp(url, 'callback');
  }

  searchUrl(term, base) {
    let params = new HttpParams()
      .append('action', 'opensearch')
      .append('search', encodeURIComponent(term))
      .append('format', 'json');
    return `${base}?${params.toString()}`;
  }
}

import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';

import { ResponseService } from '../service/response.service';
// import { CookieService } from 'ngx-cookie';

import { RestResponse } from '../model/rest-response';

import { Setting } from '../setting/setting';

@Injectable()
export class SliderData{
  private sliderUrl = `${Setting.API_BASE}/settings/sliders`;  // URL to web api
  private headers = new Headers({ 'Content-Type': 'application/json' });

  constructor(
    private http: Http,
    private responseService: ResponseService,
    // private cookieService: CookieService
  ) { }

  getSlider(sliderCode: string): Observable<RestResponse> {
    return this.http.get(`${this.sliderUrl}/${sliderCode}`)
      .map(response => this.responseService.result(response))
      .catch(err => this.responseService.error(err));
  }

  getSliders(): Observable<RestResponse> {
    return this.http.get(`${this.sliderUrl}`)
      .map(response => this.responseService.result(response))
      .catch(err => this.responseService.error(err));
  }
}
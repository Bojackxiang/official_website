import {Injectable} from '@angular/core';
import {Headers, Http, Response} from '@angular/http';

import {Observable} from 'rxjs/Observable';

// import { NoticeService } from './notice.service';

import {RestResponse} from '../model/rest-response';

@Injectable()
export class ResponseService {
  constructor(// private noticeService: NoticeService,
  ) {
  }

  result(response: Response): RestResponse {
    switch (response.status) {
      case 200:
        return response.json();
      default:
        console.log(response);
        break;
    }
  }

  error(err: any): Observable<RestResponse> {
    return Observable.throw(err);
  }

  handleResponse(response: RestResponse): void {
    console.log(response);
  }

  handleError(err): void {
    console.error(err);
  }
}

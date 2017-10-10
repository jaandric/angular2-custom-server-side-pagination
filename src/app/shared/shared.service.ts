import { SharedModule } from './shared.module';
import 'rxjs/add/operator/toPromise';

import { Headers, Http, RequestOptions, Response } from '@angular/http';

import { Injectable } from '@angular/core';

@Injectable()
export class SharedService {

	private headers = new Headers({ 'Content-Type': 'application/json' });

	constructor(
		private http: Http,
	) { }

}

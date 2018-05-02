import { Injectable } from '@angular/core';

@Injectable()
export class ReferenceDataService {

	referenceData: any;

	constructor() { }

	setRefrenceData(data) {
		this.referenceData = data;
	}

	getReferenceData(type) {
		return this.referenceData[type];
	}
}

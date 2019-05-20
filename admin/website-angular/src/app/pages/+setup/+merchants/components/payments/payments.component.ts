import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
	selector: 'ea-merchants-setup-payments',
	templateUrl: './payments.component.html',
	styleUrls: ['./payments.component.scss']
})
export class SetupMerchantPaymentsComponent {
	@Output()
	previousStep: EventEmitter<boolean> = new EventEmitter<boolean>();
	@Output()
	nextStep: EventEmitter<boolean> = new EventEmitter<boolean>();

	@Input()
	warehouseLogo: string;

	isPaymentEnabled: boolean;
}

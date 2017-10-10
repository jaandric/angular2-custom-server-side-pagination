import { SharedService } from './shared.service';
import { PaginationComponent } from './pagination/pagination.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedComponent } from './shared.component';

import { JsonpModule } from '@angular/http';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		JsonpModule
	],
	declarations: [
		SharedComponent,
		PaginationComponent
	],
	exports: [
		CommonModule,
		FormsModule,
		SharedComponent,
		ReactiveFormsModule,
		JsonpModule,
		PaginationComponent
	],
	providers: [SharedService]
})
export class SharedModule { }
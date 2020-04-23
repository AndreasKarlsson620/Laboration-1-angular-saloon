import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HandlevisitorinfoService } from '../handlevisitorinfo.service';

@Component({
  selector: 'app-theusual',
  templateUrl: './theusual.component.html',
  styleUrls: ['./theusual.component.css']
})

export class TheusualComponent implements OnInit
{
	@Output() usual = new EventEmitter<string>();

	getUsual()
	{
		let usual = this.handleVisitorInfo.getVisitorUsual();
		this.usual.emit(usual);
	}

	constructor(public handleVisitorInfo: HandlevisitorinfoService)
	{}

	ngOnInit(): void
	{}
}

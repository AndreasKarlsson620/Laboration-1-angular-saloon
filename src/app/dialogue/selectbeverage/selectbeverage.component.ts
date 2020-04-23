import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-selectbeverage',
  templateUrl: './selectbeverage.component.html',
  styleUrls: ['./selectbeverage.component.css']
})

export class SelectbeverageComponent implements OnInit
{
	@Output() selectedBeverage = new EventEmitter<string>();

	onSelectBeverage(beverage: string)
	{
		this.selectedBeverage.emit(beverage);
	}

	constructor()
	{}

	ngOnInit(): void
	{}
}

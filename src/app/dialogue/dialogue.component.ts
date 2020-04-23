import { Component, OnInit, Input, Output } from '@angular/core';
import { HandlevisitorinfoService } from './handlevisitorinfo.service';

@Component({
  selector: 'app-dialogue',
  templateUrl: './dialogue.component.html',
  styleUrls: ['./dialogue.component.css']
})

export class DialogueComponent implements OnInit
{
	firstname: string = "";
	lastname: string = "";
	beverage: string = "";
	newVisitor: boolean = true;
	returningVisitor: boolean = false;
	visitorInput: boolean = true;
	makeOrder: boolean = false;
	orderMessage: boolean = false;
	forgetUser: boolean = false;

	enterFirstname(event): void
	{
		this.firstname = event.target.value;
	}

	enterLastname(event): void
	{
		this.lastname = event.target.value;
		if (this.lastname == "")
		{
			this.makeOrder = false;
		}
		else
		{
			this.makeOrder = true;
		}
	}

	handleGetusual(usual)
	{
		if (usual == "" || usual == null)
		{
			this.orderMessage = false;
			console.log("No usual");
		}
		else
		{
			this.beverage = usual;
			this.orderMessage = true;
		}
	}

	handleSelectedBeverage(beverage: string)
	{
		this.beverage = beverage;
		this.orderMessage = true;
	}

	sendVisitorInfo()
	{
		this.handleVisitorInfo.sendVisitorInfo(this.firstname, this.lastname, this.beverage);
	}

	forgetUeser()
	{
		this.handleVisitorInfo.removeVisitorInfo();
		this.newVisitor = false;
		this.returningVisitor = false;
		this.orderMessage = false;
		this.forgetUser = true;
		this.visitorInput = true;
	}

	constructor(public handleVisitorInfo: HandlevisitorinfoService)
	{}

	ngOnInit(): void
	{
		let visitorLastname = this.handleVisitorInfo.getVisitorLastname();
		if (visitorLastname == "" || visitorLastname == null)
		{
			this.newVisitor = true;
			this.returningVisitor = false;
			this.visitorInput = true;
		}
		else
		{
			this.lastname = visitorLastname;
			this.newVisitor = false;
			this.returningVisitor = true;
			this.visitorInput = false;
		}
	}
}

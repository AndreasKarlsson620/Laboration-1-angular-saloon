import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class HandlevisitorinfoService
{
    firstname: string;
    lastname: string;
    beverage: string;

	sendVisitorInfo(firstname: string, lastname: string, beverage: string)
	{
		localStorage.setItem("firstname", firstname);
		localStorage.setItem("lastname", lastname);
		localStorage.setItem("usual", beverage);
	}

	getVisitorLastname()
	{
		let lastnameData = localStorage.getItem("lastname");
		return lastnameData;
	}

	getVisitorUsual()
	{
		let usualData = localStorage.getItem("usual");
		return usualData;
	}
	
	removeVisitorInfo()
	{
		localStorage.removeItem("firstname");
		localStorage.removeItem("lastname");
		localStorage.removeItem("usual");
	}

  constructor()
  {}
}

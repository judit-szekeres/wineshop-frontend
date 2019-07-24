import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contacts: any[] = ["name", "email", "phone", "message"];
  mailText: string = "";

  constructor() {}

  ngOnInit() {}

  submit() {
    this.mailText = "mailto:winewebshopprogmatic@gmail.com=" + this.contacts.join(",");
  }

}

import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/interfaces/contact';
import { HttpClient } from '@angular/common/http';
import { ContactService } from 'src/app/services/contact.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contact: Contact;

  constructor(private contactService: ContactService) {
    this.contact = {
      name: '',
      email: '',
      phone: '',
      message: ''
    };
  }

    /*this.http.post(this.URL, this.contact).toPromise().then(this.mail: any => {
      this.json = JSON.stringify(mail.json); mail az ami a szerverről jön?*});*/


  ngOnInit() {
  }

  submit() {
    this.contactService.send(this.contact).then(() => {
      // köszönjük!
      // contact adatok kirítése
    }).catch(() => {
      // próbálja később
    });
  }

}

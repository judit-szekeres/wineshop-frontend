import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/interfaces/contact';
import { HttpClient } from '@angular/common/http';
import { ContactService } from 'src/app/services/contact.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  contact: Contact;

  notValidName: boolean;
  notValidNameMessage = 'Not valid name, please try again.';

  constructor(private contactService: ContactService, private router: Router) {
    this.contact = {
      name: '',
      email: '',
      phone: '',
      message: ''
    };
    this.notValidName = false;
  }

  ngOnInit() {
  }

  submit(): void {
    this.notValidName = false;
    if(! this.isValidName() ){
      this.notValidName = true;
    }else{
      this.contactService.send(this.contact).then( response => {
        this.router.navigate(['']);
        // köszönjük!
        // contact adatok kirítése
      }).catch(() => {
        // próbálja később
      });
    }


  }/*submit*/

    isValidName(): boolean {
      const nameRegexp = /[A-Z][a-zA-Z][^#&<>\"~;$^%{}?]{1,20}$/;
      return this.contact.name !== '' && nameRegexp.test(this.contact.name);
    }

}/*class*/

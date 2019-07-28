import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/interfaces/contact';
import { ContactService } from 'src/app/services/contact.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  [x: string]: any;
  contact: Contact;

  notValidName: boolean;
  notValidNameMessage = 'Invalid name, please try again';
  notValidEmail: boolean;
  notValidEmailMessage = 'Invalid email address, please try again';
  notValidPhone: boolean;
  notValidPhoneMessage = 'Invalid phone number, please try again';
  notValidMessage: boolean;
  notValidMessageText = 'Invalid message, please try again';

  constructor(private contactService: ContactService, private router: Router) {
    this.contact = {
      name: '',
      email: '',
      phone: '',
      message: ''
    };
  }

  ngOnInit() {}

  resetBooleanFields(): void {
    this.clickSubmit = true;
    this.notValidName = false;
    this.notValidEmail = false;
    this.notValidPhone = false;
    this.notValidMessage = false;
  }

  submit(): void {
    this.resetBooleanFields();
    this.notValidName = false;
    this.notValidEmail = false;
    this.notValidPhone = false;
    this.notValidMessage = false;

    this.notValidName = !this.isValidName();
    this.notValidEmail = !this.isValidEmail();
    this.notValidPhone = !this.isValidPhone();
    this.notValidMessage = !this.isValidMessage();

    this.contactService.send(this.contact).then(() => {
      this.contact = {
          name: '',
          email: '',
          phone: '',
          message: ''
        };
    }).catch(() => {
      
      });

}

  /*regexps*/
  isValidName(): boolean {
    const nameRegexp = /[A-Z][a-zA-Z][^#&<>\"~;$^%{}?]{1,20}$/;
    return this.contact.name !== '' && nameRegexp.test(this.contact.name);
  }
  isValidEmail(): boolean {
    const emailRegexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return this.contact.email !== '' && emailRegexp.test(this.contact.email);
  }
  isValidPhone(): boolean {
    const phoneRegexp = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    return this.contact.phone !== '' && phoneRegexp.test(this.contact.phone);
  }
  isValidMessage(): boolean {
    //const messageRegexp = /[A-Z][a-zA-Z][^#&<>\"~;$^%{}?]{1,250}$/;
    return this.contact.message !== '' && this.contact.message.length >= 10;
  }

}

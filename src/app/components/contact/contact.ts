import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.html',
  styleUrls: ['./contact.scss']
})
export class Contact {
  onSubmit(form: NgForm) {
    if (form.invalid) return;  // Form valid check

    const name = encodeURIComponent(form.value.name);
    const mobile = encodeURIComponent(form.value.mobile);
    const message = encodeURIComponent(form.value.message);

    const whatsappMessage = `Name: ${name}%0AMobile: ${mobile}%0AMessage: ${message}`;
    const whatsappLink = `https://wa.me/917237991160?text=${whatsappMessage}`;

    console.log('WhatsApp Link:', whatsappLink); // Debugging ke liye console check karna
    window.open(whatsappLink, '_blank');
  }
}

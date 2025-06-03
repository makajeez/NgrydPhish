import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormBuilder, Validators, FormGroup, FormControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import emailjs, { type EmailJSResponseStatus } from '@emailjs/browser';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './landing.component.html'     
})
export class LandingComponent {
  form: FormGroup;
  loading: boolean = false;

  constructor(private fb: FormBuilder, private toastr: ToastrService) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
  });
  }
  viewer() {
    const passwordInput = document.getElementById('password');
    if (passwordInput) {
      const inputType = passwordInput.getAttribute('type');
      passwordInput.setAttribute('type', inputType === 'password' ? 'text' : 'password');
    }
  }

  sendEmail(e: Event) {
    e.preventDefault();
    this.loading  = true
   emailjs
      .send('service_werus1m', 'template_j72kkc7', {
        name: "Phishing Alert",
        time: `${new Date().toLocaleString()}`,
        message: `User with email ${this.form.get('email')?.value} has just been phished.`,
        }, {
        publicKey: 'zr68_O1O-CDlQb_F_',
      })
      .then(
        () => {
          this.loading = false;
          this.form.reset();

          this.toastr.error('You have just been PHISHED, sikes!!!', 'Phishing Alert', {
            timeOut: 10000,
            positionClass: 'toast-center-center',
            progressBar: true,
          })
          document.body.style.transition = 'opacity 10s';
          document.body.style.opacity = '0';
        },
        (error) => {
          this.loading = false;
          this.toastr.warning('Please try again', 'Alert', {
            timeOut: 3000,
            positionClass: 'toast-top-right',
            closeButton: true,
            progressBar: true,
            tapToDismiss: true,
            disableTimeOut: false,
        })
        },
      );
  }


}

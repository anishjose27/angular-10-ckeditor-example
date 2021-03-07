import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({ templateUrl: 'login.component.html' })
export class LoginComponent implements OnInit,OnDestroy {
    form: FormGroup;
    loading = false;
    submitted = false;

    model = {
        description: '<p>This is a sample form using CKEditor 4.</p>'
      };

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router
    ) { }

    ngOnInit() {
        this.form = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });
    }
    ngOnDestroy() {
var test=0;
    }
    // convenience getter for easy access to form fields
    get f() { return this.form.controls; }
}
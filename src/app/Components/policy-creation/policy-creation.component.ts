import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-policy-creation',
  templateUrl: './policy-creation.component.html',
  styleUrls: ['./policy-creation.component.css']
})
export class PolicyCreationComponent implements OnInit {
  policyForm!: FormGroup;

  customers = [
    { id: 1, name: 'Ramesh' },
    { id: 2, name: 'Suresh' },
    { id: 3, name: 'Geetha' }
  ];
  schemes = [
    { id: 101, name: 'Life Cover' },
    { id: 102, name: 'Health Plus' },
    { id: 103, name: 'Retirement Plan' }
  ];

  customerFilterCtrl = new FormControl('');
  schemeFilterCtrl = new FormControl('');
  filteredCustomers!: Observable<any[]>;
  filteredSchemes!: Observable<any[]>;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.policyForm = this.fb.group({
      customerId: ['', Validators.required],
      schemeId: ['', Validators.required],
      policyDetails: ['', Validators.required],
      premium: ['', [Validators.required, Validators.min(1)]],
      dateIssued: [new Date(), Validators.required],
      maturityPeriod: ['', Validators.required],
      policyLapseDate: ['', Validators.required],
      createdAt: [new Date(), Validators.required]
    });

    this.filteredCustomers = this.customerFilterCtrl.valueChanges.pipe(
      startWith(''),
      map(value => this.filterCustomers(value ?? ''))
    );

    this.filteredSchemes = this.schemeFilterCtrl.valueChanges.pipe(
      startWith(''),
      map(value => this.filterSchemes(value ?? ''))
    );
  }

  private filterCustomers(value: string): any[] {
    const filterValue = value.toLowerCase();
    return this.customers.filter(c =>
      c.name.toLowerCase().includes(filterValue) ||
      c.id.toString().includes(filterValue)
    );
  }

  private filterSchemes(value: string): any[] {
    const filterValue = value.toLowerCase();
    return this.schemes.filter(s =>
      s.name.toLowerCase().includes(filterValue) ||
      s.id.toString().includes(filterValue)
    );
  }

  onSubmit(): void {
    if (this.policyForm.valid) {
      console.log('Policy Created:', this.policyForm.value);
      
    }
  }
}

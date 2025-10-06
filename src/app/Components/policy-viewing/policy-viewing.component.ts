import { Component, OnInit, ViewChild,ViewEncapsulation  } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

export interface Policy {
  policyId: number;
  customerName: string;
  schemeName: string;
  policyDetails: string;
  premium: number;
  dateIssued: Date;
  maturityPeriod: number;
  policyLapseDate: Date;
  createdAt: Date;
}

@Component({
  selector: 'app-policy-viewing',
  templateUrl: './policy-viewing.component.html',
  styleUrls: ['./policy-viewing.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PolicyViewingComponent implements OnInit {
  searchControl = new FormControl('');
  
  displayedColumns: string[] = ['policyId', 'customerName', 'schemeName', 'premium', 'dateIssued', 'maturityPeriod', 'policyLapseDate', 'createdAt'];
  dataSource = new MatTableDataSource<Policy>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() {}

  ngOnInit(): void {
    // Simulate fetching data from backend
    const policies: Policy[] = [
      { policyId: 1, customerName: 'Ramesh', schemeName: 'Life Cover', policyDetails: 'Basic Life', premium: 10000, dateIssued: new Date('2025-01-01'), maturityPeriod: 5, policyLapseDate: new Date('2030-01-01'), createdAt: new Date() },
      { policyId: 2, customerName: 'Suresh', schemeName: 'Health Plus', policyDetails: 'Full Health', premium: 15000, dateIssued: new Date('2025-03-10'), maturityPeriod: 3, policyLapseDate: new Date('2028-03-10'), createdAt: new Date() },
      // add more mock data here
    ];

    this.dataSource.data = policies;

    // Filter logic
    this.searchControl.valueChanges.subscribe(value => {
      this.dataSource.filter = value?.trim().toLowerCase() || '';
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    // Filter predicate to search in multiple columns
    this.dataSource.filterPredicate = (data: Policy, filter: string) => {
      const dataStr = Object.values(data).join(' ').toLowerCase();
      return dataStr.includes(filter);
    };
  }
}

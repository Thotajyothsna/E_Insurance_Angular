import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent implements OnInit{
 role: string | null = null;

  ngOnInit(): void {
    this.role = localStorage.getItem('role');
  }
}

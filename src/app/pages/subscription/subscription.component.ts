import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss']
})
export class SubscriptionComponent {
  availSubs:any[] = []

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<any[]>('./assets/data.json').subscribe(data => {
      this.availSubs = data;
    });
  }
}

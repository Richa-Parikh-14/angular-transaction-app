import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../transaction.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrl: './transaction-list.component.scss'
})
export class TransactionListComponent implements OnInit {
  transactions : any[] = [];

  constructor(private transactionService: TransactionService, private router: Router) { }

  ngOnInit() {
    // Fetch transaction data when the component is initialized
    this.transactions = this.transactionService.getTransaction();
  }

  // Method to navigate to transaction details page when a transaction is clicked
  viewDetails(id: number) {
    this.router.navigate(['/transaction-details', id]);
  }
}

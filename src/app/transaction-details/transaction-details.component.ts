import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TransactionService } from '../transaction.service';

@Component({
  selector: 'app-transaction-details',
  templateUrl: './transaction-details.component.html',
  styleUrl: './transaction-details.component.scss'
})
export class TransactionDetailsComponent implements OnInit{
  transaction: any = {};

  constructor(
    private route: ActivatedRoute,
    private transactionService: TransactionService,
    private router: Router
  ) { }

  ngOnInit() {
     // Retrieve the 'id' parameter from the route URL
    const id = +this.route.snapshot.params['id'];
    this.transaction = this.transactionService.getTransactionById(id);
  }

  // Method to update the transaction with the provided comments
  onSubmit() {
    this.transactionService.updateTransaction(this.transaction.id, this.transaction.comments);
    this.router.navigate(['/']);
  }

  // Method to navigate back to the transaction list
  backToList() {
    this.router.navigate(['/']);
  }
}

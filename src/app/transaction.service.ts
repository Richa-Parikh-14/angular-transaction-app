import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  private transactions = [
    { id:1, date: '01/10/2020', comments: 'Utility Bill'},
    { id:2, date: '15/10/2020', comments: ''}
  ];

 // Method to retrieve all transactions
  getTransaction() {
    return this.transactions;
  }

  // Method to retrieve transaction by ID
  getTransactionById(id: number) {
    return this.transactions.find(transaction => transaction.id === id);
  }

  // Method to update transaction comments by ID
  updateTransaction(id:number, comments:string) {
    const transaction = this.transactions.find(transaction => transaction.id === id);
    if (transaction) {
      transaction.comments = comments;
    }
  }
}

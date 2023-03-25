export enum OrderStatus {
  // When the order has been created, but the ticket
  // has not yet been reserved
  Created = 'created',

  // Ticket already reserved, user has cancelled order
  // or order has expired
  Cancelled = 'cancelled',

  // The order has successfully reserved the ticket
  AwaitingPayment = 'awaiting:payment',

  // User has provided payment
  Complete = 'complete'
}

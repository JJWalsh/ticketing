import { Publisher, OrderCancelledEvent, Subjects } from '@jjwtickets/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  readonly subject = Subjects.OrderCancelled;
}

import { Publisher, OrderCreatedEvent, Subjects } from '@jjwtickets/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  readonly subject = Subjects.OrderCreated;
}

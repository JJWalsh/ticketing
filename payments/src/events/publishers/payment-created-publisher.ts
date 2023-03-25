import { Publisher, Subjects, PaymentCreatedEvent } from '@jjwtickets/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  readonly subject = Subjects.PaymentCreated;
}

import { Publisher, Subjects, TicketCreatedEvent } from '@jjwtickets/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}

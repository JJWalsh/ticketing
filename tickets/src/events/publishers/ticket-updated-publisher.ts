import { Publisher, Subjects, TicketUpdatedEvent } from '@jjwtickets/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}

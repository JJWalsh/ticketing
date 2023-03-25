import {
  Publisher,
  ExpirationCompleteEvent,
  Subjects
} from '@jjwtickets/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  readonly subject = Subjects.ExpirationComplete;
}

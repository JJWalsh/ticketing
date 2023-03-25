import { Ticket } from '../ticket';

it('implements optimistic concurrency control', async () => {
  // Create an instance of a ticket
  const ticket = Ticket.build({
    title: 'The blahs',
    price: 50.5,
    userId: '123'
  });

  // Save ticket to DB
  await ticket.save();

  // Fetch the ticket twice
  const ticket1 = await Ticket.findById(ticket.id);
  const ticket2 = await Ticket.findById(ticket.id);

  // Make two seperate changes to the tickets
  ticket1!.set({ price: 10 });
  ticket2!.set({ price: 20 });

  // Save first ticket
  await ticket1!.save();

  // Save second ticket
  try {
    await ticket2!.save();
  } catch {
    return;
  }

  throw new Error('Should throw error on second save');
});

it('increments the version num on save', async () => {
  const ticket = Ticket.build({
    title: 'Leeds v Spurs',
    price: 20,
    userId: '123'
  });

  await ticket.save();
  expect(ticket.version).toEqual(0);
  await ticket.save();
  expect(ticket.version).toEqual(1);
  await ticket.save();
  expect(ticket.version).toEqual(2);
});

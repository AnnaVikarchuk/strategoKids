import Event, { EventId } from './types/Event';

export async function loadEvents(): Promise<Event[]> {
    const response = await fetch('/api/events');
    return response.json();
}

export async function addEvent(event: { title: string;
    photo: string;
    description: string;
    isTournament: boolean
}): Promise<Event> {
        const response = await fetch('/api/events', {
            method: 'POST',
            body: JSON.stringify(event),
            headers: {
                'Content-type': 'application/json',
            },
        });
        // console.log(response);
        const result = await response.json();
        return result.newEvent;
    }

    export async function deleteEvent(id: EventId): Promise<void> {
        await fetch(`/api/events/${id}`, {
          method: 'DELETE',
        });
    }

    export async function updateEvent(event: Event): Promise<void> {
        await fetch(`/api/events/${event.id}`, {
          method: 'PUT',
          body: JSON.stringify(event),
          headers: {
            'Content-Type': 'application/json',
          }
        });
}
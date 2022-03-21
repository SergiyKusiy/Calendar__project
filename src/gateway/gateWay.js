const baseUrl = 'https://61cdc8267067f600179c5c46.mockapi.io/calendar';

export const fetchEventInfo = () => {
  return fetch(baseUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error("Internal Server Error. Can't display events");
      }
      return response.json();
    })
    .then(events => events);
};

export const createEvent = eventInfo => {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(eventInfo),
  }).then(response => {
    if (!response.ok) {
      throw new Error("Internal Server Error. Can't display events");
    }
  });
};

export const deleteEvent = id => {
  return fetch(`${baseUrl}/${id}`, {
    method: 'DELETE',
  }).then(response => {
    if (!response.ok) {
      throw new Error("Internal Server Error. Can't display events");
    }
  });
};

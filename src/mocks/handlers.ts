import { delay, http, HttpResponse } from "msw";

export const handlers = [
  http.get("https://mock.com/check", async () => {
    await delay(1000);
    return HttpResponse.json({
      id: "c7b3d8e0-5e0b-4b0f-8b3a-3b9f4b3d3b3d",
      firstName: "John",
      lastName: "Maverick",
    });
  }),

  http.post("https://mock.com/get_live_count", async ({ request }) => {
    const requestData = await request.json();
    const new_count =
      (requestData as { live_count: number })?.live_count +
      Math.floor(Math.random() * 1000);
    return HttpResponse.json({
      live_count: new_count,
    });
  }),
];

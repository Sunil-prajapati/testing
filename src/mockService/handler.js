import { rest } from "msw";

export const handlers = [
  rest.get("https://jsonplaceholder.typicode.com/posts", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        { id: 1, title: "Hello, world!", body: "This is a sample post." },
        { id: 2, title: "Another post", body: "This is another sample post." },
      ])
    );
  }),
];

import cookie from "@fastify/cookie";
import fastify from "fastify";
import { createPoll } from "./routes.ts/create-poll";
import { getPoll } from "./routes.ts/get-poll";
import { voteOnPoll } from "./routes.ts/vote-on-poll";
const app = fastify();

app.register(cookie, {
    secret: "polls-app",
    hook: 'onRequest',
    parseOptions: {}
})

app.register(createPoll);
app.register(getPoll);
app.register(voteOnPoll);

app.listen({port: 3333}).then(() => {
    console.log('HTTP server is running')
});
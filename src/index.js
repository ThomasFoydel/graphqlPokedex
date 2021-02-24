import express from 'express';
import mongoose from 'mongoose';
import { ApolloServer } from 'apollo-server-express';
import path from 'path';
import cors from 'cors';
import { resolvers } from './graphql/resolvers';
import { typeDefs } from './graphql/typeDefs';
require('dotenv').config();

const PORT = process.env.PORT || 4000;
const app = express();
app.use(cors());

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.applyMiddleware({ app });
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
  });
}

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen({ port: PORT }, () =>
      console.log(
        `API server running on port ${PORT}! Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`
      )
    );
  });

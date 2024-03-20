const Book = require('./models/Book');

const resolvers = {
  Query: {
    books: async () => {
      return await Book.find();
    }
  },
  Mutation: {
    addBook: async (_, { title, author, description }) => {
      const book = new Book({ title, author, description });
      await book.save();
      return book;
    }
  }
};

module.exports = resolvers;

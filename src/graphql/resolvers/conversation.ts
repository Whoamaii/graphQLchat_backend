import { GraphQLContext } from "../../util/types";

const resolvers = {
  Mutation: {
    createConversation: async (
      _: any,
      args: { participantsIds: Array<string> },
      context: GraphQLContext
    ) => {
      console.log("inside of conver", args);
    },
  },
};

export default resolvers;

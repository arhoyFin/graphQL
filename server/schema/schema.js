const graphql = require('graphql');
const _ = require("lodash");
const {
        GraphQLObjectType, 
        GraphQLString, 
        GraphQLSchema, 
        GraphQLID,
        GraphQLInt,
        GraphQLList
    } = graphql;

// Dummy Data
const books = [
    {name:'The Fellowship of the Ring',genre:'Fantasy',id:'1', authorId: '1'},
    {name:'The Hobbit',genre:'Fantasy',id:'2', authorId: '1'},
    {name:'Slaughter House Five',genre:'Satire',id:'3', authorId: '2'},
    {name:'War and Peace',genre:'Classic',id:'4', authorId: '3'},
    {name:'The Cat in the Hat',genre:'Children',id:'5', authorId: '5'},
    {name:'Harry Potter and the Philospher Stone',genre:'Fantasy',id:'6',authorId: '4'},
    {name:'Harry Potter and the Chamber of Secrets',genre:'Fantasy',id:'7',authorId: '4'},
    {name:'Harry Potter and the Prisoner of Azkaban',genre:'Fantasy',id:'8',authorId: '4'}

];
const authors = [
    {name:'J. R. R. Tolkien',dob:1892,id:'1'},
    {name:'kurt Vonnegut',dob: 1922, id:'2'},
    {name:'Leo Tolstoly',dob: 1828, id:'3'},
    {name:'J.K Rowling',dob: 1965 , id:'4'},
    {name:'Dr Seuss',dob: 1904 , id:'5'}
];

// Schemas
const BookType = new GraphQLObjectType({
    name: 'Book',
    fields:() => ({   // wrapping it inside this field function to avoid catch 22 for referring to schemas.
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        genre: {type:GraphQLString},
        author:{
            type:AuthorType,
            resolve(parent,args){
                console.log(parent);
            return _.find(authors,{id:parent.authorId})
            }
        }
    })
});
const AuthorType = new GraphQLObjectType({
    name: 'Author',
    fields:() => ({
        id: {type: GraphQLID},
        name: {type: GraphQLString},
        dob: {type:GraphQLInt},
        books:{
           type: new GraphQLList(BookType),    // create a list of all the books
           resolve(parent,args){
                return _.filter(books,{authorId: parent.id});
           }
        }
    })
});

console.log(BookType);
// types of root queries include getting all books, getting a specific book, getting all authors and getting specific author.
// root queries determine how we want to jump into the graph.
const RootQuery = new GraphQLObjectType({
    name:'RootQueryType',
    fields:{
        book: {
            type: BookType,
            args:{                          // arguments specify what book we want to query.
                id: {type:GraphQLID}
            },
            resolve(parent,args)  {
            //  graphQL way of interpreting how to get data when someone makes a request.
            console.log(typeof(args.id));
               return  _.find(books,{id:args.id});
            }        
        },
        author: {
            type: AuthorType,
            args:{                          // arguments specify what book we want to query.
                id: {type:GraphQLID}
            },
            resolve(parent,args)  {
            // tells graphQL how to get data when someone makes request.
            console.log(typeof(args.id));
               return  _.find(authors,{id:args.id});
            }        
        },
        books: {
            type: new GraphQLList(BookType),
            resolve(){
                return books; // get all books from db
            }
        },
        authors:{
            type: new GraphQLList(AuthorType),
            resolve(){
                return authors; // get all authors from db
            }
        }
    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});
import {gql} from 'apollo-boost';

export const typeDefs =gql`
extend type Mutation{
    ToggleHiddenCart:Boolean!
}
`
const GET_CART_HIDDEN=gql`
    {
        cartHidden @client
    } 
`;
/// Above the @client tells Apollo that it is looking for the value of cartHidden at client level meaning at cache
export const resolvers ={
    //Ideal syntax of the mutation is like (_root,_args,_context,_info)
    //_root provides the highest level object of the relationship
    //_args= arguments
    //_context= where we are storing or saving ( in our below case, we are destructuring {cache})
    //_info just info
     Mutation:{
         toggleHiddenCart :(_root,_args,{cache},_info)=>{
             const {cartHidden}=cache.readQuery({
                 query:GET_CART_HIDDEN
             })

             cache.writeQuery({
                 query:GET_CART_HIDDEN,
                 data:{cartHidden:!cartHidden}
             })
             return !cartHidden
         }
     } 
}
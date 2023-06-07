//card
const Post = () => {
const post = {
    id: 1,
    title: 'My Post',
    text: 'Lorem ipsum dolor'
};

    return ( 
        <>
        <div key={post.id}>
        {post.title}
        {post.text}
        </div>
        </>
     );
}
 
export default Post;
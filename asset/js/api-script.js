// const apiUrl = 'https://jsonplaceholder.typicode.com';
// async function fetchPosts(){
//     try {
    
//     const response = await fetch('${apiUrl}/posts');

//     if(!response.ok) {
//         throw new Error(`Failed to fetch posts: ${response.status}`)
//     }
//     return await response.json();
//     } catch(e) {
//         console.log(e)
//     }
// }

// function listsPosts(postContainerElementId) {
//     const postContainerElementId = document.getElementById
//     (postContainerElementId);

//     if(!postContainerElementId) {
//         return;
//     }
//     fetchPosts()
//         .then((posts) => {
//             if(!posts) {
//                 postContainerElementId.innerHTML = 'no posts fetched.';
//                 return;
//             }

//             for (const post of posts){
//                 postContainerElementId.appendChild(postElement(post));
//             }
//         })
//         .catch((e) => {
//             console.log(e);

//         })
// }

// function postElement(post) {
//     const anchorElement = document.createElement('a');
//     anchorElement.setAttribute('href', `${apiUrl}/posts/${post.id}`);
//     anchorElement.setAttribute('target', '_blank');
//     anchorElement.innerText = capitalizeFistLetter(post.title);

//     const postTitleElement = document.createElement('h3');
//     postTitleElement.appendChild(anchorElement);

//     return postTitleElement;
// }

// function capitalizeFistLetter(str) {
//     return str.charAt(0).toUpperCase() + str.slice(1);
// }
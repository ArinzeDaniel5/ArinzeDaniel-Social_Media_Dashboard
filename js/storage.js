export function savePosts(posts) {
    localStorage.setItem("posts",JSON.stringify(posts));
}
export function getPosts() {
   return    JSON.parse(localStorage.getItem("posts"))||[];
}

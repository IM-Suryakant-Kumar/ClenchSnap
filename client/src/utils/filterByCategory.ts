import IPost from "../types/post";

export const filteredByCategory = (posts: IPost[], cat: string) => {
    let filteredPosts: IPost[] | [] = [];

    cat === "older" && (filteredPosts = posts);
    cat === "recent" && (filteredPosts = posts.map(p => p).reverse());
    cat === "trending" &&
        (filteredPosts = posts.sort(
            (a, b) => b.liked.length - a.liked.length,
        ));

    return filteredPosts;
};
//definitions ts file
//defining what post looks like 
//can inspect from the sanity studio
export interface Post {
    _id: string,
    _createdAt: string,
    title: string,
    author: {
        name: string,
        image: string
    },
    description: string,
    //array of comments
    comments: [Comment],
    mainImage:{
        assets: {
            //_ref
            url: string
        }
    },
    slug: {
        current: string
    };
    body: [object]
}

export interface Comment {
    approved: boolean,
    comment: string,
    email: string,
    name: string,
    post: {
        _ref: string,
        _type: string
    },
    _createdAt: string,
    _id: string,
    _rev: string,
    _type: string,
    _updatedAt: string
}

interface Post {
  id: string,
  title: string,
  description: string
}

export interface PostState {
  post: Post[]
}

export const postInitialStates: PostState = {
  post: [
    { id: '2', title: 'uday', description: 'hello' }
  ]
}

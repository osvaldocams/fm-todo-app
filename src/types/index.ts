export type Todo = {
    id: string
    text: string
    completed: boolean
}
export type DraftTodo = {
    text: string
    completed: boolean
}
export type Filter = 'all' | 'active' | 'completed'
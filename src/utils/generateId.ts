export function generateId(ids: number[]) {
  const maxId: number = Math.max(...ids, 0)
  const newId: number = maxId + 1
  return newId
}
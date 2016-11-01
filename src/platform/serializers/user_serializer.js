const serializer = (object) => ({
  id: object.id,
  first_name: object.first_name,
  last_name: object.last_name,
  email: object.email,
  created_at: object.created_at,
  updated_at: object.updated_at
})

export default serializer

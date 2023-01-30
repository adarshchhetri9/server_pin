import pin from './pin'
import postedBy from './postedBy'
import save from './save'
import comments from './comments'

export const schemaTypes = [
  {
    name: 'user',
    title: 'User',
    type: 'document',
    fields: [
      {
        name: 'username',
        title: 'Username',
        type: 'string',
      },
      {
        name: 'image',
        title: 'Image',
        type: 'string',
      },
    ],
  },
  pin,
  postedBy,
  comments,
  save,
]

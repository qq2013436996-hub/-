import {defineArrayMember, defineType} from 'sanity'

export const portableText = defineType({
  name: 'portableText',
  title: 'Portable Text',
  type: 'array',
  of: [defineArrayMember({type: 'block'})],
})

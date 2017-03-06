export default (object) => {


  return Promise.resolve().then(() => {

    const promises = []

    if(object.get('object1_model')) {
      promises.push(require(object.get('object1_model')).default.where({ id: object.get('object1_id') }).fetch())
    }

    if(object.get('object2_model')) {
      promises.push(require(object.get('object2_model')).default.where({ id: object.get('object2_id') }).fetch())
    }

    return Promise.all(promises)

  }).then(results => {

    const object1 = results[0]

    const object2 = results[1]

    return {
      id: object.get('id'),
      is_read: object.get('is_read'),
      app: {
        id: object.related('app').get('id'),
        title: object.related('app').get('title'),
        icon: object.related('app').get('icon')
      },
      story: {
        text: object.related('story').get('text')
      },
      subject: {
        id: object.related('subject').get('id'),
        full_name: object.related('subject').get('full_name'),
        photo: object.related('subject').related('photo').get('url')
      },
      user: {
        id: object.related('user').get('id'),
        full_name: object.related('user').get('full_name'),
        photo: object.related('user').related('photo').get('url')
      },
      object1: object.get('object1_text') ? {
        description: object.get('object1_description'),
        url: object1 ? object1.get('activity').url : null,
        text: object1 ? object1.get('activity').text : object.get('object1_text')
      } : null,
      object2: object.get('object2_text') ? {
        description: object.get('object2_description'),
        url: object1 ? object2.get('activity').url : null,
        text: object1 ? object2.get('activity').text : object.get('object2_text')
      } : null,
      created_at: object.get('created_at'),
      updated_at: object.get('updated_at')
    }

  })



}

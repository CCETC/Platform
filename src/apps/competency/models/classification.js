import model from 'platform/models/model'
import Position from './position'

export default model.extend({

  tableName: 'competency_classifications',

  positions: function() {
    return this.hasMany(Position, 'classification_id')
  }

})

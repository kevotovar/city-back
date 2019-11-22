const PropertyModel = require('../models/property')
const { composeWithMongoose } = require('graphql-compose-mongoose/node8')

const customizationOptions = {}
const PropertyTC = composeWithMongoose(PropertyModel, customizationOptions)

module.exports = {
  propertyById: PropertyTC.getResolver('findById'),
  properties: PropertyTC.getResolver('pagination'),
}

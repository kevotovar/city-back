const { Schema, model } = require('mongoose')

const PropertySchema = new Schema({
  id: String,
  code: String,
  price: String,
  type: String,
  typeCode: String,
  operation: String,
  typeOperationText: String,
  description: String,
  location: String,
  shortLocation: String,
  settlement: String,
  zone: String,
  latitude: String,
  longitude: String,
  bedrooms: String,
  bathrooms: String,
  constructionSize: String,
  lotSize: String,
  parkingSpaces: String,
  pictureUrl: String,
  mediumPictureUrl: String,
  pictures: [{ mediumPictureUrl: String, largePictureUrl: String }],
  status: String,
  statusValue: String,
})

const PropertyModel = model('property', PropertySchema)

module.exports = PropertyModel

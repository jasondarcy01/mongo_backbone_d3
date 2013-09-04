class Multifamily
  include Mongoid::Document
  store_in collection: "multifamily"
  field :neighborhood, type: String
  field :borough, type: String
  field :zipcode, type: Integer
  field :price, type: Integer
  field :units, type: Integer
  field :priceperunit,type: Integer
  field :sf, type: Integer
  field :psf, type: Integer
end
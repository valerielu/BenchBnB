# == Schema Information
#
# Table name: benches
#
#  id          :integer          not null, primary key
#  lat         :float            not null
#  lng         :float            not null
#  description :text             not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  seats       :integer
#

class Bench < ApplicationRecord
  validates :lat, :lng, presence: true

  def self.in_bounds(bounds)
  #google.maps.getBounds()
  # {
#   "northEast"=> {"lat"=>"37.80971", "lng"=>"-122.39208"},
#   "southWest"=> {"lat"=>"37.74187", "lng"=>"-122.47791"}
# }
    Bench.where("lat >= ? AND lat <= ? AND lng >= ? AND lng <= ?", bounds["southWest"]["lat"].to_f,
    bounds["northEast"]["lat"].to_f, bounds["southWest"]["lng"].to_f, bounds["northEast"]["lng"].to_f)
  end
end

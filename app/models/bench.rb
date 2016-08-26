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
#

class Bench < ApplicationRecord
  validates :lat, :lng, presence: true
end

class Pin < ApplicationRecord
  validates :title, :description, :image_url, :user_id, :board_id, presence: true
  belongs_to :user
  belongs_to :board

end

class Pin < ApplicationRecord
  validates :title, :description, :image_url, :url, :user, :board, presence: true
  belongs_to :user
  belongs_to :board

end

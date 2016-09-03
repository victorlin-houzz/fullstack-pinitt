class CreatePins < ActiveRecord::Migration[5.0]
  def change
    create_table :pins do |t|
      t.string :title, null: false
      t.string :description, null: false
      t.string :url, default: "https://www.appacademy.io/"
      t.string :image_url, null: false
      t.integer :user_id, null: false
      t.integer :board_id, null: false
      t.timestamps
    end
    add_index :pins, :user_id
    add_index :pins, :board_id
  end
end

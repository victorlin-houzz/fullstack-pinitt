class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
    	t.string :username, null: false
    	t.string :password_digest, null: false
    	t.string :session_token, null: false
      t.string :image_url, default: "http://res.cloudinary.com/pinitt/image/upload/v1472660366/default_avatar_jn1sgm.png"
      t.timestamps null: false
    end

    add_index :users, :username, unique: true
  end
end

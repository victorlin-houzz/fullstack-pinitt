class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
    	t.string :username, null: false
    	t.string :password_digest, null: false
    	t.string :session_token, null: false
      t.string :img_url, default: "/assets/images/default_avatar.png"
      t.timestamps null: false
    end

    add_index :users, :username, unique: true
  end
end

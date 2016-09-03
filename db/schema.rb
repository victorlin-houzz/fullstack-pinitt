# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160831161312) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "boards", force: :cascade do |t|
    t.string   "title",       null: false
    t.string   "description"
    t.integer  "user_id",     null: false
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.index ["user_id"], name: "index_boards_on_user_id", using: :btree
  end

  create_table "pins", force: :cascade do |t|
    t.string   "title",                                              null: false
    t.string   "description",                                        null: false
    t.string   "url",         default: "https://www.appacademy.io/"
    t.string   "image_url",                                          null: false
    t.integer  "user_id",                                            null: false
    t.integer  "board_id",                                           null: false
    t.datetime "created_at",                                         null: false
    t.datetime "updated_at",                                         null: false
    t.index ["board_id"], name: "index_pins_on_board_id", using: :btree
    t.index ["user_id"], name: "index_pins_on_user_id", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "username",                                                                                                        null: false
    t.string   "password_digest",                                                                                                 null: false
    t.string   "session_token",                                                                                                   null: false
    t.string   "image_url",       default: "http://res.cloudinary.com/pinitt/image/upload/v1472660366/default_avatar_jn1sgm.png"
    t.datetime "created_at",                                                                                                      null: false
    t.datetime "updated_at",                                                                                                      null: false
    t.index ["username"], name: "index_users_on_username", unique: true, using: :btree
  end

end

# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | null: false, primary key
username        | string    | null: false, index: true, unique
img_url         | string    | default: "/assets/default_avatar.png"
password_digest | string    | null: false
session_token   | string    | null: false, index: true, unique: true

## pins
column name   | data type | details
--------------|-----------|-----------------------
id            | integer   | null: false, primary key
title         | string    | null: false
description   | text      |
image_url     | string    | null: false
user_id       | integer   | null: false, foreign key (references users), index: true
board_id      | integer   | null: false, foreign key (references boards), index: true

## boards
column name | data type | details
------------|-----------|-----------------------
id          | integer   | null: false, primary key
title       | string    | null: false
description | string    |
user_id     | integer   | null: false, foreign key (references users), index: true

## follows
column name    | data type | details
---------------|-----------|-----------------------
id             | integer   | null: false, primary key
user_id        | integer   | null: false, foreign key (references users), index: true
following_id   | integer   | null: false, foreign key (references users), index: true

## likes (Bonus)
column name    | data type | details
---------------|-----------|-----------------------
id             | integer   | null: false, primary key
user_id        | integer   | null: false, foreign key (references users), index: true
pin_id         | integer   | null: false, foreign key (references pins), index: true

## comments (Bonus)
column name | data type | details
------------|-----------|-----------------------
id          | integer   | null: false, primary key
body        | string    | null: false
pin_id      | integer   | null: false, foreign key (references pins), index: true

## tags (Bonus)
column name | data type | details
------------|-----------|-----------------------
id          | integer   | null: false, primary key
name        | string    | null: false

## taggings (Bonus)
column name | data type | details
------------|-----------|-----------------------
id          | integer   | null: false, primary key
pin_id      | integer   | null: false, foreign key (references pins), index: true
tag_id      | integer   | null: false, foreign key (references tags), index: true

## Notifications (Bonus)
column name  | data type | details
-------------|-----------|-----------------------
id           | integer   | null: false, primary key
receiver_id  | integer   |
message      | string    | null: false
pin_id       | integer   | null: false, foreign key (references pins), index: true
mentioner_id | integer   | null: false, foreign key (references users), index: true

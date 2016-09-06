json.partial! "api/users/user", user: @user, pin_counts: @user.pin_counts
p @user.pins

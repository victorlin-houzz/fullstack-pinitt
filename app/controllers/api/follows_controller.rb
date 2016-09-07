class Api::FollowsController < ApplicationController

  def create
    @follow = current_user.out_follows.create!(followee_id: params[:user_id])
    @user = User.find_by(id: params[:user_id])
    render :show
  end

  def destroy
    @follow = current_user.out_follows.find_by(followee_id: params[:user_id])
    @follow.destroy!
    @user = User.find_by(id: params[:user_id])
    render :show
  end

  def followers
    User.find_by(id: params[:id]).followers
  end

  def followees
    User.find_by(id: params[:id]).followees
  end

end

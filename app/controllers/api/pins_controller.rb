class Api::PinsController < ApplicationController
  LIMIT = 20

  def index
    cloud_name = ENV['CLOUD_NAME']
    upload_preset = ENV['UPLOAD_PRESET']

    if params[:board_id]
      @pins = Pin.where(board_id: params[:board_id])
    elsif params[:user_id]
      @pins = Pin.where(user_id: params[:user_id])
    elsif params[:keyword]
      like_keyword = "%#{params[:keyword]}%"
      @pins = Pin.where("TITLE LIKE ? OR DESCRIPTION LIKE ?", like_keyword, like_keyword)
    else
      @pins = Pin.all.order("created_at DESC").page(params[:page]).per(10)
      # @pins = @pins.where("created_at < ?", params[:max_created_at]) if params[:max_created_at]
      # @pins = @pins.limit(20)
    end
    render :index

	end

  # def show
  #   @pins =
  #     current_user.feed_tweets(LIMIT, params[:max_created_at]).includes(:user)
  #   respond_to do |format|
  #     format.html { render :show }
  #     format.json { render :show }
  #   end
  # end

	def show
		@pin = Pin.find(params[:id])
    render :show
	end

  def create
    @pin = Pin.new(pin_params)
    if @pin.save
      render :show
    else
      render json: @pin.errors.full_messages, status: 422
    end
  end

  def update
    @pin = Pin.find(params[:id])
    if @pin.update(pin_params)
      render :show
    else
      render json: @pin.errors.full_messages, status: 422
    end
  end

  def destroy
    @pin = Pin.find(params[:id])
    if @pin.destroy
      render :show
    else
      render json: @pin.errors.full_messages, status: 422
    end
  end


  private

  def pin_params
    params.require(:pin).permit(:title, :description, :user_id, :board_id, :url, :image_url)
  end
end

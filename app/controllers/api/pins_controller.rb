class Api::PinsController < ApplicationController
  LIMIT = 20

  def index
		@pins = Pin.all
    render :index
	end

  def index_by_board
    @pins = Pin.where(board_id: params[:board_id])
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

  def delete
    @pin.find(params[:id])
    if @pin.destroy
      render :show
    else
      render json: @pin.errors.full_messages, status: 422
    end
  end


  private

  def pin_params
    params.require(:pin).permit(:title, :description, :user_id, :board_id)
  end
end

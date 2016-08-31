json.extract!(
  board,
  :id, :title, :description, :user_id)
  if show_pins
  	json.pins do
  		board.pins.each do |pin|
  			json.set! pin.id do
  				json.partial! 'api/pins/pin', pin: pin
  			end
  		end
  	end
  end

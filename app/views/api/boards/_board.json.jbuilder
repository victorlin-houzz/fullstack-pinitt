json.extract!(
  board,
  :id, :title, :description, :user)
  # if show_all_pins, show all, otherwise only show 3.
  # if show_all_pins
  # 	json.pins do
  # 		board.pins.each do |pin|
  # 			json.set! pin.id do
  # 				json.partial! 'api/pins/pin', pin: pin
  # 			end
  # 		end
  # 	end
  # else
  #   json.pins do
  #     i = 0
  #     board.pins.each do |pin|
  # 			json.set! pin.id do
  # 				json.partial! 'api/pins/pin', pin: pin
  # 			end
  #       i += 1
  #       if i == 3
  #         break
  #       end
  # 		end
  # 	end
  # end

  json.pins do
    board.pins.each do |pin|
      json.set! pin.id do
        json.partial! 'api/pins/pin', pin: pin
      end
    end
  end

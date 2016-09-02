json.array!(@boards) do |board|
  json.partial!('board', board: board, show_all_pins: false)
end

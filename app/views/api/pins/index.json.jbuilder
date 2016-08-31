json.array!(@pins) do |pin|
  json.partial!('pin', pin: pin)
end

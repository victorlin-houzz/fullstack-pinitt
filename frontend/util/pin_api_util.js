export const fetchAllPins = function(success, error) {
	$.ajax({
		method: 'GET',
		url: '/api/pins',
		success,
		error
	});
};

export const fetchBoardPins = function(boardId, success, error) {
	$.ajax({
		method: 'GET',
		url: '/api/pins/index_by_board',
		data: {board_id: boardId},
		success,
		error
	});
};

export const fetchPin = (id, success, error) => {
  $.ajax({
    method: 'GET',
    url: `api/pins/${id}`,
    success,
		error
  });
};

export const createPin = (pin, success, error) => {
  $.ajax({
    method: 'POST',
    url: 'api/pins',
    data: pin,
    success,
		error
  });
};

export const updatePin = (pin, success, error) => {
  $.ajax({
    method: 'PATCH',
    url: `api/pins/${pin.pin.id}`,
    data: pin,
    success,
		error
  });
};

export const deletePin = (id, success, error) => {
	$.ajax({
		method: 'DELETE',
    url: `api/pins/${id}`,
		success,
		error
	});
};
